import app from '../build/app';
import expect from 'expect';


app.initStore()
app.renderPage() //test react

app.getResults('aetv').then((entries)=>{

    console.log('done:'+entries.length)

});

//quick error check
expect(app.hello()).toBe("hello")