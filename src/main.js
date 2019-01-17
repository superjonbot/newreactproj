import app from '../build/app';
import expect from 'expect';
import React from 'react';
import {createStore} from "redux";

import devToolsEnhancer from 'remote-redux-devtools';  //remove if not debugging redux
import ReactDOM from "react-dom";

console.log('react debugging: $>react-devtools &  redux debugging: http://remotedev.io/local/')

//REDUX REDUCER
let reduxReducer = (state = {testcount:2,counter:0}, action) => {
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

//SET SUBSCRIBE
let store = createStore(reduxReducer,devToolsEnhancer()) //remove devToolsEnhancer if not debugging redux
store.subscribe(() =>
    {
        renderPage();
        }
)

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