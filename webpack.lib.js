const path = require('path')
const glob = require('glob')
const { VueLoaderPlugin } = require('vue-loader') 
const list = {}

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  console.log(files)

  for (const file of files) {
    const component = file.split(/[/.]/)[2]
    console.log(component)
    list[component] = `./${file}`
  }
}

makeList('components/lib', list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'clyUI',
    libraryTarget: 'umd',
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      }
    ]
  }
}
