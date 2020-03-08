/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
        filename: "[name].[hash].js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
        ],
    },
};
