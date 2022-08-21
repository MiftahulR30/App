import React from "react";
import ItemBody from "./ItemBody";

function ListItem({ list}) {
    return (
        <div className="app_item">
            <ItemBody
            name={list.name}
            username={list.username}
            email={list.email}
            phone={list.phone}
            address={list.address}
            company={list.company} />
        </div>
    )
}

export default ListItem;