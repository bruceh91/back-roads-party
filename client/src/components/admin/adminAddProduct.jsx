import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { post } from '../../services/base';
import AWS from 'aws-sdk';


class AdminAddProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            catList: [],
            maxID: 0,
            fileList: []
        }
    }

    componentDidMount() {
        fetch(`/api/category`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ catList: responseJson })
            });

            fetch(`/api/products/cat/id`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ maxID: responseJson[0].id })
            });
    }

    handleProductAddition(name, price, description, quantity, length, width, height, maxpeople) {
        
        let newProductId = (this.state.maxID + 1);

        // categories
        this.state.catList.map( (x, index) => {
            if (document.getElementById(`${x.category}`).checked) {
                post(`/api/category/reference_table`, {prodID: newProductId, catID: document.getElementById(x.category).value });
            }
        })

        //photo upload
        const BucketName = 'back-roads-party';
        const bucketRegion = 'us-east-2';
        const IdentityPoolId ='us-east-2:e4c65d86-5d68-4ffb-b793-af7ab1755e5b';
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
        console.log('one photo')
        let files = document.getElementById('photo-upload').files;
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
        });

        //sending to db
        let data = {
            name,
            price,
            description,
            quantity,
            length,
            width,
            height,
            maxpeople,
            image: 'https://s3.us-east-2.amazonaws.com/back-roads-party/products/' + fileName
        }

        if (document.getElementById('venue-checkbox').checked) {
            data.venue = "1";
        }


        console.log(`data      =      ${data}`)
        post(`/api/products`, data);
        alert(`the product ${name} was added`);

         // multiple photos                      
         let otherPhotos = document.getElementById('other-photos').files;
         console.log(otherPhotos);
         for (let i = 0; i <= otherPhotos.length + 1; i++) {
                 console.log(otherPhotos[i]);
                 let photo = otherPhotos[i];
                 let exte = photo.name.substr(photo.name.lastIndexOf('.') + 1);
                 let photoName = `${Date.now()}${Math.floor((Math.random() * 1000))}.${exte}`;           
                 let albumPhotosKey = encodeURIComponent(albumName) + '/';                     
                 let fileKey = albumPhotosKey + photoName;                                      
                 s3.upload({                                                                        
                     Key: fileKey,                                                              
                     Body: photo,
                     ACL: 'public-read',
                     ContentType: `image/${exte}`
                 }, function (err, data) {
                     if (err) {
                         return alert('There was an error uploading your photo: ' + err.message);
                     }
                     let photoData = {
                         product_id: newProductId,
                         pic_url: 'https://s3.us-east-2.amazonaws.com/back-roads-party/products/' + photoName
                         }
                     console.log(photoData)
                     post(`/api/pictures`, photoData)
                     alert(`Successfully uploaded ${i} photo.`);
                 });
             }
             window.location.reload()
    }

    handleFiles() {
        let test = this.files
        this.setState({ fileList: test })
    }

    render() {
        return (
            <Fragment>
                <div className="pt-5" >
                    <h1 className="pt-5" >
                        Add products here
                    </h1>
                    <ul>
                        <hr />
                        <li>
                            name: <input id="name" type="text" />
                        </li>
                        <hr />
                        <li>
                            price: <input id="price" type="text" />
                        </li>
                        <hr />
                        <li>
                            description: <input id="description" type="text" />
                        </li>
                        <hr />
                        <li>
                            quantity: <input id="quantity" type="text" />
                        </li>
                        <hr />
                        <li>
                            length: <input id="length" type="text" />ft
                        </li>
                        <hr />
                        <li>
                            width: <input id="width" type="text" />ft
                        </li>
                        <hr />
                        <li>
                            height: <input id="height" type="text" />ft
                        </li>
                        <hr />
                        <li>
                            max people: <input id="max" type="text" />
                        </li>
                        <hr />
                    </ul>

                    <div>
                        <h1> add pictures here</h1>
                        <h4>main picture</h4>
                        <input id="photo-upload" type="file" />
                        <h4>other pictures</h4>
                        <input id="other-photos" type="file" multiple="multiple" onChange={() => this.handleFiles(this.files)} />     {/* this next */}
                    </div>

                    <div>
                        <hr />
                        <h1>categories</h1>

                        {this.state.catList.map((x, index) => {
                            if (x.id == 6) {
                                return (
                                    <div key={index}>
                                        <input id={x.category} type="hidden" value={x.id} readOnly="true" checked="true" />
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index}>
                                        <input id={x.category} type="checkbox" value={x.id} /><label htmlFor={x.category}>{x.category}</label><br />
                                    </div>
                                )
                            }
                        })}

                    </div>

                    <div>
                        <h3>is this a venue?</h3>
                        <input id="venue-checkbox" type="checkbox" value="1" /><label htmlFor="venue">check this box if it's a venue</label>
                    </div>

                    <hr />
                    <button onClick={() => this.handleProductAddition(
                        document.getElementById("name").value,
                        document.getElementById("price").value,
                        document.getElementById("description").value,
                        document.getElementById("quantity").value,
                        document.getElementById("length").value,
                        document.getElementById("width").value,
                        document.getElementById("height").value,
                        document.getElementById("max").value
                    )}>add product</button>

                </div>
            </Fragment>
        )
    }
}

export default AdminAddProduct;