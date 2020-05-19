export function countdown (obj) {
  const TIME_COUNT = 60
  if (!obj.timer) {
    obj.waitTime = TIME_COUNT
    obj.canGet = false
    obj.timer = setInterval(() => {
      if (obj.waitTime > 0 && obj.waitTime <= TIME_COUNT) {
        obj.waitTime--
      } else {
        obj.canGet = true
        clearInterval(obj.timer)
        obj.timer = null
      }
    }, 1000)
  }
  return {
    timer: obj.timer,
    canGet: obj.canGet,
    waitTime: obj.waitTime
  }
}
