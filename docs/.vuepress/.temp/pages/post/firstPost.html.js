import comp from "E:/private/xt/docs/.vuepress/.temp/pages/post/firstPost.html.vue"
const data = JSON.parse("{\"path\":\"/post/firstPost.html\",\"title\":\"第一篇博客\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"第一篇博客\"},\"headers\":[{\"level\":2,\"title\":\"子标题\",\"slug\":\"子标题\",\"link\":\"#子标题\",\"children\":[]},{\"level\":2,\"title\":\"子二\",\"slug\":\"子二\",\"link\":\"#子二\",\"children\":[{\"level\":3,\"title\":\"子子标题\",\"slug\":\"子子标题\",\"link\":\"#子子标题\",\"children\":[]}]}],\"git\":{\"updatedTime\":1737289715000,\"contributors\":[{\"name\":\"junfengTan\",\"username\":\"junfengTan\",\"email\":\"junfeng.tan@izhijue.com\",\"commits\":1,\"url\":\"https://github.com/junfengTan\"}]},\"filePathRelative\":\"post/firstPost.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
