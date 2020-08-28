import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'

import { UserDatasource } from '../../../application/datasources/user.datasource'

@Entity('users')
export default class UsersTable implements UserDatasource {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false, type: 'varchar' })
  public name: string;

  @Column({ nullable: false, type: 'varchar' })
  public email: string;

  @Column({ nullable: false, type: 'varchar' })
  public password: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;
}
