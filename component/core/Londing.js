import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Image } from 'react-native'

const Londing = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems : "center"}} isVisible={true}>
            <ActivityIndicator size={150} color="#0000ff" />
        </View>
    );
}

export default Londing;