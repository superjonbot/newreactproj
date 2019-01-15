import app from '../build/app';
import expect from 'expect';









app.getResults('aetv').then((entries)=>{
    console.log('done:'+entries.length)



    app.renderPage() //test react




});


expect(app.hello()).toBe("hello")