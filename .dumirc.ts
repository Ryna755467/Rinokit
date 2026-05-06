import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['/favicon.svg'], // 标签页图标
  title: 'Rinokit', // 标签页标题
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
    name: 'Rinokit',
    logo: '/favicon.svg',
    nav: [
      // 顶部导航栏
      { title: '通用组件', link: '/components' },
      { title: '工具函数', link: '/utils' },
      { title: 'Hooks', link: '/hooks' },
    ],
  },
});
