import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet, 
} from 'react-native';

class Share extends React.Component {
  render() {
    return (
      <View
        style={styles.container}>
        <Text>
          Home
        </Text>
        <Button
          title={'Go to Share'}
          onPress={() => this.props.history.push('/about', {
            name: 'Peter'
          }) } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Share;