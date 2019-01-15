const app = require('../build/app');
const expect = require('expect');

app.getResults('aetv').then((entries)=>{
    console.log('done:'+entries.length)


});


expect(app.hello()).toBe("hello")