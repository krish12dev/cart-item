import React from "react";
// import Cart from "./Cart";

class CartItem extends React.Component {
    constructor(){
        super()
        this.state = {
            title:'Mobile Phone',
            price: 19999,
            Qty:1,
            id:1
        }
      

    }
     increseQuantity =() => {
        // console.log(this.state);
        // this.state.Qty +=1;
        // this.setState({
        //     Qty:this.state.Qty +1,
        // })

        // if preveious state requires then this state use
        this.setState((prevState)=>{
            return{
                Qty:prevState.Qty +1
            }
        })
     }
     decreaseQuantity=()=>{
        const{Qty} = this.state;

        if(Qty === 0){
            return ;

        }
        // console.log(this.state)
        this.setState({
            Qty:this.state.Qty -1,
        })
     }
     deleteQuantity = ()=>{

        // const{Qty} = this.state +0;

        if(Qty=>0){
            return 0;
        }
         console.log("this")
        this.setState({
            Qty: this.state.Qty ,
    
        })
     }
     
    render()  {
        console.log(this.props)
        const {title,price,Qty} = this.props.product;
     return(
        <div className="cartItem">
            <div className="left-block">
            <img src="" alt="" style={styles.Image}/>
            </div>
            <div className="right-block">
                <div style={ { fontSize:25 } }>{title}</div>
                <div style={ { color :'#777'}}>Rs {price}</div>
                <div style={ { color:'#777' }}>{Qty}</div>
                <div className="cart-item-action">
                    <img alt="increase" className="action-icon"
                     src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
                     onClick={this.increseQuantity}/>

                    
                    <img alt="decrease" className="action-icon"
                     src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                     onClick={this.decreaseQuantity}/>


                    <img alt="delete" className="action-icon" 
                    src="https://cdn-icons-png.flaticon.com/512/4441/4441955.png"
                    onClick={this.deleteQuantity}/>

                </div>

            </div>


        </div>
     )
    }
}
const styles ={
    Image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;