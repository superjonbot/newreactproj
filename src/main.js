import app from '../build/app';
import expect from 'expect';

import React from 'react';
import {createStore} from "redux";
import ReactDOM from "react-dom";

//REDUX REDUCER
let store = createStore((state = {testcount:2}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({},state,{testcount:state.testcount+1})  // must return a new object
        case 'DECREMENT':
            return Object.assign({},state,{testcount:state.testcount-1})
        default:
            return state
    }
})

// store.subscribe(() =>
//     {
//         renderPage();
//         const status=store.getState();
//         console.log(status.testcount)}
// )

class Valuedisplay extends React.Component {

    state={value:this.props.value}

    componentDidMount() {
        console.log('Mounted')


        store.subscribe(() => {  this.forceUpdate()  }   )


    }
    componentWillUnmount(){

    }
    render() {
        let {value,onIncrement,onDecrement}=this.props;
        //let {testcount}=store.getState()

        return (<h1>{value}</h1>)
    }
}

class App extends React.Component {
    render() {
        let {value,onIncrement,onDecrement}=this.props;
        return (
            <div>

                <Valuedisplay {...this.props}/>
                <button onClick={onIncrement}>[+]x</button>
                <button onClick={onDecrement}>[-]2</button>
            </div>
        )
    }
}


const renderPage = ()=>{
    ReactDOM.render(
        <App
            value={store.getState().testcount}
            onIncrement={ ()=>store.dispatch({ type: 'INCREMENT' }) }
            onDecrement={ ()=>store.dispatch({ type: 'DECREMENT' }) }
        ></App>,
        document.getElementById('root')
    )
}


app.getResults('aetv').then((entries)=>{
    console.log('done:'+entries.length)
});

//quick error check
expect(app.hello()).toBe("hello")


renderPage()