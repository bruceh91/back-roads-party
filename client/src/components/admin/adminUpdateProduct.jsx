import React, { Component, Fragment } from 'react';
import UpdatePhotos from './updatePhotos'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { put } from '../../services/base';


class UpdateProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {},
            pictureList: []
        }
    }


    componentDidMount() {
        console.log(`process stuff    ${JSON.stringify(process.env)}, ${process.env.AWS_BUCKET}`)
        console.log('attempt get')
        fetch(`/api/products/${this.props.match.params.id}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ product: responseJson })
            });

        fetch(`/api/pictures/${this.props.match.params.id}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ pictureList: responseJson })
            });

    }

    handleClick(columnName, newValue) {

        fetch(`/api/products/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: new Headers({
                "content-type": "application/json"
            }),
            body: JSON.stringify({
                column: columnName,
                value: newValue
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                console.log("PUT handled")
            });

        alert(`the item's "${columnName}" value has been updated to "${newValue}"`);

        window.location.reload();
    }

    handleImageChange(colName, pictureID, ref_id) {
        console.log(`colname   ==  ${colName}`);
        console.log(`file   ===    ${file}`);

        const BucketName = 'back-roads-party';
        const bucketRegion = 'us-east-2';
        const IdentityPoolId = 'us-east-2:e4c65d86-5d68-4ffb-b793-af7ab1755e5b';
        AWS.config.update({
            region: bucketRegion,
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId
            })
        });
        const s3 = new AWS.S3({
            apiVersion: '2006-03-01',
            params: { Bucket: BucketName }
        });
        
        let albumName = 'products'
        
        // one photo
        let files = document.getElementById(pictureID).files;
        if (!files.length) {
            return alert('Please choose a file to upload first.');
        }
        let file = files[0];
        let ext = file.name.substr(file.name.lastIndexOf('.') + 1);
        let fileName = `${Date.now()}${Math.floor((Math.random() * 1000))}.${ext}`;
        let albumPhotosKey = encodeURIComponent(albumName) + '/';
        let photoKey = albumPhotosKey + fileName;
        
        s3.upload({
            Key: photoKey,
            Body: file,
            ACL: 'public-read',
            ContentType: `image/${ext}`
        }, function (err, data) {
            if (err) {
                return alert('There was an error uploading your photo: ' + err.message);
            }
            console.log('success with one photo')
            alert('Successfully uploaded main photo.');
            window.location.reload();
        });






        if ( colName == 'image' ) {
        fetch(`/api/products/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: new Headers({
                "content-type": "application/json"
            }),
            body: JSON.stringify({
                column: colName,
                value: 'https://s3.us-east-2.amazonaws.com/back-roads-party/products/' + fileName
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                console.log("PUT handled")
            });
        } else if (colName == "pic_url") {
            fetch(`/api/pictures`, {
                method: 'PUT',
                headers: new Headers({
                    "content-type": "application/json"
                }),
                body: JSON.stringify({
                    column: colName,
                    value: 'https://s3.us-east-2.amazonaws.com/back-roads-party/products/' + fileName,
                    ref_id
                })
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    console.log("PUT handled")
                });
        } else {
            fetch(`/api/pictures`, {
                method: 'POST',
                headers: new Headers({
                    "content-type": "application/json"
                }),
                body: JSON.stringify({
                    product_id: ref_id,
                    pic_url: 'https://s3.us-east-2.amazonaws.com/back-roads-party/products/' + fileName,
                    
                })
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    console.log("PUT handled")
                });
        }
        
    }


    render() {
        return (
            <Fragment>
                <div className="pt-5" >
                <Link className="btn btn-warning float-right mr-5" to="adminHome" >HOME</Link>
                    <h1 className="pt-5" >
                        Update product here
                        <hr />
                        <div>
                            <hr />
                            <h3>name: {this.state.product.name}</h3>
                            <input id="name" type="text" placeholder="new name" />
                            <button onClick={() => this.handleClick("name", document.getElementById("name").value)}>update</button>
                            <hr />

                            <h3>ID: {this.state.product.id}</h3>
                            <h5>ID can't be changed</h5>
                            <hr />

                            <h4>price: {this.state.product.price}</h4>
                            <input id="price" type="text" placeholder="new price" />
                            <button onClick={() => this.handleClick("price", document.getElementById("price").value)}>update</button>
                            <hr />

                            <h4>description: {this.state.product.description}</h4>
                            <input id="description" type="text" placeholder="new description" />
                            <button onClick={() => this.handleClick("description", document.getElementById("description").value)}>update</button>
                            <hr />

                            <h4>quantity: {this.state.product.quantity}</h4>
                            <input id="quantity" type="text" placeholder="new quantity" />
                            <button onClick={() => this.handleClick("quantity", document.getElementById("quantity").value)}>update</button>
                            <hr />

                            <h4>length: {this.state.product.length}</h4>
                            <input id="length" type="text" placeholder="new length" />
                            <button onClick={() => this.handleClick("length", document.getElementById("length").value)}>update</button>
                            <hr />

                            <h4>width: {this.state.product.width}</h4>
                            <input id="width" type="text" placeholder="new width" />
                            <button onClick={() => this.handleClick("width", document.getElementById("width").value)}>update</button>
                            <hr />

                            <h4>height: {this.state.product.height}</h4>
                            <input id="height" type="text" placeholder="new height" />
                            <button onClick={() => this.handleClick("height", document.getElementById("height").value)}>update</button>
                            <hr />

                            <h4>max people: {this.state.product.maxpeople}</h4>
                            <input id="maxpeople" type="text" placeholder="new max people" />
                            <button onClick={() => this.handleClick("maxpeople", document.getElementById("maxpeople").value)}>update</button>
                            <hr />


                            {/* <UpdatePhotos prodID={this.state.product.id} mainImage={this.state.product.image} /> */}

                            <h4>main image</h4>
                            <img src={this.state.product.image} alt="main-photo" height='150px' />
                            <h6>change image</h6>
                            <input id="new-main-image" type="file" />
                            <button onClick={() => this.handleImageChange("image", "new-main-image")}>update</button> 
                            <br/>
                            <br/>

                            {this.state.pictureList.map((x, index) => {
                                let id = x.id
                                let inputID = `new-image-${id}`
                                return (
                                    <div key={index}>
                                        <img src={x.pic_url} alt="image" height='150px' />
                                        <h6>change image</h6>
                                        <input id={inputID} type="file" />
                                        <button onClick={() => this.handleImageChange("pic_url", inputID, id)}>update</button> <br/>
                                        <br/>
                                    </div>
                                )
                            })

                            }
                            <h4>add new secondary image</h4>
                            <input id="new-secondary-image" type="file" />
                            <button onClick={() => this.handleImageChange("secondary", "new-secondary-image", this.state.product.id)}>update</button> 
                      

                        </div>
                    </h1>

                </div>
            </Fragment>
        )
    }
    }

export default UpdateProduct;