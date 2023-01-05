import {
  Table,
  Column,
  Model,
  UpdatedAt,
  CreatedAt,
  ForeignKey,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './User';

@Table
export class Friendship extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  requesterId: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  addresseeId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  // $ Relationship
  @BelongsTo(() => User)
  user: User;
}
/* Docs : https://github.com/sequelize/sequelize-typescript/issues/754 */
// Foreign key for "User" is missing on "UserSetting"
