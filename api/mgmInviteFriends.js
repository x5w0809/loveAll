import qs from 'qs'
const apiPath = '/api/MGMInviteFriends'
/**
 * 取得受邀人數
 * @param {Object} obj
 * @param {String} obj.MGMActivityId - 活動ID
 */
export async function GetInvitedCount(obj, self) {
  const response = await self.$serverApi.$post(
    `${apiPath}/GetInvitedCount`,
    qs.stringify(obj)
  )
  return response
}
/**
 * 取得邀請碼
 * @param {Object} obj
 * @param {String} obj.MGMActivityId - 活動ID
 */
export async function GetAccountCode(obj, self) {
  const response = await self.$serverApi.$post(
    `${apiPath}/GetAccountCode`,
    qs.stringify(obj)
  )
  return response
}