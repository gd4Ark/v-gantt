/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const glob = require('glob')

module.exports = {
  title: 'v-gantt 文档',
  styleguideDir: 'docs', // 每次构建会清除掉内容，所以文档不能放在里面
  version: require('./package.json').version,
  pagePerSection: true,
  ribbon: {
    url: 'https://github.com/FEMessage/v-gantt',
  },
  require: ['./styleguide.config.extra.js'],
  sections: [
    {
      name: 'Components',
      components: 'src/index.vue',
      usageMode: 'expand',
    },
    {
      name: 'Demo',
      sections: glob
        .sync('docs-md/*.md')
        .map((p) => ({ name: path.basename(p, '.md'), content: p })),
    },
  ],
  // webpackConfig: {
  //   // custom config goes here
  // },
  exampleMode: 'expand',
}
