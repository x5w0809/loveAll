import qs from 'qs'
/**
 * 沒綁定即登出
 */
export async function logout(obj, self) {
    const response = await self.$webApi.$post(
        `/Account/Logout`,
        qs.stringify(obj)
    )
    return response
}
