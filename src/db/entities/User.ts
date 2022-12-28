import {
  Table,
  Column,
  Model,
  HasMany,
  HasOne,
  DeletedAt,
  UpdatedAt,
  CreatedAt,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { UserSetting } from './UserSetting';
import { Calendar } from './Calendar';
import { Auth } from './Auth';

@Table
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING(50), validate: { isEmail: true } })
  email: string;

  @Column({ type: DataType.STRING(25) })
  nickName: string;

  @Column({ type: DataType.STRING, validate: { isUrl: true } })
  profilePicture: string;

  @Column({ type: DataType.STRING(30) })
  firstName: string;

  @Column({ type: DataType.STRING(30) })
  lastName: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @ForeignKey(() => UserSetting)
  @Column(DataType.INTEGER)
  userSettingId: number;

  @HasOne(() => UserSetting)
  userSetting: UserSetting;

  @ForeignKey(() => Calendar)
  @Column({ type: DataType.ARRAY(DataType.INTEGER) })
  eventsId: number[];

  @HasMany(() => Calendar)
  calendar: Calendar[];

  @HasOne(() => Auth)
  auth: Auth;
}
/* Docs : https://github.com/sequelize/sequelize-typescript/issues/754 */
// Foreign key for "User" is missing on "UserSetting"
