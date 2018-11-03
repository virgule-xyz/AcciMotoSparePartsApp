import React, { Component } from 'react';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';

const API = {
  key: 'XIfjzqGLGEPZ01D7Qm2r6fvA2MznhIHh',
  url: 'https://www.accimoto.com/api/stock',
};

class AcciMoto extends Component {
  static makeSearch = ({ kind, partnumber, onSuccess, onError, searchOn, searchOff, country }) => {
    searchOn && searchOn();

    const theurl = `${API.url}/get?key=${API.key}&lang=${country}&type=${kind}&num=${partnumber}`;

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
}

export default AcciMoto;
