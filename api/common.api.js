import qs from 'qs'
/**
 * 產生短網址
 * request
 * @param {Object} obj
 * @param {String} obj.Url - 網址
 * @param {String} obj.ImgUrl - 縮圖圖片網址
 * @param {String} obj.Title - 縮圖標題
 * @param {String} obj.Description - 縮圖描述 *
 * response:
 * @param {Object} obj
 * @param {String} obj.Message - 訊息
 * @param {Number} obj.ResultCode - 0:新增失敗  1:新增成功  999:系統錯誤
 * @param {String} obj.Result - 短網址，ResultCode=1才有值
 */
export async function GetShortUrl(obj, self) {
    const response = await self.$serverApi.$post(
        `/api/Common/GetShortUrl`,
        qs.stringify(obj)
    )
    return response
}
export async function LotteryLogCount(obj, self) {
    const response = await self.$serverApi.$post(
        `/api/Game/LotteryLogCount`,
        qs.stringify(obj)
    )
    return response
}
export async function LotteryResult(obj, self) {
    const response = await self.$serverApi.$post(
        `/api/game/LotteryResult`,
        qs.stringify(obj)
    )
    return response
}
