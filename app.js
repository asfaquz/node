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


// Event module
// Note that here, in terms of the naming,
// the first letter of every word is upper case.
// This is a convention that indicates that this Event
// Emitter is a class. It's not a function, it's not a simple
//value, it's a class
const EventEmitter = require('events');
const emitter = new EventEmitter();
// Register a listener
emitter.on('messageLogged',function(){
  console.log('Listener called');
});
//Raise an event
emitter.emit('messageLogged');
