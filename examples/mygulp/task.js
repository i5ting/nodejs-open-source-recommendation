var Orchestrator = require('orchestrator');
var orchestrator = new Orchestrator();

orchestrator.add('hello', function(){
  // do stuff
  console.log('this is hello task...\n');
});

orchestrator.add('default', function(){
  // do stuff
  console.log('this is default task...\n');
});


orchestrator.add('dep', ['hello'], function(){
  // do stuff
  console.log('this is default task...\n');
});

module.exports = orchestrator;
