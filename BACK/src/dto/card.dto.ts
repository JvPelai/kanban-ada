import { IsString } from "class-validator";

class CardDTO {
    id?: string;

    @IsString()
    titulo: string;

    @IsString()
    conteudo: string;
    
    @IsString()
    lista: string;
    
    private constructor() {}

    static create(card: CardDTO): CardDTO {
        const instance = new CardDTO();
        instance.titulo = card.titulo;
        instance.conteudo = card.conteudo;
        instance.lista = card.lista;
        if (card.id) {
            instance.id = card.id;
        }
        return instance;
    }
}

export { CardDTO };