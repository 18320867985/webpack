/*
 * webpack --config webpack.config.js
 * */
module.exports = {

	// __dirname是nodejs的全局的变量  意思是我们项目的根目录
	entry: __dirname + '/app/index.js',

	// 输出文件
	output: {
		filename: 'index.js', // 输出的文件名
		path: __dirname + '/dist' // 输出的目录
	},

	// json-loader的配置
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},

}