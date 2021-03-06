

import React from 'react';
// import './addpic.css'
import AuthService from '../../AuthService';
import API from '../../../utils/API';
// TO DO:
// 1. REMOVE REACT NATIVE
// 2. CHANGE TO BOOTSTRAP MODALS


const customStyles = {

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};



class AddPic extends React.Component {


  constructor(props) {
    super(props);
    this.Auth = new AuthService();

    this.state = {
      
      picture: '',
      
     
    };

    console.log(this.props)
    this.handleProfileImage = this.handleProfileImage.bind(this);
  }



  
 
  handleProfileImage(e) {
    e.preventDefault();

    const userId = this.props.userId;
    
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('category', 'image');
           
    fetch('https://www.fileconvrtr.com/api/convert/file?apiKey=a8f545dbb31244a5b081a8cc6bdf37f7',{
      method: 'POST',
      body: data
    }).then((response) => {
  
    response.json()
    .then((body) => {
     const imgurl = body.s3Url
     const userPicId = {
       userId,
       imgurl
     }
        API.userimage(userPicId)
      
        // this.setState({
        //   picture: body.s3Url  
        // })
      
        });
        
    });
    
}

  render() {
    return (
      <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Add/Change Picture
</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Picture</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="userInputTitle">Add Pic:</div>
                <input className="informationInupt"
                  type="file"
                  name="picture"
                  ref={(ref) => { this.uploadInput = ref; }}

                />



       

              </div>
              <div class="modal-footer">
                
                <button type="button" className="btn btn-primary" onClick={this.handleProfileImage}>Save changes</button>
              </div>
            </div>
          </div>
        </div>  
            
         </div>  
    );
  }
}

export default AddPic;