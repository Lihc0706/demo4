//修改脚手架的配置
module.exports = {
    //选项...
    // publicPath:"",  //部署应用包时的基本url
    // outputDir:"项目2",   //打包后生成的文件夹，默认时dist
    // assetsDir:"static",     //在打包的文件夹下生成static目录存放js,img,css等静态资源
    // indexPath:"lhc.html",   //生成的单文件的文件名
    devServer:{
        // proxy:"接口地址",   // 跨域代理
        proxy:{     //配置多个
            '/api':{
                target: "http://localhost:3000",
            }
        }
    }
}

const webpack = require("webpack")
module.exports = {
	// 配置插件参数
	configureWebpack: {
		plugins: [
			// 配置 jQuery 插件的参数
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
				Popper: ['popper.js', 'default']
			})
		]
	}
}