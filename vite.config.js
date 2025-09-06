import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import {imagetools} from "vite-imagetools";
import {build} from "vite";

// TODO add html minifying and style enforcement
// TODO add CSS style enforcement
// TODO add impage optimization and make it somewhat automatic.
// TODO probably gonna want to add srcsets for images, and preview images for videos
// TODO Software is never completed, only abandoned.
export default {
    build: {
        rollupOptions: {
            input: {
                home: "index.html",
                music: "music.html"
            }
        }
    },
    plugins: [
        imagetools(),
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
        }),
    ],
};