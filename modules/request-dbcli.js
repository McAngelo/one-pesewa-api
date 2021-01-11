const request = require('request'),
      url = 'http://127.0.0.1:5984',
      db = 'music',
      method = process.argv[2] || 'GET',
      options = {
          method: method,
          url: `${url}/${db}/${process.argv[4] || ''}`
      };
console.log(process.argv[3], process.argv[4]);
console.log(options.url);

request(options, function(err, res, body){
    if(err){
        throw Error(err);
    }else{
        console.log(res.statusCode, JSON.parse(body));
    }
});