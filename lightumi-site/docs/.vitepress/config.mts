import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LightUMI',
  description: 'Lightweight synchronized data acquisition for robot training',
  lang: 'zh-CN',
  base: process.env.BASE_PATH ?? '/',
  cleanUrls: false,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'LightUMI',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: 'Gitee', link: 'https://gitee.com/zhouyangxin/light-umi' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '数据对齐', link: '/guide/data-alignment' },
          { text: '训练数组', link: '/guide/training-arrays' },
          { text: '传感器扩展', link: '/guide/sensors' }
        ]
      }
    ],
    socialLinks: [
      {
        icon: {
          svg: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64Zm232 308H468c-52.9 0-96 43.1-96 96v184h276c13.3 0 24-10.7 24-24v-52H472v-96h296v148c0 66.2-53.8 120-120 120H276V468c0-105.9 86.1-192 192-192h276v96Z"/></svg>'
        },
        link: 'https://gitee.com/zhouyangxin/light-umi'
      }
    ],
    footer: {
      message: 'LightUMI is built for synchronized robot-training data collection.',
      copyright: 'Copyright © 2026 zhouyangxin'
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://gitee.com/zhouyangxin/light-umi/edit/master/lightumi-site/docs/:path',
      text: '在 Gitee 上编辑此页'
    },
    lastUpdated: {
      text: '最后更新'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    }
  }
})
