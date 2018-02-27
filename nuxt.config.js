module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "tailwind-documentation",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    bodyAttrs: {
      class: "font-sans leading-normal"
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#9561e2" },
  /*
  ** Build configuration
  */
  build: {
    postcss: [require("tailwindcss")("./tailwind.js"), require("autoprefixer")],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  css: ["~/assets/css/tailwind.css"]
};
