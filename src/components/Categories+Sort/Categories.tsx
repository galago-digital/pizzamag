import React from "react";


const Categories = ({items}: { items: Array<string> }) => {
    const [activeItem, setActiveItem] = React.useState(0)
    const onSelectItem = (index: number) => {
        setActiveItem(index)
    }
    return (
        <div className="categories">
            <ul>
                {items &&
                    items.map((item: string, index: number) =>
                        <li className={activeItem === index ? 'active' : ''}
                            onClick={() => {onSelectItem(index)}}
                            key={`${item}_${index}`}>
                            {item}
                        </li>
                )}
            </ul>
        </div>
    )
}

export default Categories