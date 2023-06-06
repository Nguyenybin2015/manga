import { db } from '../../config/db.config.js';
import { httpStatus } from '../constants/constants.http-status.code.js';
import { userMsg } from '../constants/constants.message-response.js';
import * as constantsNameTableJs from '../constants/constants.name-table.js';
import responseFailed from '../utils/utils.response-failed.js';

export async function findUserByEmail(email) {
  const result = await db
    .select('*')
    .from(constantsNameTableJs.userTable)
    .where('email', email);
  return result[0];
}

export async function insertNewUser(res, userBody, profileBody) {
  let getUser = {};
  await db.transaction(async (trx) => {
    await db(constantsNameTableJs.userTable).insert(userBody);
    getUser = await findUserByEmail(userBody.email);
    // try {
    //   await db
    //     .insert({ ...profileBody, userId: getUser.id })
    //     .into(constantsNameTableJs.profileTable)
    //     .transacting(trx)
    //     .then(trx.commit)
    //     .catch(trx.rollback);
    // } catch (error) {
    //   await db(constantsNameTableJs.userTable).delete().where('id', getUser.id);
    //   return responseFailed(
    //     res,
    //     httpStatus.serverInterval,
    //     userMsg.createProfileError
    //   );
    // }
  });
  return getUser;
}