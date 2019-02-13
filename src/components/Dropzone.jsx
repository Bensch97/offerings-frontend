import React from 'react'
import Dropzone from 'react-dropzone'
import * as filestack from 'filestack-js';

function MaterialIcon(props) {
    return (
      <i class='material-icons'>
        {props.icon}
      </i>
    )
  }

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 300,
    height: 150,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  }
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

  
  class DropzoneWithPreview extends React.Component {
    constructor() {
      super()
      this.state = {
        files: [],
        url: ''
      };
    }
    
    onDrop(files) {
      this.setState({
        files: files.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      });
    }
    
    componentWillUnmount() {
      // Make sure to revoke the data uris to avoid memory leaks
      this.state.files.forEach(file => URL.revokeObjectURL(file.preview))
    }
    
    componentDidMount() {
      const apikey = 'AkTkjLHS0yrAWYYu83OwXz';
    
    
      const client = filestack.init(apikey);
    
      document.getElementById('root').addEventListener('change', (event) => {
        const files = event.target.files;
        const file = files.item(0);
    
        client.upload(file)
          .then(res => {
            this.setState({
              url: res.url
            })
            console.log('success: ', res)
          })
          .catch(err => {
            console.log(err)
          });
        });
    }
    
    render() {
      const {files} = this.state;
      
      
      const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={file.preview}
              style={img}
              />
          </div>
        </div>
      ));
      console.log(this.state.files[0])
      
      return (
        <section>
          {this.state.files[0] ? <aside style={thumbsContainer}>
            {thumbs}
          </aside> : 
          <Dropzone
          id="dropzone"
          accept="image/*"
          onDrop={this.onDrop.bind(this)}>
            {({getRootProps, getInputProps}) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <MaterialIcon icon='photo_upload' />
                <p>Choose a photo...</p>
              </div>
            )}
          </Dropzone>}
        </section>
      );
    }
  }
  
  export default DropzoneWithPreview