const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token, //token的快捷访问
  name: state => state.user.userInfo.username,
  userId: state => state.user.userInfo.userId,
  staffPhoto: state => state.user.userInfo.staffPhoto //头像的快捷访问
}
export default getters
