import doczPluginNetlify from "docz-plugin-netlify";
import { css } from 'docz-plugin-css'

export default {
    src: './docs/',
    theme: 'theme/index',
    indexHtml: 'theme/index.html',
    plugins: [
        doczPluginNetlify(),
        css({
            preprocessor: 'sass',
            cssmodules: true
        })
    ]
}