const { Worker, isMainThread,  workerData } = require('worker_threads');

if(isMainThread) {
	    console.log("this is the main thread")
   
        
        let workerone = new Worker('./workerone.js',{ workerData: __dirname+'/original.jpg' });
    
        let workertwo = new Worker('./workertwo.js',{ workerData: __dirname+'/original.jpg' });

        workertwo.on('message',(data) => {
            console.log("message",data);
        })

        workertwo.on('error',(err) => {
            console.error(err);
        })
        workerone.on('message',(data) => {
            console.log("message",data)
        })
        
        workerone.on('error',(err) => {
            console.log(err);
        })

        workerone.on('exit',(code) => {
            if(code != 0) 
                console.error(`Worker stopped with exit code ${code}`)
        })
}
