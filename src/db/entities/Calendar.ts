import {
  Table,
  Column,
  Model,
  DeletedAt,
  UpdatedAt,
  CreatedAt,
  BelongsTo,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './User';

@Table
export class Calendar extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  tags: string[];

  @Column({ type: DataType.STRING(70) })
  title: string;

  @Column({ type: DataType.STRING(7) })
  colorCard: string;

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.DATE() })
  dateEnd: Date;

  @Column({ type: DataType.DATE() })
  dateStart: Date;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
}
