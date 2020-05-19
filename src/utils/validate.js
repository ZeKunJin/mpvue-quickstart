export function validPhone (str) {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(str)
}

export function validName (str) {
  const reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
  return reg.test(str)
}

export function validEmail (str) {
  const reg = /[@]/
  return reg.test(str)
}

export function Toast (val) {
  wx.showToast({
    title: val,
    icon: 'none'
  })
}

const test = {
  value: '',

  default () {
    return true
  },

  phone () {
    const reg = /^1[3456789]\d{9}$/
    return reg.test(this.value)
  },

  email () {
    const reg = /[@]/
    return reg.test(this.value)
  }
}

export const validate = (value) => {
  return new Promise((resolve, reject) => {
    value.forEach(element => {
      const {
        value,
        type,
        required,
        message
      } = element

      test.value = value

      if (required && !value) {
        reject(message)
      } else if (!test[type]() && required) {
        reject(message)
      }
    })

    resolve()
  })
}
