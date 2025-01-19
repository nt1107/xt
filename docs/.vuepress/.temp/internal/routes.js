export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/private/xt/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎来到我的博客"} }],
  ["/post/aa.html", { loader: () => import(/* webpackChunkName: "post_aa.html" */"E:/private/xt/docs/.vuepress/.temp/pages/post/aa.html.js"), meta: {"title":"abc"} }],
  ["/post/firstPost.html", { loader: () => import(/* webpackChunkName: "post_firstPost.html" */"E:/private/xt/docs/.vuepress/.temp/pages/post/firstPost.html.js"), meta: {"title":"第一篇博客"} }],
  ["/post/", { loader: () => import(/* webpackChunkName: "post_index.html" */"E:/private/xt/docs/.vuepress/.temp/pages/post/index.html.js"), meta: {"title":"博客文章列表"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/private/xt/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
