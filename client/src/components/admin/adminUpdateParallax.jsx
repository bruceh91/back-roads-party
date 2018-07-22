import React, { Component } from 'react';
import { post, destroy, put } from '../../services/base';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

class AdminUpdateParallax extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pictureList: []
        }
    }

    componentDidMount() {
        fetch(`/api/pictures/parallax`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ pictureList: responseJson })
            });
    }

    handleAddition(paraId, order) {
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
        let files = document.getElementById('photo-upload' + paraId).files;
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
            display_order: order
        }

        let delData = {
            id: paraId
        }


        console.log(`data      =      ${data}`)
        destroy(`/api/pictures/parallax`, delData);
        post(`/api/pictures/parallax`, data);
        alert(`the product ${data} was added`);

    }

    render() {
        return (
            <div className="pt-5">
                <Link className="btn btn-warning float-right mr-5" to="adminHome" >HOME</Link>
                <div className="mt-5 text-center" >
                    <hr />
                    <h1> change parallax pictures here</h1>
                </div>
                <hr className="mb-5" />


                <div className="d-flex flex-column">
                    {this.state.pictureList.map((x, index) => {
                        return (
                            <div key={index} className="m-2 w-100">
                                <img src={x.picture} className="details-images text-shadow" alt="photo" />
                                <h5>upload different picture here</h5>
                                <input id={"photo-upload" + x.id} type="file" />
                                <button onClick={() => this.handleAddition(x.id, index + 1)} > change picture </button>
                                <hr />
                            </div>
                        )
                    })}
                </div>


            </div>
        )
    }
}

export default AdminUpdateParallax;