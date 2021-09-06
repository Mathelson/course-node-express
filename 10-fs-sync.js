//we created new files
const { readFileSync, writeFileSync } = require('fs');
//const { writer } = require('repl');
console.log('start')
//READ
const first = readFileSync('./content/first.txt','utf8');
//sync with second txt
const second = readFileSync('./content/second.txt','utf8');

//console.log(first,second)
//end

//WRITE TEXT.
writeFileSync( './content/result=sync.txt',
`Here is the result : ${first}, ${second}`,
{flag: 'a'}
)
console.log('done with this task')
console.log('starting the next one')


