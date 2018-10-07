import React, { Component } from 'react';
import Upload from 'react-native-background-upload';

class AcciMoto extends Component {
  static makeSearch = ({ kind, partnumber, onSuccess, onError, searchOn, searchOff }) => {
    console.log('makeSearch', kind, partnumber, onSuccess, onError, searchOn, searchOff);
    searchOn && searchOn();
    setTimeout(() => {
      onSuccess &&
        onSuccess({
          kind: kind,
          partnumber: partnumber,
          partdatas: {
            name: 'Name',
            trademark: 'Trademark',
            model: 'Model',
            type: 'Type',
            line1: 'Ea quidem qui et culpa sed deserunt quod.',
            line2: 'Asperiores saepe nobis.',
          },
        });
      searchOff && searchOff();
    }, Math.random() * 5000);
  };

  // accimoto.netmize.org
  // api_upload_1.accimoto.com
  // 39Rv*}sBj%Zkx>u

  static FTPPicture = ({ file, name }, onEndUpload, onErrorUpload) => {
    const options = {
      url: 'http://accimoto.netmize.org/',
      path: file,
      method: 'POST',
      field: 'uploaded_media',
      type: 'multipart',
      parameters: {
        name: name,
      },
      notification: {
        enabled: true,
      },
    };
    Upload.getFileInfo(options.path).then(metadata => {
      Upload.startUpload(options)
        .then(uploadId => {
          console.warn('Upload started:', name);
          // addListener('progress', uploadId, data => {
          //   console.warn(`Progress: ${data.progress}%`);
          // });
          addListener('error', uploadId, data => {
            console.warn(`Error: ${data.error}%`);
            onErrorUpload();
          });
          // addListener('cancelled', uploadId, data => {
          //   console.warn(`Cancelled!`);
          // });
          addListener('completed', uploadId, data => {
            console.warn('Completed!');
            onEndUpload();
          });
        })
        .catch(err => {
          console.warn('Upload error!', err);
          onErrorUpload();
        });
    });
  };
}

export default AcciMoto;
