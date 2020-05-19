export function getToken () {
  try {
    var value = wx.getStorageSync('token')
    if (value) {
      return value
    }
  } catch (e) {
    // Do something when catch error
  }
}

export function setToken (token) {
  try {
    wx.setStorageSync('token', token)
  } catch (e) {
    // Do something when catch error
  }
}

export function removeToken () {
  try {
    wx.removeStorageSync('token')
  } catch (e) {
    // Do something when catch error
  }
}
