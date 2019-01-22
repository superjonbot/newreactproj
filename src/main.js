import app from '../build/app';
import expect from 'expect';
import React from 'react';
import {createStore,combineReducers} from "redux";

import devToolsEnhancer from 'remote-redux-devtools';  //remove if not debugging redux
import ReactDOM from "react-dom";
import deepfreeze from "deep-freeze"


console.log('react debugging: $>react-devtools &  redux debugging: http://remotedev.io/local/')

//REDUX REDUCER (all in one)
let allinoneReducer = (state = {counter:1000,testcount:200}, action) => {
    deepfreeze(state,action);
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({},state,{testcount:state.testcount+1})  // must return a new object
        case 'DECREMENT':
            return Object.assign({},state,{testcount:state.testcount-1})
        case 'COUNTER':
            return Object.assign({},state,{counter:state.counter+1})
        default:
            return state
    }
}

//REDUX REDUCER (split)
let counter_rdc = (counter=2, action) => {
    switch (action.type) {
        case 'COUNTER':
            return counter+1  // must return a new object
        default:
            return counter
    }
}
let testcount_rdc = (testcount=5, action) => {
        switch (action.type) {
        case 'INCREMENT':
            return testcount+1  // must return a new object
        case 'DECREMENT':
            return testcount-1
        // case 'COUNTER':
        //     return reduxReducer_counter(state,action)//Object.assign({},state,{counter:state.counter+1})
        default:
            return testcount
    }
}

const combinedReducers = combineReducers({
    //STATE FIELDS
    counter:counter_rdc,
    testcount:testcount_rdc
})


//CREATE STORE

//let store = createStore(allinoneReducer,devToolsEnhancer()) //remove devToolsEnhancer if not debugging redux
let store = createStore(combinedReducers,devToolsEnhancer()) //remove devToolsEnhancer if not debugging redux

//SET SUBSCRIBE
store.subscribe(() =>
    {
        console.log("State: ",store.getState());
        renderPage();
        }
)

//console.log('Initial State');



//START COMPONENTS
class Valuedisplay extends React.Component {

     componentDidMount() {
        console.log('Mounted'+(new Date()))
     }

    render() {
        let {value}=this.props;
        return (<h1>{value}</h1>)
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {vArr: 100    };
    }

    componentDidMount() {
        console.log('Mounted'+(new Date()))
    }

    handleI=()=>{
        let {vArr}=this.state;
        this.setState({vArr:vArr+1})
    }
    handleD=()=>{
        let {vArr}=this.state;
        this.setState({vArr:vArr-1})
    }

    render() {
        let {counter,value,onIncrement,onDecrement}=this.props;
        let {vArr}=this.state;

        return (
            <div>
                <Valuedisplay value={value}/>
                <Valuedisplay value={counter}/>
                <Valuedisplay value={vArr}/>

                {/*modify state*/}
                <button onClick={this.handleI}>[+]x</button>
                <button onClick={this.handleD}>[-]x</button>

                {/*modify store*/}
                <button onClick={onIncrement}>[+]b</button>
                <button onClick={onDecrement}>[-]</button>
            </div>
        )
    }
}


const renderPage = ()=>{
    ReactDOM.render(
        <App
            counter={store.getState().counter}
            value={store.getState().testcount}
            onIncrement={ ()=>store.dispatch({ type: 'INCREMENT' }) }
            onDecrement={ ()=>store.dispatch({ type: 'DECREMENT' }) }
        ></App>,
        document.getElementById('root')
    )
}

setInterval(()=>{
    store.dispatch({ type: 'COUNTER' })
},1000)


//test ajax
app.getResults('aetv').then((entries)=>{
    console.log('done:'+entries.length)
});

//quick error check
expect(app.hello()).toBe("hello")

//start
renderPage()