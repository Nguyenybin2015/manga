import { db } from '../../config/db.config.js';
import * as constantsNameTableJs from '../constants/constants.name-table.js';

export async function findUserByEmail(email) {
  const result = await db
    .select('*')
    .from(constantsNameTableJs.userTable)
    .where('email', email);
  return result[0];
}
