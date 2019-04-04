import React from 'react';
import './item.css';

class Item extends React.Component{
    render(){
        let {name, cost, qty} = this.props;
        return (
            <tr className='row'>
                <td className='itemName'>{name}</td>
                <td className='itemQty'>{qty}</td>
                <td className='itemCost'>{cost}</td>
                <td><button onClick={() => this.props.increaseCallback(this.props.id)} className='add-btn'><i
                    className="fas fa-plus"></i></button></td>
                <td><button onClick={() => this.props.decreaseCallback(this.props.id)} className='sub-btn'><i
                    className="fas fa-minus"></i></button></td>
                <td><button onClick={() => this.props.removeItemCallback(this.props.id)} className='rem-btn'><i
                    className="far fa-trash-alt"></i></button></td>
            </tr>
        )
    }

}
export default Item;