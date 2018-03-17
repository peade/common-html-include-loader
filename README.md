# common-html-include-loader
a wabpack loader for a page to include common html component



Usage

files:

`|- pages

    |- component
    
        |- part.html
        
    |- index.html`

in index.htm

`<!-- include ./component/part.htm -->`


in webpack.config.js

`
rules:[
    {
    test:/\.html$/, 
    use:[{
        loader:'commom-html-include-loader'
    }]
    }
]`



想要找一个能在页面里插入公共html的webpack工具，网上说html-loader就能实现这种功能，
但是我没用成功。这种功能的，肯定也有别人写过，但是我没找到。只好自己试着写一个。
写的非常简单。
