const imagemagick = require('imagemagick');

const { workerData,parentPort } = require('worker_threads');

let destSource = __dirname+'/two.jpg';
let optionObj = [workerData, '-resize', '200x200',destSource]
// console.log("workerData",workerData);
imagemagick.convert(optionObj,(err,stdout) => {
    if(err) throw err;


    parentPort.postMessage({ fileName: destSource,status : 'Done' })
})

