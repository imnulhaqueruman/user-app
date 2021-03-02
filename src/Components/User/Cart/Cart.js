import React from 'react';

const Cart = (props) => {
    const count = props.count;
    let totalAmount = 0;
    for (let i = 0; i < count.length; i++) {
        const user = count[i];
        totalAmount = totalAmount + user.company.salary;
    }
    return (
        <div>
            <h1> Add:{count.length}</h1>
            <p>Amount : {totalAmount}</p>
        </div>
    );
};

export default Cart;