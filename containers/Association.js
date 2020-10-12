import React from 'react';
import { View,Text } from 'react-native'
import StyledGlobal from '../global.conf'
import {EventsCarousel} from "../component/core/Carousel"
import MapView from '../component/core/MapView';
import Navbar from "../component/core/Navbar"
import Londing from "../component/core/Londing"
import Footer from "../component/core/Footer"
import { sortAssociations } from "../API/index"

const delta = 0.003;

class Association extends React.Component {
    constructor(state) {
        super(state)
        this.state = {
            navTitle: "",
            association :{
                region: {
                    latitude: 0,
                    longitude: 0,
                    latitudeDelta: delta,
                    longitudeDelta: delta,
                },
                events: [{},{},{},{}],
                location: {
                    latitude: 0,
                    longitude: 0,
                    bounds: 12
                }
            }
        }
    }

    componentDidMount() {
        console.log("componentDidMount:Association", this.props.ID)
    }


    render() {
        return (
            <View style={StyledGlobal.container}>
                <Navbar title={this.state.navTitle} actionRigth={this.props.fPage} bgnav="#6666ff"/>
                    <View style={StyledGlobal.card}>
                        <EventsCarousel events={this.state.association.events} action={this.props.fPage}/>
                    </View>
                <Footer />
            </View>
        );
    }
}

class MainAssociation extends React.Component {
    constructor(state) {
        super(state)
        this.state = {
            inLonding: true,
            association: {},
            Associations: [],
            title: "9300 associations"
        }
    }
    componentDidMount() {
        console.log("componentDidMount::Main")
        sortAssociations().then(res => {
            this.setState({
                Association: res.data,
                inLonding: false
            })
        })
    }
    // componentDidUpdate() {
    //     console.log("componentDidUpdate::Main")
    // }

    render() {
        return (
            <>
                {this.state.inLonding === true ? <Londing /> : <Association events={this.state.Associations} fPage={this.props.fPage} />}
            </>
        )
    }
}



export default MainAssociation;