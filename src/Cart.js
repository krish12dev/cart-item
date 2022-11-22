import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
         products:[
                {
            title:'Mobile Phone',
            price: 19999,
            Qty:1,
            id:1
                },
                {
            title:'laptop',
            price: 59999,
            Qty:1,
            id:2
                }, 
                {
            title:'watch',
            price: 999,
            Qty:1,
            id:3
                }
            
            ]
        }

    }
    render (){
      const {products} = this.state;
    return(
        <div className="Cart-action">
        {products.map((product)=> {
            return <CartItem product ={product}  key={product.id}/>
        })
        }
  
       
        </div>
    );
  }
}

export default Cart;
