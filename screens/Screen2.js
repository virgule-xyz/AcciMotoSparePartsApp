import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {withNavigation} from 'react-navigation';
import SparePartSelector from '@components/sparepartselector';
import AppHeader from '@components/header';
import AppFooter from '@components/footer';
import {withBack} from '@components/withback';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
});

class Screen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: 3,
        }
    }

    onSuccess = () => {
        const newparams = Object.assign({pending:this.state.pending}, this.props.navigation.state.params);
        this.props.navigation.navigate('Screen3', newparams);
    }

    /**
     * [render description]
     * @return {[type]} [description]
     * TODO: Ajouter une props onFound
     */
    render() {
        return (
          <View style={styles.container}>
            <AppHeader home />
            <SparePartSelector style={styles.spareParts} onSuccess={this.onSuccess} />
            <AppFooter home uploaderCount={this.state.pending} />
          </View>
        );
    }
}

export default withNavigation(withBack(Screen2));