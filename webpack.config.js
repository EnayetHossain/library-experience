const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // set mode of the application production/development
    mode: "development",
    // set the entry point of the application in this case index.js
    entry: {
        main: path.resolve(__dirname, "src/index.js"),
    },

    // set the output folder and the name of the output file
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js", // this name is related to the name of the entry with hash
        clean: true, // keep the dist folder clean
        assetModuleFilename: "[name][ext]" // keeps the original file name for the assets
    },

    // setup the dev server for live preview
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist") // live dev server serves the dist folder
        },
        port: 3000, // the on which the application will run on
        open: true, // opens the browser automatically
        hot: true, // uses hot reloading
        compress: true, // uses compression
        historyApiFallback: true,
    },

    // setup the right loaders for right file types
    module: {
        rules: [
            // looks for all the css files and loads them using appropriate loaders
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },

            // load the js with babel loader for better browser compatibility
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },

            // checks all the given extension and uses the appropriate loaders
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/i,
                type: "asset/resource"
            },

            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }
        ],
    },

    // makes sure the output html file name and the title and also takes care of templates
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack app",
            filename: "index.html",
            template: "src/index.html",
        })
    ]
}