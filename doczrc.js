import doczPluginNetlify from "docz-plugin-netlify";

export default {
    src: './docs/',
    theme: 'theme/index',
    indexHtml: 'theme/index.html',
    plugins: [
        doczPluginNetlify()
    ]

}