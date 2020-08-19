import React from 'react';
import './App.css';
import Header from "./components/Header/Header";

import Cart from "./pages/Cart";
import {Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
    const [pizzas, setPizzas] = React.useState([])

    React.useEffect(()=>{
        fetch('http://localhost:3000/db.json')
            .then((resp) => resp.json())
            .then(json => {setPizzas(json.pizzas)})
    },[])


    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path='/' render={()=><Home items={pizzas}/>}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
        );
        }

        export default App;
