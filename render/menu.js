// 页面的右键事件处理


// 右键菜单数据源
const template = [
    {
        label:'中国',
        submenu:[
            {
                label:'台湾',
                // 打开快捷键
                accelerator:'ctrl+n',
                // 点击事件
                click:()=>{
                    console.log('台湾是中国的')

                }
            },
            {label:'香港'}
        ]
    },
    {
        label:'老美',
        submenu:[
            
        ]
    }
]

// 要使用主进程可调用api则从remote引入
const remote = require('electron').remote
const m = remote.Menu.buildFromTemplate(template)
window.addEventListener('contextmenu',function(e){
    e.preventDefault
    m.popup({
        window:remote.getCurrentWindow()
    })
})