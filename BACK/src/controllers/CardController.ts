import { validate } from "class-validator";
import { Request, Response } from 'express';
import { CardDTO } from "../dto/card.dto";
import { CardService } from "../services/CardService";

class CardController {
    static async create(request: Request, response: Response): Promise<Response> {
        const {titulo, conteudo, lista} = request.body;
        const cardData = CardDTO.create({ titulo, lista, conteudo })
        const details = await validate(cardData);
        if(details.length > 0) {
            return response.status(400)
        }

        try {
            const result = await CardService.createCard(cardData)
            return response.status(201).json(result)
        } catch (err) {
            console.log(err)
            return response.status(500).json(err);
        }
    }

    static async update(request: Request, response: Response): Promise<Response> {
        const {titulo, conteudo, lista} = request.body;
        const {id} = request.params;
        const cardData = CardDTO.create({ id ,titulo, lista, conteudo })
        const details = await validate(cardData);
        if(details.length > 0) {
            return response.status(400)
        }

        try {
            const result = await CardService.updateCard(cardData)
            return response.status(201).json(result)
        } catch (err) {
            console.log(err)
            return response.status(500).json(err);
        }
    }
}

export { CardController}