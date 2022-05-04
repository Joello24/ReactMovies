import React from 'react';
import Heading from "./components/Heading";
import Numbers from "./components/Numbers";
import Movies from "./components/Movies";

function App() {

    return (
        <div className="container flex">
            <div className="column">
                <div className="row">
                    <Heading title = "Hi im a prop"/>
                </div>
                <Numbers lowNumber = {1} highNumber={15}></Numbers>
            </div>
            <div className="column">
                <Movies />
            </div>
        </div>
    );
}

export default App;