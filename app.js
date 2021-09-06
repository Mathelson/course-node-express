const { readFile } = require('fs')
const { reject, result } = require('lodash')

//for encapsulate function readFile
const getText = (path) =>{
  return new Promise((resolve,reject)=>{
    //encapsulate
    //readFile('./content/first.txt', 'utf8', (err, data) => {
readFile(path, 'utf8', (err, data) => {
  if(err) {
    //return
    reject(err)
  }
  else {
    //console.log(data)
    resolve(data)
  }
})//encapsulate


  })
}

getText('./content/first.txt')
  .then((result) => console.log(result))
  //3:00
