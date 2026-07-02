import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

// github-pages 根路径
const BASE_PATH = '/Rinokit/';

export default defineConfig({
  base: BASE_PATH,
  publicPath: BASE_PATH,
  outputPath: 'docs-dist',
  favicons: [`${BASE_PATH}favicon.svg`], // 标签页图标
  title: 'RinoKit', // 标签页标题
  resolve: {
    docDirs: ['docs'], // 说明文档的解析目录
    atomDirs: [
      // 原子文档的解析目录
      // src/components 目录下的文档会被匹配到/components路由 type值会被复数化后作为路由的前缀路径
      { type: 'component', dir: 'src/components' },
      { type: 'utils', dir: 'src/utils' },
      { type: 'hook', dir: 'src/hooks' },
    ],
    entryFile: './src/index.ts', // 入口文件
  },
  themeConfig: {
    ...defineThemeConfig({
      social: {
        github: {
          name: 'RinoKit',
          link: 'https://github.com/Ryna755467/Rinokit',
        },
      },
      thumbBackground: true,
      settingPanelVisible: true,
    }),
    name: 'RinoKit',
    logo: `${BASE_PATH}favicon.svg`, // 导航栏图标
    nav: [
      // 顶部导航栏
      { title: 'Components', link: '/components' },
      { title: 'Utils', link: '/utils' },
      { title: 'Hooks', link: '/hooks' },
    ],
    prefersColor: {
      // 主题切换配置
      default: 'auto',
      switch: true,
    },
    lastUpdated: true, // 在文档底部显示最后更新时间
    showLineNum: true, // 显示代码行号
  },
  alias: {
    '@components': '/src/components',
    '@constants': '/src/constants',
    '@hooks': '/src/hooks',
    '@styles': '/src/styles',
    '@types': '/src/types',
    '@utils': '/src/utils',
    '@assets': '/src/assets',
  },
});
