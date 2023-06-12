import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Video } from "./Video"
import { Subjetct } from './Subject';

@Entity('rooms')
export class Room{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'text' })
    name: string

    @Column({type:'text'})
    description: string

    @OneToMany(() => Video, (video) => video.room)
    videos: Video[]

    @ManyToMany(() => Subjetct, subject => subject.rooms) 
    subjects: Subjetct[]
}