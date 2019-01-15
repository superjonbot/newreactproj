import app from '../build/app';
import expect from 'expect';


import { createStore } from 'redux';


app.getResults('aetv').then((entries)=>{
    console.log('done:'+entries.length)



    app.renderPage() //test react

    let store = createStore(app.reduxStore) //create test redux

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

    store.subscribe(() =>
        console.log(store.getState())
    )

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
    store.dispatch({ type: 'INCREMENT' })
// 1
    store.dispatch({ type: 'INCREMENT' })
// 2
    store.dispatch({ type: 'DECREMENT' })
// 1


});


expect(app.hello()).toBe("hello")