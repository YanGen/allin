// 弹窗

const {dialog} = require('electron').remote
var xiaoxiBtn = document.getElementById('xiaoxi')
xiaoxiBtn.onclick = function(){
    dialog.showMessageBox({
        type:'warning',
        title:'核警报',
        message:'是不是你!!',
        //点击后返回数组下标
        buttons:['yes','no']
    }).then(result=>{
        console.log(result)
        if(result.response == 0){
            alert('哇哈哈哈哈哈哈哈哈哈！！！')
        }else if(result.response == 1){
            alert('宾果')
        }
    })
}

// 底部消息
var notifyBtn = document.getElementById('notifyBtn')
var opetion = {
    title: '来订单了',
    body: '内容内容内容'
}
notifyBtn.onclick = function () {
    new window.Notification(opetion.title, opetion)
}