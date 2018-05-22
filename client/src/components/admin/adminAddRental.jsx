import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Calender from '../rentalsComps/rentalsCalender';

class AddRental extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productsList: [],
            pID: 0,
            pName: 'name when clicked',
            pDescription: 'description',
            pQuant: 'quantity',
            pSize: 'size',
            rentedQuan: 'yo',
            date: new Date(),
            newDate: new Date(),
            dateVal: '',
            search: 6

        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch(`/api/products`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productsList: responseJson })
            })
    }

    handleClick(id, quant) {
        this.setState({
            pID: id,
            pQuant: quant
            })
    }

    handleDateChange(event) {
        let date = event.target.value;
        let dateObject = new Date(date);
        this.setState({ newDate: dateObject, dateVal: date });
    }

    handleButtonClick() {
        this.setState({ date: this.state.newDate });
    }

    getRentedQuan(quant) {
        if (quant != this.state.rentedQuan) {
            this.setState({ rentedQuan: quant });
            console.log(quant + '  new');
        }
    }

    render() {
        return (
            <Fragment>
                <div className='rentals-container'>
                    <div className='rentals-search-div'>
                        <h5 className='rentals-search-text'>type date here to see available products (mm/dd/yyyy)</h5>
                        <input className='rentals-input' type="text" onChange={this.handleDateChange} placeholder={this.state.dateVal} />
                        <button onClick={() => this.handleButtonClick()} >set date</button>
                    </div>
                    <Calender sendQuan={() => this.getRentedQuan()} dateSelected={this.state.date} prodId={this.state.pID} prodQuan={this.state.pQuant} />

                    {this.state.productsList.map((x, index) => {
                        return (
                            <div key={index}>
                                <div onClick={() => this.handleClick(x.id, x.quantity)} >
                                    <img src={x.image} alt={x.name} height='150px' />
                                    <h3>{x.name}</h3>
                                    <h3>{x.price}</h3>
                                </div>


                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modal${index}`}>
                                    Launch demo modal
                                </button>

                                <div className="modal fade" id={`modal${index}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">{x.name}</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <ul>
                                                    <li>price: {x.price}</li>
                                                    <li>description: {x.description}</li>
                                                    <li>length: {x.length}</li>
                                                    <li>width: {x.width}</li>
                                                    <li>height: {x.height}</li>
                                                    <li>max people: {x.maxpeople}</li>
                                                </ul>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </Fragment>
        );
    }
}
    

export default AddRental;





// constructor(props) {
//     super(props);

//     this.state = {
//         newDate: '',
//         productsList: [],
//         pID: 0,
//         prodQuan: 0
//     }
// }

// componentDidMount() {
//     fetch(`/api/products`)
//         .then((response) => response.json())
//         .then((responseJson) => {
//             this.setState({ productsList: responseJson })
//         })
// }

// handleDateChange(event) {
//     let date = event.target.value;
//     // let dateObject = new Date(date);
//     this.setState({ newDate: date });
// }

// handleButtonClick() {
//     console.log(this.state.newDate)
//     let formatDate = new Date(this.state.newDate);
//     this.setState({ date: formatDate });
// }

// handleClick(id, quant) {
//     this.setState({
//         pID: id,
//         prodQuan: quant
//     })
// }

// getRentedQuan(quant) {
//     if (quant != this.state.rentedQuan) {
//         this.setState({ rentedQuant: quant });
//         console.log(quant + '  new');
//     }
// }

// render() {
//     return (
//         <Fragment>
//             <div className="pt-5" >
//                 <h1 className="pt-5" >
//                     Add Rental
//                 </h1>
//                 <div>
//                     <h5 className='rentals-search-text'>type date here to see available products (mm/dd/yyyy)</h5>
//                     <input className='rentals-input' type="text" onChange={() => this.handleDateChange} />
//                     <button onClick={() => this.handleButtonClick()} >set date</button>
//                 </div>
//                 <div>
                    // {this.state.productsList.map((x, index) => {
                    //     return (
                    //         <div key={index}>
                    //             <div onClick={() => this.handleClick(x.id, x.quantity)} >
                    //                 <img src={x.image} alt={x.name} height='150px' />
                    //                 <h3>{x.name}</h3>
                    //                 <h3>{x.price}</h3>
                    //             </div>


                    //             <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modal${index}`}>
                    //                 Launch demo modal
                    //             </button>

                    //             <div className="modal fade" id={`modal${index}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    //                 <div className="modal-dialog" role="document">
                    //                     <div className="modal-content">
                    //                         <div className="modal-header">
                    //                             <h5 className="modal-title" id="exampleModalLabel">{x.name}</h5>
                    //                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    //                                 <span aria-hidden="true">&times;</span>
                    //                             </button>
                    //                         </div>
                    //                         <div className="modal-body">
                    //                             <ul>
                    //                                 <li>price: {x.price}</li>
                    //                                 <li>description: {x.description}</li>
                    //                                 <li>length: {x.length}</li>
                    //                                 <li>width: {x.width}</li>
                    //                                 <li>height: {x.height}</li>
                    //                                 <li>max people: {x.maxpeople}</li>
                    //                             </ul>
                    //                         </div>
                    //                         <div className="modal-footer">
                    //                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    //                         </div>
                    //                     </div>
                    //                 </div>
                    //             </div>

                    //         </div>
                    //     )
                    // })}
//                 </div>







//                 <Calender sendQuan={() => this.getRentedQuan()} dateSelected={this.state.date} prodId={this.state.pID} prodQuan={this.state.pQuant} />
//             </div>
//         </Fragment>
//     )
// }
// }