async function tailwindPlugin(context, options) {
    return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require("postcss-import"));
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
        },
    };
}

module.exports = tailwindPlugin;