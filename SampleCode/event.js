//event.js 文件
var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

// some_event可以理解是event的名字/function的名字
event.on('some_event', function() {
    // print出来的东西
    console.log('some_event events succes');
});

setTimeout(function() {
    // 触发some_event事件
    event.emit('some_event');
}, 1000);

console.log("Next Part");


// one events and many part

var events = require('events');

var emitter = new events.EventEmitter();

var Eventsfunction1 = function(X, Y) {
    console.log('Some Events Part 1', X, Y);
};

var Eventsfunction2 = function(X, Y) {
    console.log('Some Events Part 2', X, Y);
};

var Eventsfunction3 = function(X, Y) {
    console.log('Some Events Part 3', X, Y);
};

emitter.on('someEvent', Eventsfunction1);
emitter.on('someEvent', Eventsfunction2);
emitter.once('someEvent', Eventsfunction3);

// emitter.once是他只会call一次罢了 就算你重复call 他也call不到

emitter.emit('someEvent', 2, 4);

emitter.removeListener('someEvent', Eventsfunction1);

emitter.emit('someEvent', 2, 4);


var events2 = require('events');
var eventEmitter = new events2.EventEmitter();

var EventsListener1 = function listeners1() {
    console.log('EventsListener1 is running');
}

var EventsListener2 = function listeners2() {
    console.log('EventsListener2 is running');
}

eventEmitter.addListener('connection', EventsListener1);

eventEmitter.on('connection', EventsListener2);

var EventsListeners = eventEmitter.listenerCount('connection');
console.log(EventsListeners + " Listeners connect the events ");

eventEmitter.emit('connection');

console.log('Remove EventsListener1');
eventEmitter.removeListener('connection', EventsListener1);
console.log('EventsListener1 is not connect');

EventsListeners = eventEmitter.listenerCount('connection');
console.log(EventsListeners + " Listeners connect the events ");

eventEmitter.emit('connection');

console.log("Events End");