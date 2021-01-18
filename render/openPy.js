const {PythonShell} = require('python-shell')

const option = {
  mode: 'text',
//   pythonPath: 'path/to/python',
  pythonOptions: ['-u'], // get print results in real-time
//   scriptPath: 'path/to/my/scripts',
//   args: ['value1', 'value2', 'value3']
}
let pyshell = new PythonShell('./script/test.py');

 
const np = document.getElementById('notifyPython')
np.onclick = function(e){
    e.preventDefault()
    pyshell.send('hello');

}

 
pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  alert(message);
});

// 关闭
// pyshell.end(function (err,code,signal) {
//   if (err) throw err;
//   console.log('The exit code was: ' + code);
//   console.log('The exit signal was: ' + signal);
//   console.log('finished');
// });

// 监听子进程退出
pyshell.childProcess.on('exit', (code) => {
    console.log('python program ended with exit code: ${code}');
});
