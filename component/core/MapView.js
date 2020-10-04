import React, { useState, useEffect } from 'react';
import StyledGlobal from '../../global.conf'
import MapView, { Marker } from 'react-native-maps';
const Maps = (props) => {
    return (
        <MapView style={StyledGlobal.mapview}
            region={props.region}
        // onRegionChangeComplete={()=>{}}
        >
            <Marker
                coordinate={props.location}
                title={props.title}
                description={props.description}
            />
        </MapView>
    )
}

export default Maps;