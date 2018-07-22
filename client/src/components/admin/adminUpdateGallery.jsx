import React, { Component } from 'react';
import { post, destroy, put } from '../../services/base';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

class AdminUpdateGallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pictureList: []
        }
    }

    componentDidMount() {
        fetch(`/api/pictures/gallery`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ pictureList: responseJson })
            });
    }

    handleAddition() {
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
            image: 'https://s3.us-east-2.amazonaws.com/back-roads-party/products/' + fileName
        }


        console.log(`data      =      ${data}`)
        post(`/api/pictures/gallery`, data);
        alert(`the product ${data} was added`);

    }

    handleImageDelete(id) {
        let data = {
            id
        }
        destroy(`/api/pictures/gallery`, data);
        window.location.reload();
    }

    handleTextChange(id, text) {
        let data = {
            text
        }
        put(`api/pictures/gallery/${id}`, data);
        window.location.reload();
    }

    render() {
        // console.log(this.props)
        return (
            <div className="pt-5">
                <Link className="btn btn-warning float-right mr-5" to="adminHome" >HOME</Link>
                <div className="mt-5 text-center" >
                    <hr />
                    <h1 className="text-center" > add pictures to gallery here</h1>
                    <input id="photo-upload" type="file" />
                    <button onClick={() => this.handleAddition()} > add picture </button>
                </div>
                <hr className="mb-5" />


                <div>
                    <h1 className="text-center" >Update existing pictures</h1>
                    <hr/>
                    {this.state.pictureList.map((x, index) => {
                        return (
                            <div key={index} className="m-2">
                                <img src={x.image} className="details-images text-shadow" alt="other photo" data-toggle="modal" data-target=".pictures-modal" />
                                <button className="ml-5" onClick={() => this.handleImageDelete(x.id)}>delete</button>
                                <p className="pt-2" >text: {x.text}</p>
                                {/* <label for="text-input"></label> */}
                                <input id={"text-input" + index} className="form-control input-lg" type="text" placeholder="new gallery text" />
                                <button onClick={() => this.handleTextChange(x.id, document.getElementById("text-input" + index).value)}>update</button>
                                <hr />
                            </div>
                        )
                    })}
                </div>


            </div>
        )
    }
}

export default AdminUpdateGallery;