import React, { Component } from 'react';
import { post, destroy, put } from '../../services/base';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

class AdminUpdateCarousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pictureList: []
        }
    }

    componentDidMount() {
        fetch(`/api/pictures/carousel`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ pictureList: responseJson })
            });
    }

    handleAddition(carHeader, carText) {
        //photo upload
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
            window.location.reload();
        });

        //sending to db
        let data = {
            picture: 'https://s3.us-east-2.amazonaws.com/back-roads-party/products/' + fileName,
            header: carHeader,
            text: carText
        }


        console.log(`data      =      ${data}`)
        post(`/api/pictures/carousel`, data);
        alert(`the product ${data} was added`);

    }

    handleImageDelete(id) {
        let data = {
            id
        }
        destroy(`/api/pictures/carousel`, data);
        window.location.reload();
    }

    handleTextChange(id, value, type) {
        let data = {};
        if (type == "text") {
            data = {
                text: value
            }
        } else if (type == "header") {
            data = {
                header: value
            }
        }
        put(`api/pictures/carousel/${id}`, data);
        window.location.reload();
    }

    render() {
        // console.log(this.props)
        return (
            <div className="pt-5">
                <Link className="btn btn-warning float-right mr-5" to="adminHome" >HOME</Link>
                <div className="mt-5" >
                    <hr />
                    <h1 className="text-center"> add pictures to carousel here</h1>
                    <input id="photo-upload" type="file" />
                    <h3>new header</h3>
                    <input id="new-header-input" className="form-control input-lg" type="text" placeholder="new gallery text" />
                    <h3>new text</h3>
                    <input id="new-text-input" className="form-control input-lg" type="text" placeholder="new gallery text" />
                    <button onClick={() => this.handleAddition(document.getElementById("new-header-input").value, document.getElementById("new-text-input").value)} > add picture </button>
                </div>
                <hr className="mb-5" />


                <div>
                    <h1 className="text-center" >update existing pictures</h1>
                    <hr/>
                    {this.state.pictureList.map((x, index) => {
                        return (
                            <div key={index} className="m-2">
                                <img src={x.picture} className="details-images text-shadow" alt="photo" />

                                <button className="ml-5" onClick={() => this.handleImageDelete(x.id)}>delete</button>

                                <p className="pt-2" > header: {x.header}</p>
                                <input id={"header-input" + index} className="form-control input-lg" type="text" placeholder="new gallery text" />
                                <button onClick={() => this.handleTextChange(x.id, document.getElementById("header-input" + index).value, "header")}>update</button>

                                <p className="pt-2" >text: {x.text}</p>
                                <input id={"text-input" + index} className="form-control input-lg" type="text" placeholder="new gallery text" />
                                <button onClick={() => this.handleTextChange(x.id, document.getElementById("text-input" + index).value, "text")}>update</button>
                                <hr />
                            </div>
                        )
                    })}
                </div>


            </div>
        )
    }
}

export default AdminUpdateCarousel;