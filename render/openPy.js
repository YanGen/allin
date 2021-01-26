const {PythonShell} = require('python-shell')

const option = {
  mode: 'text',
//   pythonPath: 'path/to/python',
  pythonOptions: ['-u'], // get print results in real-time
//   scriptPath: 'path/to/my/scripts',
//   args: ['value1', 'value2', 'value3']
}
let pyshell = new PythonShell('./script/test.py',option);

 
const np = document.getElementById('notifyPython')
np.onclick = function(e){
    e.preventDefault()
    pyshell.send('hello');
}

const ep = document.getElementById('endPython')
ep.onclick = function(e){
    e.preventDefault()
    pyshell.kill()
}

 
pyshell.on('message', function (message) {
  // 接收到从Python脚本发送的消息（一个简单的“print”语句）
  alert(message);
});

// // 关闭stdin流，允许Python脚本完成并退出。 当进程终止时，将调用可选的回调。
// pyshell.end(function (err,code,signal) { 
//     if (err) throw err;
//     console.log('The exit code was: ' + code);
//     console.log('The exit signal was: ' + signal);
//     console.log('finished');
//   });
// 监听子进程退出
pyshell.childProcess.on('exit', (code) => {
    console.log('python program ended with exit code: ${code}');
});
