import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import Headermob from './component/Headermob';
import {action} from "./redux/action/action";
import { Provider } from 'react-redux';
import {createStore} from "redux";



const initialState = {
    count: 0
}

const { addToCard} = action;

function reducer (state=initialState, action){
    switch(action.type){
        case addToCard: {
            return{
                count: state.count+1
            }
        }
        default:
            return state;
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  

    <Provider store={store}>
<BrowserRouter>
<App />
<Headermob/>
</BrowserRouter>

    </Provider>

   
  
);

