import {
  Table,
  Column,
  Model,
  UpdatedAt,
  CreatedAt,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { User } from './User';

@Table
export class Auth extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING(50), validate: { isEmail: true } })
  email: string;

  @Column({ type: DataType.INTEGER })
  code: number;

  @Column({ type: DataType.DATE, validate: { isDate: true } })
  expires: Date;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  // $ Relationship
  @BelongsTo(() => User)
  User: User;
}
