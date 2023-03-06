import { DataSource } from "typeorm";
import { AppDataSource } from "../data-source";
import { CardDTO } from "../dto/card.dto";
import { Card } from "../entity/Card";

class CardService {
    static async createCard(data: CardDTO): Promise<boolean | null> {
        const card = new Card()
        card.lista = data.lista;
        card.conteudo = data.conteudo;
        card.titulo = data.titulo;
        try {

            await AppDataSource.manager.save(card)
            return true
        } catch (err){
            console.log(err)
            return null
        }
        
    }

    static async updateCard(data: CardDTO): Promise<boolean | null> {
        const card = await AppDataSource.manager.findOne(Card, { where: {id: data.id}})
        card.lista = data.lista;
        card.conteudo = data.conteudo;
        card.titulo = data.titulo;
        try {

            await AppDataSource.manager.save(card)
            return true
        } catch (err){
            console.log(err)
            return null
        }
        
    }

    static async getCards(): Promise<Card[] | null> {
        try {
            const cards = await AppDataSource.manager.find(Card)
            console.log(cards)
            return cards
        } catch (err){
            console.log(err)
            return null
        }
        
    }
}

export {CardService}