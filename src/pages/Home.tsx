import React from "react";
import Categories from "../components/Categories+Sort/Categories";
import SortPopup from "../components/Categories+Sort/SortPopup";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {Pizza} from "../Types/CommonTypes";


const Home = ({items}:{items : Array<Pizza>}) =>{
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Все', 'Мясные', 'Вегетарианские','Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup items={['популярности','цене','алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
                }

            </div>
        </div>
    )
}

export default Home