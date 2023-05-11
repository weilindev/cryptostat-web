import Cookies from 'js-cookie'

export const setTokenCookie = token => {
	Cookies.set('token', token, { expires: 1 })
}

export const getTokenCookie = () => {
	return Cookies.get('token')
}

export const removeTokenCookie = () => {
	Cookies.remove('token')
}