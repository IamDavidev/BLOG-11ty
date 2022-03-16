module.exports = function (etyConfig) {
    etyConfig.addPassthroughCopy("style.css");
    return {
        dir: {
            include: "src/_includes",
            data: "src/_data",
            ouput: "_site"
        }
    }
}