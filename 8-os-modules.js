//Operative Sistem
const os = require('os')

// info about current(actual) user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMel: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)