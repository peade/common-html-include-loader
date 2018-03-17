const path = require('path')
const fs=require('fs')
// const loaderUtils = require('loader-utils')
// const memoryfs=require('memory-fs')

module.exports = function (source) {
    let resourcePath=this.resourcePath.replace(/\\/g,'/')
    let sourceDir=resourcePath.substring(0,resourcePath.lastIndexOf('/'))
    console.log(resourcePath,sourceDir)
    //console.log(JSON.stringify(source) )
   // console.log(resourcePath,'htmPath: ',htmPath)

    let reg=/<!--\s*include\s*(.*)\s*-->/g
    let arr=source.match(reg)
   // source.replace('include','test')
    source.replace(reg,function (text) {
        let htmReg=/\..*html?/g
        let partHtmlPath=text.match(/\..*html?/)[0]
        let htmPath=path.resolve(sourceDir,partHtmlPath)
        //console.log(sourceDir,partHtmlPath,htmPath)
        let htmContent= fs.readFileSync(htmPath,'utf8')
      //  console.log(htmContent)
        return htmContent
        //console.log(text.match(htmReg)[0])
        //console.log('txt',  text)
    })
  //  console.log(source)
   return source

    // if(arr){
    //     for(let i=0;i<arr.length;i++){
    //         console.log(arr[i])
    //     }
    // }

    //console.log(arr)
   // const params = loaderUtils.parseQuery(this.resourceQuery);

}