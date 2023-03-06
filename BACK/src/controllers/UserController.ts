import { hash } from 'bcryptjs';
import { sign } from "jsonwebtoken";
import { compare } from 'bcryptjs';
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { jwtSecretKey } from "..";

class UserController {
    static async createUser(request: Request, response: Response): Promise <Response> {
        try {
            const {login, senha} = request.body;
            const userExists = await AppDataSource.manager.findOne(User, {where: {login: login}})
            if(userExists) {
                return response.status(400).json('user already exists')
            }
            const passwordHash = await hash(senha, 8)
            const user = new User();
            user.login = login;
            user.senha = passwordHash; 
            await AppDataSource.manager.save(user);
            return response.status(200).json('User created');
        } catch(err) {
            console.log(err)
            return null;
        }
    }
    static async auth(request: Request, response: Response): Promise<Response> {
        const { login, senha } = request.body;
        try {
          const context = await authenticateUser({login, senha});
          
          if (!context) {
            return response.status(401).json('Incorrect email/password');
          }
          return response.status(200).json(context);
        } catch (error) {
          return response.status(500).json(error);
        }
      }
}

const authenticateUser = async (authData): Promise<any | null> => {
    try {
      const user = await AppDataSource.manager.findOne(User, {where: { login: authData.login }});
      if (!user) {
        return null;
      }
      const passwordMatch = await compare(authData.senha, user?.senha);
  
      if (!passwordMatch) {
        return null;
      }
      console.log(jwtSecretKey)
  
      const token = sign(
        {
          login: user.login,
          userId: user.id
        },
        jwtSecretKey as string,
        {
          subject: user.login,
          expiresIn: '1d'
        }
      );
      console.log(token)
      return token;
    } catch (error) {
      throw new Error(error);
    }
  };

export {UserController}