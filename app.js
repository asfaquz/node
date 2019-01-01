//console.log(module);
const log=require('./logger');
//console.log(logger);

//logger.log("Hello Message");
log("Hello Message");


// OS module
const os = require('os');
var totalMemory =   os.totalmem();
var freeMemory  =   os.freemem();
// Template String
// ES6 /ES2015 : ECMASCRIPT 6
console.log(`Total Memory : ${totalMemory}`);
console.log(`Free Memory : ${freeMemory}`);
