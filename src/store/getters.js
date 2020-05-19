const getters = {
  token: state => state.user.token,
  id: state => state.user.id,
  name: state => state.user.name,
  phone: state => state.user.phone,

  notice: state => state.notice.notice
}

export default getters
