import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, useContainer, UpdateDateColumn } from "typeorm"

@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    titulo: string

    @Column()
    conteudo: string

    @Column()
    lista: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
