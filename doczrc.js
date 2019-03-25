import doczPluginNetlify from "docz-plugin-netlify";

export default {
    src: './docs/',
    theme: 'theme/index',
    indexHtml: 'theme/index.html',
    public: './theme',
    htmlContext: {
        favicon: 'theme/images/rtf-favicon.png'
    },
    plugins: [
        doczPluginNetlify()
    ]

}