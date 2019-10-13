export const CHANGE_USER = 'CHANGE_USER'
export const CHANGE_SECTION = 'CHANGE_SECTION'
// 初始化 CHANGE_USER 对象
export const changeUser = user => {
  return {
    type: CHANGE_USER,
    user
  }
}

export const changeSection = section => {
  return {
    type: CHANGE_SECTION,
    section
  }
}
