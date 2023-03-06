import { AppDataSource } from "./data-source"
import express from 'express';
import * as dotenv from 'dotenv';
import { router } from "./routes";
import cors from 'cors'
dotenv.config();
export const jwtSecretKey = process.env.JWT_SECRET;
AppDataSource.initialize().then(async () => {

    console.log("Here you can setup and run express / fastify / any other framework.")
    const app = express();
    app.use(cors())
    app.use(express.json())
    app.use(router);
    app.listen(8080, () => {
        console.log('Server listening on port 8080')
    })
}).catch(error => console.log(error))


