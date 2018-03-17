const path = require('path')
const fs=require('fs')

module.exports = function (source) {
    let resourcePath=this.resourcePath.replace(/\\/g,'/')
    let sourceDir=resourcePath.substring(0,resourcePath.lastIndexOf('/'))
    let reg=/<!--\s*include\s*(.*)\s*-->/g
    let newSource=source.replace(reg,function (text) {
        let partHtmlPath=text.match(/[^\s]*html?/)[0]
        let htmPath=path.resolve(sourceDir,partHtmlPath)
        let htmContent= fs.readFileSync(htmPath,'utf8')
        return htmContent
    })
    return newSource
}