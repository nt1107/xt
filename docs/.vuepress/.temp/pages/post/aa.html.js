import comp from "E:/private/xt/docs/.vuepress/.temp/pages/post/aa.html.vue"
const data = JSON.parse("{\"path\":\"/post/aa.html\",\"title\":\"abc\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1737289715000,\"contributors\":[{\"name\":\"junfengTan\",\"username\":\"junfengTan\",\"email\":\"junfeng.tan@izhijue.com\",\"commits\":1,\"url\":\"https://github.com/junfengTan\"}]},\"filePathRelative\":\"post/aa.md\"}")
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
