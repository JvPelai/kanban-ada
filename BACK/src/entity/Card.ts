import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titulo: string

    @Column()
    conteudo: string

    @Column()
    lista: number

}
