import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

class Delete extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          About
        </Text>
        <Text>
          Hello {this.props.location.state.name}!
        </Text>
        <Button title="Back" onPress={() => this.props.history.goBack()}/>
   </View>
    )
    }
};
   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default Delete;
