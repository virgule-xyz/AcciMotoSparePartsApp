import React from 'react';
import { AsyncStorage, NetInfo, Alert } from 'react-native';
import { PictureContext, AcciMoto } from '@components';
import Navigator from './Navigator';
import RNFetchBlob from 'rn-fetch-blob';

/**
 * L'application principale
 */
class App extends React.Component {
  toupload = [];

  /**
   * Le constructeur avec le state contenant les images
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      kind: 'pie',
      partnumber: 0,
      partdatas: { name: '', trademark: '', model: '', type: '', line1: '', line2: '' },
      motdatas: {
        type: '',
        num: '',
        marque: '',
        modele: '',
        immat: '',
        kms: '',
        couleur: '',
      },
      pictures: [],
      queue: [],
      connected: false,
      addPicture: this.addPicture,
      removePicture: this.removePicture,
      uploadPictures: this.uploadPictures,
      selectNewItem: this.selectNewItem,
    };
  }

  /**
   * Nomme une pièce pour l'upload
   */
  setNameData = (kind, partnumber, index) => {
    const sep = '_';
    const partnumber05 = ('' + partnumber).padStart(5, '0');
    const index02 = ('' + (index + 1)).padStart(2, '0');
    const newname = kind + sep + partnumber05 + sep + index02;
    return newname;
  };

  /**
   * change de type de pièce (pie - pièce ou mot - moto) et de numéro
   */
  selectNewItem = ({ kind, partnumber, partdatas }) => {
    kind === 'pie'
      ? this.setState({ kind: kind, partnumber: partnumber, partdatas: partdatas })
      : this.setState({ kind: kind, partnumber: partnumber, motdatas: partdatas });
  };

  /**
   * Ajoute une image au state/array
   */
  addPicture = data => {
    this.setState(state => ({
      pictures: [...state.pictures, data.base64],
    }));
  };

  /**
   * supprime une image du tableau
   */
  removePicture = (index, pname) => {
    const newPictures = this.state.pictures.filter((item, id) => id + item !== index + pname);
    this.setState({ pictures: newPictures });
  };

  /**
   * lancement du background-runner au montage
   */
  componentDidMount = async () => {
    const pictures = await this.unpersistPictures();
    console.warn(pictures);
    this.setState(state => ({
      pictures: [],
      queue: pictures,
    }));
    this.backgroundRunner(pictures);
  };

  /**
   * demande le chargement des images vers le serveur en remplissant la queue de chargement
   */
  uploadPictures = () => {
    const me = this;
    const newToUpload = me.state.pictures.map((item, index) => {
      return {
        file: item,
        name: me.setNameData(me.state.kind, me.state.partnumber, index),
      };
    });
    this.topupload = [...me.state.queue, ...newToUpload];
    this.setState(state => ({
      pictures: [],
      queue: this.topupload,
    }));
    this.persistPictures(this.topupload).then(() => {
      this.backgroundRunner(this.topupload);
    });
  };

  /**
   * Recover pictures from persistent storage
   *
   * @returns {Array} toutes les images
   */
  unpersistPictures = async () => {
    const jspictures = await AsyncStorage.getItem('pictures');
    return JSON.parse(jspictures);
  };

  /**
   * Save all pictures to persistent storage
   *
   * @param {Array} pictures All pictures array to presist
   */
  persistPictures = pictures => {
    return AsyncStorage.setItem('pictures', JSON.stringify(pictures));
  };

  /**
   * la tâche de fond pour charger les images, avec vérification de l'état du réseau
   *
   * @param {Array} pictures toutes les images
   * @param {bool} withAlert afficher l'alerte de non connection ?
   */
  backgroundRunner = (pictures, withAlert = true) => {
    testConnection = () => {
      return new Promise((resolve, reject) => {
        NetInfo.getConnectionInfo().then(connectionInfo => {
          isConnected = connectionInfo.type !== 'none';
          const state = Object.assign({}, this.state);
          state.connected = isConnected;
          this.setState(state);
          if (isConnected) resolve();
          else {
            setTimeout(() => {
              this.backgroundRunner(pictures, false);
            }, 5000);
            if (withAlert) reject();
          }
        });
      });
    };
    putThisPictureOnServer = picture => {
      const me = this;
      return new Promise((resolve, reject) => {
        // accimoto.netmize.org
        // api_upload_1.accimoto.com
        // 39Rv*}sBj%Zkx>u
        debugger;
        RNFetchBlob.fetch(
          'POST',
          AcciMoto.URL.upload,
          {
            'Content-Type': 'multipart/form-data',
          },
          [{ name: 'name', data: picture.name + '.jpg' }, { name: 'file', data: picture.file }],
        )
          /*.uploadProgress((written, total) => {
            console.warn(`uploaded ${Math.ceil((written / total) * 100)}%`);
            const state = Object.assign({}, me.state);
            state.upload = { written, total };
            me.setState(state);
          })*/
          .then(resp => {
            resolve();
          })
          .catch(err => {
            reject();
          });
      });
    };

    const state = Object.assign({}, this.state);
    state.queue = pictures;
    this.setState(state);

    testConnection()
      .then(() => {
        if (pictures.length >= 1) {
          const copyPictures = pictures.concat([]);
          const toUpload = copyPictures.shift();
          putThisPictureOnServer(toUpload)
            .then(() => {
              const state = Object.assign({}, this.state);
              state.queue = copyPictures;
              this.setState(state);
              if (copyPictures.length > 0) {
                this.persistPictures(copyPictures).then(() => {
                  this.backgroundRunner(copyPictures);
                });
              } else {
                this.persistPictures([]);
              }
            })
            .catch(err => {
              Alert.alert("Erreur à l'upload");
            });
        }
      })
      .catch(() => {
        Alert.alert('Vous devez vous connecter');
      });
  };

  /**
   * le renderer contient le provider de contexte avec les images à gérer
   */
  render = () => (
    <PictureContext.Provider value={this.state}>
      <Navigator />
    </PictureContext.Provider>
  );
}

export default App;
