import doczPluginNetlify from "docz-plugin-netlify";

export default {
    src: './docs/',
    theme: 'theme/index',
    indexHtml: 'theme/index.html',
    public: './theme/images',
    htmlContext: {
        favicon: 'public/rtf-favicon.png'
    },
    plugins: [
        doczPluginNetlify()
    ]

}