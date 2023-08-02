// git init
// npm init -y
// npm install webpack webpack-cli -D

// instalar plugins
// npm i html-webpack-plugin copy-webpack-plugin @babel/core babel-loader - D
const path = require ("path")
const HtmlWebpackPlugin= require("html-webpack-plugin")

module.exports={
    entry:"./src/index.js",
    ouput:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js"
    },
    resolve:{
        extensions:[".js"]
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    plugins:[
        {
            new HtmlWebpackPlugin({
                inject:true,
                template: "./public/index.html",
                filename:"./index.html"
            })
        }
    ]

}

/*Este archivo de configuración define las siguientes opciones:

entry: Especifica el archivo de entrada de su aplicación, en este caso ./src/index.js
output: Especifica la ruta de salida y el nombre del archivo empaquetado, en este caso el archivo se llama bundle.js y se encuentra en la carpeta /dist
module: Especifica las reglas para los módulos, en este caso se establece que todos los archivos .js deben ser procesados por babel-loader y los archivos .css deben ser procesados por style-loader y css-loader
plugins: Especifica los plugins a utilizar, en este caso se utiliza HtmlWebpackPlugin para generar un archivo HTML a partir de una plantilla ./src/index.html
Ten en cuenta que para que este código funcione, tendrás que tener instaladas las dependencias necesarias, como babel-loader, html-webpack-plugin y css-loader.*/