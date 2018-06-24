import React, { Component } from 'react';
import { render } from 'react-dom';

class AdminCheckOut extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total : 0
        }
    }


    findTotal(distance) {

        let subTotal = 0
        this.props.cart.map((x) => {
            subTotal += x.totalPrice
        })
        let delivery = Math.round( (40 + (distance * .25)) * 100 ) /100
        let tax = Math.round( (subTotal + delivery) * 0.09 * 100 ) /100
        let total = Math.round( (subTotal + delivery + tax) * 100 ) /100

        return (
            <div>
                <h4>date selected: {this.props.date.toDateString()}</h4>
                <h5>subtotal: {subTotal}</h5>
                <h5>delivery: {delivery}</h5>
                <h5>tax: {tax}</h5>
                <h5>TOTAL: ${total}</h5>
                <input id="newPrice" type="text" />
            </div>
        )

    }

    saveOrder() {

        let data = {
            name: document.getElementById("name").value,
            time: document.getElementById("time").value,
            address: document.getElementById("address").value,
            phone: document.getElementById("phone").value,
            otherPhone: document.getElementById("otherPhone").value,
            email: document.getElementById("email").value,
            note: document.getElementById("note").value,
            date: this.props.date,
            order: this.props.cart,
            owed: document.getElementById("newPrice").value
        }
        console.log(data)   ////// here is where you send to db
    }

    render() {
        return (
            <div>

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#checkOutModal">
                            check out
                        </button>

                <div className="modal fade" id="checkOutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h2>check out</h2>
                                    <h3>date selected: {this.props.date.toDateString()}</h3>
                                    <div>
                                        <h5>name: </h5><input type="text" id="name" />
                                        <h5>time: </h5><input type="text" id="time" />
                                        <h5>address: </h5><input type="text" id="address" />
                                        <h5>phone: </h5><input type="text" id="phone" />
                                        <h5>other phone: </h5><input type="text" id="otherPhone" />
                                        <h5>email: </h5><input type="text" id="email" />
                                        <h5>note: </h5><input type="text" id="note" />
                                    </div>
                                    <div>
                                        <ul>
                                        {this.props.cart.map((x, index) => {
                                                return (

                                                    <li key={index} >name: {x.item.name} number: {x.quant} price: {x.totalPrice}  </li>

                                                )
                                            })}

                                        </ul>
                                        <div>{this.findTotal(25)}</div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.saveOrder()} >Save Order</button>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}

export default AdminCheckOut;