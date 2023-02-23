let baseUrl = 'https://123.60.59.138:5000'; //域名或选取所有接口不变的那一部分
export const request = (options = {}) => {
	//异步封装接口，使用Promise处理异步请求
	return new Promise((resolve, reject) => {
		// 发送请求
		uni.request({
			url: baseUrl + options.url || '', //接收请求的API
			method: options.method || 'GET', //接收请求的方式,如果s不传默认为GET
			data: options.data || {}, //接收请求的data,不传默认为空
		}).then(data => {
			let [err, res] = data;
			if (res.data.code == -1) reject(new error("发生错误"))
			resolve(res.data);
		}).catch(error => {
			reject(error);
		})
	})
}
