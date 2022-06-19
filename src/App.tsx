import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion'
import {Rating} from "./components/Rating/Rating";


function App() {
    console.log('App rendering')
    return (
        <div className="App">

            <AppTitle/>
            <Rating value={3}/>
            <div>Article 1</div>
            <Accordion titleValue={'This is title Accordion'} collapsed={true}/>
            <div>Article 2</div>
            <Accordion titleValue={'This is BODY paragraf'} collapsed={false}/>
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    );
}

function AppTitle(){
    console.log('App title rendering')
    return (
        <>
        This app title
        </>
    )
}



export default App;
