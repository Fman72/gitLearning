var Path = require("path");

module.exports = {
    /* Sets root directory for entry key. */
    context: Path.resolve("js"),
    /* Entry point into app. Webpack iterates through all modules this module requires and bundles them together. */
    entry: './app.js',
    /* Where the files bundled by webpack should be output to.*/
    output: {
        /* The actual directory the bundle.js is placed.*/
        path: Path.resolve('build/js/'),
        /* The directory that clients will request the bundle from. When used in conjuction with path webpack can serve this file from a different location to the one it was stored in.*/
        publicPath: 'public/js',
        /* What to name the bundle. Convention is 'bundle.js'.*/
        filename: 'bundle.js',
    },
    devServer: {
        /* Set context root for web server */
      contentBase: "public"  
    },
    module: {
        /* An array that specified what loaders are being used to augment webpack functionality.*/
        loaders: [
            {
                /* A regular experssion determining what files the loader should operate on.*/
                test: /\.es6|js$/,
                /* A regular expression determining what files should be exclude by the loader. (Usually node modules)*/
                exclude: /node_modules/,
                /* The name of the loader.*/
                loader: "babel-loader"
            }
        ]
    },
    /* If file extension is not specified Webpack looks for these ones.*/
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};