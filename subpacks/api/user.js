import {request} from '../utils/requests.js'
const register = () => {
    return request({
		method: 'get',
        url: '/auth/getAll'
    })
}

	
const login = (data) => {
	console.log("进去了login接口")
	console.log(data)
	console.log("打印-------")
	return request({
		method: 'POST',
		data,
	    url: '/auth/login/email'
	})
}
const ttt = (data) => {
	console.log(data)
}
module.exports = {
	register,
	login,
	ttt
}