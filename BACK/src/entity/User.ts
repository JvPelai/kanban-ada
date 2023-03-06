import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    login: string

    @Column()
    senha: string


}
