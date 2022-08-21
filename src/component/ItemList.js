import React from "react";
import ListItem from "./ListItem";

function ItemList({ list }) {
    if (list.length) {
        return (
            <div className="app_list">
                {list.map((item) => (
                    <ListItem
                        list={item}
                        key={item.id} />
                ))}
            </div>
        )
    }

    return <p>Tidak ada data</p>;
}

export default ItemList;