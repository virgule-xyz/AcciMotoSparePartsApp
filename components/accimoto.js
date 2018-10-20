import React, { Component } from 'react';
import axios from 'axios';
import Upload from 'react-native-background-upload';

const API = {
  key: 'XIfjzqGLGEPZ01D7Qm2r6fvA2MznhIHh',
  url: 'https://www.accimoto.com/api/stock',
};

class AcciMoto extends Component {
  static makeSearch = ({ kind, partnumber, onSuccess, onError, searchOn, searchOff, country }) => {
    searchOn && searchOn();

    const theurl = `${API.url}/get?key=${API.key}&lang=${country}&type=${kind}&num=${partnumber}`;
    console.warn(theurl);

    axios({
      url: theurl,
      method: 'GET',
    })
      .then(response => {
        const { data, status } = response;
        searchOff && searchOff();
        if (data.result === 'KO' || status !== 200) {
          onError && onError(data.text);
        } else {
          const { items } = data;
          console.warn(items);
          const ret =
            kind === 'pie'
              ? {
                  kind: kind,
                  partnumber: partnumber,
                  partdatas: {
                    name: items.piece,
                    trademark: items.marque,
                    model: items.modele,
                    type: items.type,
                    periode: items.periode,
                    couleur: items.couleur,
                    cylindree: items.cylindree,
                  },
                }
              : {
                  kind: kind,
                  partnumber: partnumber,
                  partdatas: {
                    type: items.type,
                    num: items.num,
                    marque: items.marque,
                    modele: items.modele,
                    immat: items.immat,
                    kms: items.kms,
                    couleur: items.couleur,
                  },
                };
          onSuccess && onSuccess(ret);
        }
      })
      .catch(error => {
        searchOff && searchOff();
        onError && onError(error);
      });
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
