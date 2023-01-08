import {
  Table,
  Column,
  Model,
  UpdatedAt,
  CreatedAt,
  ForeignKey,
  BelongsTo,
  DataType,
  AllowNull,
  Default,
} from 'sequelize-typescript';
import { User } from './User';

@Table
export class UserSetting extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  tags: string[];

  @Column({ type: DataType.STRING(7) })
  colorTheme: string;

  @Column({ type: DataType.STRING(2) })
  languaje: string;

  @AllowNull(false)
  @Default('24')
  @Column(DataType.ENUM(...['12', '24']))
  timeformat: string;

  @AllowNull(false)
  @Default('YYYY-MM-DD')
  @Column(DataType.ENUM(...['MM-DD-YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD']))
  dateformat: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => User)
  user: User;
}
