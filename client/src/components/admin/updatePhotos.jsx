import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';

class UpdatePhotos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productID: 0,
            pictureList: []
        }
    }

    findData(ID) {
        // this.setState({productID: ID});

        fetch(`/api/pictures/${ID}`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            });
    }

    render() {
        let pics = this.findData(this.props.prodID)
        return (
            <Fragment>
                <h1>test test  </h1>
                <h4>props {this.props.prodID}</h4>
                <h4>state {this.state.productID}</h4>


                <h4>main image</h4>
                <img src={this.props.mainImage} alt="main-photo" height='150px' />
                <h6>change image</h6>
                <input id="new-main-image" type="file" />
                {pics.map((x, index) => {
                    console.log(x)
                    return (
                        <div key={index} >
                            <h3>url : {x.pic_url}</h3>
                            <img src={x.pic_url} alt="image" />
                        </div>
                    )
                })
                    
                }
            </Fragment>
            
        )
    }
}

export default UpdatePhotos;