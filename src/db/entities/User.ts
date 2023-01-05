import {
  Table,
  Column,
  Model,
  HasMany,
  HasOne,
  UpdatedAt,
  CreatedAt,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { UserSetting } from './UserSetting';
import { Event } from './Event';
import { Auth } from './Auth';
import { Friendship } from './Friendship';

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
  fullName: string;

  @ForeignKey(() => UserSetting)
  @Column(DataType.INTEGER)
  userSettingId: number;

  @ForeignKey(() => Event)
  @Column({ type: DataType.ARRAY(DataType.INTEGER) })
  eventsId: number[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  // $ Relationship
  @HasMany(() => Event)
  Event: Event[];

  @HasOne(() => Auth)
  Auth: Auth;

  @HasMany(() => Friendship)
  Friendship: Friendship[];

  @HasOne(() => UserSetting)
  UserSetting: UserSetting;
}
/* Docs : https://github.com/sequelize/sequelize-typescript/issues/754 */
// Foreign key for "User" is missing on "UserSetting"
