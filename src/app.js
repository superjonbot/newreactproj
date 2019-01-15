import fetch from 'node-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const Counter = ({value, onIncrement, onDecrement})=>(
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>[+]</button>
        <button onClick={onDecrement}>[-]</button>
    </div>
)





let store = createStore((state = {testcount:2}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign(state,{testcount:state.testcount+1})  // must return a new object
        case 'DECREMENT':
            return Object.assign(state,{testcount:state.testcount-1})
        default:
            return state
    }
}) //create test redux

store.subscribe(() =>
    {
        module.exports.renderPage()
        const status=store.getState();
        console.log(status.testcount)}
    )






module.exports = {
    defaults:{
        _feedURL:'https://feeds.video.aetnd.com/api/${brand}/videos?filter%5BvideoType%5D=Episode&filter%5BisBehindWall%5D=false&perpage=500',
        _endPoint: 'http://sandbox-cloudapi.imrworldwide.com/nmapi/v2/{{appid}}/{{sessionID}}/a?b=',
        _sessionID: Date.now() + String(Math.random() * 1000000 >> 0),
        _brands:['aetv','history','lifetime','fyi']
    },

    hello:()=>{return 'hello'},
    feedURI:(brand)=>{return eval('`'+module.exports.defaults._feedURL+'`')},

    getResults : async function (brand) {
        try {
            const uri= this.feedURI(brand);
            const response = await fetch(uri);
            const post = await response.json();
            const results = post.results;
            //console.log(results.length)
            return results
        }
        catch(error) {
            console.error(error);

        }
    },




    renderPage : () => {
        ReactDOM.render(
            <Counter
                value={store.getState().testcount}
                onIncrement={ ()=>store.dispatch({ type: 'INCREMENT' }) }
                onDecrement={ ()=>store.dispatch({ type: 'DECREMENT' }) }
            ></Counter>,
            document.getElementById('root')
        )
    }/*,



    reduxStore : (state = {testcount:2}, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return Object.assign(state,{testcount:state.testcount+1})  // must return a new object
            case 'DECREMENT':
                return Object.assign(state,{testcount:state.testcount-1})
            default:
                return state
        }
    }
*/





};


