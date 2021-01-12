const nano = require('nano')('http://localhost:5984');
// To create a new database
//nano.db.create('alice');

//const aliceDB =  nano.db.use('alice');

//console.log(aliceDB);
//nano.db.create()

/*nano.db.create('alice').then((data) => {
    console.log(data);
}).catch((err) => {
    throw Error(err);
    //console.log(err);
});

 nano.use('alice').then((response) => {
    //alice = nano.use('alice');
    return alice.insert({happy: true}, 'rabbit');
}).then((response) => {
    console.log('you have inserted a document with an _id or rabbit');
    console.log(response);
});*/

nano.db.get('alice').then((body) => {
  console.log(body);
});

nano.db.list().then((body) => {
  // body is an array
  body.forEach((db) => {
    console.log(db);
  });
});

// creating the database information
