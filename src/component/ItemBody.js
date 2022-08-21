import React from "react";

function ItemBody({ name, username, email, address, company, phone }) {
    return (
        <div className="item__content">
            <h3 className="item__title">{name}</h3>
            <p className="item__date">{`${username}`}</p><a className="item__date" href={`mailto:${email}`}>{email}</a>
            <p className="item__date"><a href={`tel:${phone}`}>{phone}</a></p>
            <p className="note-tb">Address : </p>
            <p className="item__body">{`${address.street},${address.suite},${address.city},${address.zipcode}`}</p>
            <p className="note-tb note-mt">Company : </p>
            <p className="item__body">{`${company.name},${company.catchPhrase},${company.bs}`}</p>
        </div>
    )
}

export default ItemBody;