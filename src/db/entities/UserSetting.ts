import {
  Table,
  Column,
  Model,
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

  @ForeignKey(() => RegionSetting)
  @Column(DataType.INTEGER)
  regionSettingId: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  // $ Relationship
  @HasOne(() => RegionSetting)
  regionSetting: RegionSetting;

  @BelongsTo(() => User)
  user: User;
}
