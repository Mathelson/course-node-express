//without synk and events on boton 
const { readFile, writeFile } = require('fs')

//DON'T FORGET UTF8! buffer error
readFile('./content/first.txt','utf8',(err, result) =>{
    //body.WRONG
    if (err){
        console.log(err)
        return
    }
    //body.OK
    //console.log(result)
    const first = result;
    //endfirst
    readFile('./content/second.txt','utf8',(err,result)=>{
    //body.WRONG
    if (err){
        console.log(err)
        return
    }
    //body.OK
    //obtengo el dato
    const second = result
    //fin
    //I'll write
    writeFile('.content/result-async.txt', 
    `Here is the result: ${first}, ${second}`
    ,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log('done with this task')
        //console.log(result)
    })
    })
})
console.log('starting next task')