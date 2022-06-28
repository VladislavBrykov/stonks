import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Scalping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pairName: string;

  @Column()
  transaction: string;

  @Column()
  startPrice: string;

  @Column()
  finishPrice: string;
}
