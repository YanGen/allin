
// 默认浏览器打开
const shell = remote.shell
const bd = document.getElementById('openBaiduDefaultBrowser')
bd.onclick = function(e){
    e.preventDefault()
    shell.openExternal(bd.getAttribute('href'))
}

// 断网提示
window.addEventListener('offline',()=>{
    alert('断网');
})
window.addEventListener('online',()=>{
    alert('网络链接正常了');
})