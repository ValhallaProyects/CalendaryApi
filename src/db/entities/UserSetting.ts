import {
  Table,
  Column,
  Model,
  DeletedAt,
  UpdatedAt,
  CreatedAt,
  ForeignKey,
  BelongsTo,
  HasOne,
  DataType,
} from 'sequelize-typescript';
import { RegionSetting } from './RegionSetting';
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

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @ForeignKey(() => RegionSetting)
  @Column
  regionSettingId: number;

  @HasOne(() => RegionSetting)
  regionSetting: RegionSetting;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
}
