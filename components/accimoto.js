import React, { Component } from 'react';

class AcciMoto extends Component {
  static makeSearch = ({ kind, partid, onSuccess, onError, searchOn, searchOff }) => {
    searchOn && searchOn();
    setTimeout(() => {
      onSuccess &&
        onSuccess({
          kind: kind,
          partnumber: partid,
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

  // TODO : A REVOIR
  static FTPPicture = ({ file, name }) => {
    console.warn('uploading ', file, ' to ', name);
  };
}

export default AcciMoto;
