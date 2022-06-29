import { Entity, Column } from "typeorm";

@Entity()
export class User {
    @Column()
    id: string;

    @Column()
    name: string;

    @Column()
    document: string;

    @Column()
    created_at: string;
    
    @Column()
    updated_at: string;
}
