import React, {useState} from "react";
interface Props {
    items: Array<string>
    onClickItem: (item:string)=>void
}

const Categories = (props: Props ) => {
    const [activeItem, setActiveItem] = useState(0)
    const onSelectItem = (index:number) =>{
        setActiveItem(index)
    }
    return (
        <div className="categories">
            <ul>
                {props.items.map((item:string, index: number)=>
                    <li className={activeItem === index ? 'active':''} onClick={()=>{onSelectItem(index)}} key={`${item}_${index}`}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories