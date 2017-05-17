const moment = require('moment');

console.log(moment().format());

//1/1/70 - unix epic Time => 0
 var now = moment();
 console.log('Current timestamp: ', now.unix());

 var timestamp = 1459111648;
 var currentMoment = moment.unix(timestamp);
 console.log('Current moment 1: ', currentMoment.format());
 console.log('Current moment 2: ', currentMoment.format('MMM D, YY @ h:mm a'));
 console.log('Current moment 3: ', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
