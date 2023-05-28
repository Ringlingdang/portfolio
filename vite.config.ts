import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }]
  },
  build: {
    assetsDir: "assets", // 打包后的静态资源目录
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js", // 代码分割后的文件名
        entryFileNames: "assets/js/[name].[hash].js", // 入口文件名
        sourcemap: false, // 关闭sourcemap
        // 静态资源文件名  chunkInfo 为静态资源信息
        assetFileNames: chunkInfo => {
          // 用后缀名称进行区别处理
          // 处理其他资源文件名 e.g. css png 等
          const fileExt = path.extname(chunkInfo.name)
          // const modelFile = // 这里没什么用,只是为了区分一下
          //   fileExt === ".gltf" || fileExt === ".glb" || fileExt === ".obj" || fileExt === ".fob"
          let subDir = "images"

          if (fileExt === ".css") {
            subDir = "css"
          }
          return `assets/${subDir}/[name].[hash].[ext]` // 生成的文件名
        },
        manualChunks: (id: string): string => {
          // 手动分割代码块
          if (id.includes("node_modules")) return "vendor" // 第三方库
        }
      }
    },
    minify: true, // 开启压缩(压缩后的代码将会去除注释、空格和其他不必要的字符，以减小文件大小。)
    terserOptions: {
      compress: {
        drop_console: true, // 去掉console
        drop_debugger: true // 去掉debugger
      }
    },
    // 关闭打包后的文件大小提示(压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。)
    // reportCompressedSize: false,
    cssCodeSplit: true, // 开启css分离
    assetsInlineLimit: 1024 * 5, // 小于 5kb 的图片会被转成base64
    emptyOutDir: true // 清空输出目录
  },
  base: "./"
})
