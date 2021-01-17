const {Menu} = require('electron')
// 菜单数据源
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
// 调用菜单构建
const m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)