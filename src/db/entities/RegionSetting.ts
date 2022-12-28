import {
  Table,
  Column,
  Model,
  DeletedAt,
  UpdatedAt,
  CreatedAt,
  BelongsTo,
  AllowNull,
  DataType,
  Default,
  ForeignKey,
} from 'sequelize-typescript';
import { UserSetting } from './UserSetting';

/* Docs : 
        https://databasefaqs.com/postgresql-date-format/
        https://www.databasestar.com/database-timezones/
        https://sequelize.org/docs/v7/other-topics/other-data-types/
        https://blog.untrod.com/2016/08/actually-understanding-timezones-in-postgresql.html
        https://kaiwern.com/posts/2021/07/20/what-you-need-to-know-about-postgresql-timezone/
        https://github.com/sequelize/sequelize/issues/11381 
*/

@Table
export class RegionSetting extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING(2) })
  languaje: string;

  @Column({ type: DataType.DATE })
  timezone: Date;

  @AllowNull(false)
  @Default('24')
  @Column(DataType.ENUM(...['12', '24']))
  timeformat: string;

  @AllowNull(false)
  @Default('YYYY-MM-DD')
  @Column(DataType.ENUM(...['MM-DD-YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD']))
  dateformat: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @BelongsTo(() => UserSetting)
  userSetting: UserSetting;

  @ForeignKey(() => UserSetting)
  @Column(DataType.INTEGER)
  userSettingId: number;
}
// Error: @Column annotation is missing for "timeformat" of class "RegionSetting" or annotation order is wrong.
