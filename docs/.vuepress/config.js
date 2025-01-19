import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    // 导航栏配置
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/post/' }
    ],

    // 侧边栏配置
    sidebar: {
      '/post/': [
        {
          title: '博客文章',
          collapsable: false,
          children: [
            '',
            'firstPost',
            'aa'
          ]
        }
      ]
    },
    sidebarDepth: 2,
  }),

  bundler: viteBundler(),
})