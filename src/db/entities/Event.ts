import {
  Table,
  Column,
  Model,
  UpdatedAt,
  CreatedAt,
  BelongsTo,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './User';

@Table
export class Event extends Model {
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

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.STRING(7) })
  colorCard: string;

  @Column({ type: DataType.ARRAY(DataType.INTEGER) })
  days: number[];

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  hours: string[];

  @Column({ type: DataType.DATE() })
  dateEnd: Date;

  @Column({ type: DataType.DATE() })
  dateStart: Date;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  ownerId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.ARRAY(DataType.INTEGER) })
  guestsId: number[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  // $ Relationship
  @BelongsTo(() => User)
  user: User;
}
