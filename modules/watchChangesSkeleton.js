var http = reqiure('http'),
    events = require('events');
/*
 * create a CouchDB watcher based on connection criteria;
 * follows the Node.js EventEmitter pattern, emits 'chnage' events
*/
exports.createWatcher = function(options){
    var watcher = new events.EventEmitter();
    
    watcher.host = options.host || 'localhost';
    watcher.port = options.port || 5984;
};