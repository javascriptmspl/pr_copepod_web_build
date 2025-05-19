import { data } from "jquery"

export const LOCAL_USER = JSON.parse(localStorage.getItem('LoginUser'))
export const MODE_ID = LOCAL_USER?.mode
export const USERID = LOCAL_USER?._id

