var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        "SignUp": "./src/main/resources/static/components/SignUpForm.js",
        "SignIn": "./src/main/resources/static/components/SignInForm.js",
        "Main": ["./src/main/resources/static/components/CoordForm.js",
            "./src/main/resources/static/components/CanvasComponent.js",
            "./src/main/resources/static/components/PointsTable.js"]

    }, // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './src/main/resources/static/public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/',
        filename: "[name]-bundle.js"       // название создаваемого файла
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["env", "react"]    // используемые плагины
                }
            }
        ]
    }
}