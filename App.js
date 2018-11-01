import React from 'react';
import { AsyncStorage, NetInfo } from 'react-native';
import { PictureContext, AcciMoto } from '@components';
import Navigator from './Navigator';

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
    // this.backgroundRunner();
  };

  /**
   * demande le chargement des images vers le serveur en remplissant la queue de chargement
   */
  uploadPictures = () => {
    const me = this;
    const newToUpload = me.state.pictures.map((item, index) => {
      return {
        file: 'data:image/jpeg;base64,' + item,
        name: me.setNameData(me.state.kind, me.state.partnumber, index),
      };
    });
    this.topupload = [...me.state.queue, ...newToUpload];
    this.setState(state => ({
      pictures: [],
      queue: this.topupload,
    }));
    return this.persistPictures(this.topupload);
    // this.backgroundRunner();
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
   * @param {int} n le numéro de l'image
   */
  backgroundRunner = (n = 0) => {
    storeKey = '@AcciMotoStore:pictures';

    hasPicturesToUpload = () => this.topupload.length > 0;

    savePicturesToStore = async () => {
      valueAppToStore = value => value;
      try {
        const transformedValue = valueAppToStore(this.topupload);
        await AsyncStorage.setItem(this.storeKey, transformedValue);
      } catch (error) {}
    };

    loadPicturesFromStore = async () => {
      valueStoreToApp = value => value;
      try {
        const value = await AsyncStorage.getItem(this.storeKey);
        if (value !== null) {
          const transformedValue = valueStoreToApp(value);
          this.toupload = [...this.state.queue, ...transformedValue];
          this.setState(state => ({
            queue: this.topupload,
          }));
        }
      } catch (error) {}
    };

    sendPictureAway = () => {
      const pictureToUpload = this.topupload[0];
      console.warn('TO UPLOAD:pictureToUpload:', pictureToUpload);
      AcciMoto.SendPicturesOnServer(
        pictureToUpload,
        () => {
          const queue = Object.assign(this.topupload, this.state.queue);
          const newQueue = queue.filter(item => {
            item.file !== pictureToUpload.file;
          });
          this.setState(state => ({
            queue: newQueue,
          }));
          savePicturesToStore();
          // console.warn('UPLOAD OK');
          // this.backgroundRunner(n + 1);
        },
        () => {
          console.warn('UPLOAD KO');
          this.backgroundRunner(n + 1);
        },
      );
    };

    // NetInfo.isConnected.fetch().then(isConnected => {
    //   if (true) {
    //     debugger;
    //     !hasPicturesToUpload() &&
    //       loadPicturesFromStore() &&
    //       setTimeout(() => {
    //         debugger;
    //         this.backgroundRunner();
    //       }, 10000);
    //     hasPicturesToUpload() && sendPictureAway();
    //   } else {
    //     if (hasPicturesToUpload()) {
    //       savePicturesToStore();
    //       setTimeout(() => {
    //         debugger;
    //         this.backgroundRunner();
    //       }, 10000);
    //     }
    //   }
    // });

    sendPictureAway();
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
