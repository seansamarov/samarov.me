import * as fs from 'fs';
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            template: "index.html",
            inject: {
                data: {
                    OBF_MAILTO_FORM: fs.readFileSync("contact.html").toString()
                }
            }
        })
    ]
})