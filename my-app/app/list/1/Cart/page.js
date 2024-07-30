import {age,name} from './data.js'
export default function Cart () {
    let 장바구니 = ['Tomatoes','Pasta'];
    return (
        <div>
            <h4 className="title">Cart</h4>
            <cartItem item={장바구니[0]}/>
            <cartItem item={장바구니[1]}/>
            <cartItem/>
        </div>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>14000원</p>
            <p>1개</p>
        </div>
    )
}