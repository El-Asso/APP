import React from 'react';
import { View } from 'react-native'
import StyledGlobal from '../global.conf'
import {BookCarousel} from "../component/core/Carousel"
import MapView from '../component/core/MapView';
import Navbar from "../component/core/Navbar"
import Londing from "../component/core/Londing"
import Footer from "../component/core/Footer"
import { sortAssociations } from "../API/index"

const delta = 0.003;

class Associations extends React.Component {
    constructor(state) {
        super(state)
        this.state = {
            navTitle: "ASSOCIATIONS",
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: delta,
                longitudeDelta: delta,
            },
            associations: [],
            location: {
                latitude: 0,
                longitude: 0,
                bounds: 12
            }
        }
        this._renderMap = this._renderMap.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount:Associations", true)
        if (this.props.associations.length > 0) {
            let associations = this.props.associations;
            let navTitle = this.props.associations[0].titre;
            let location = {
                latitude: this.props.associations[0].location.lat,
                longitude: this.props.associations[0].location.lng,
            };
            let region = {
                latitude: this.props.associations[0].location.lat,
                longitude: this.props.associations[0].location.lng,
                latitudeDelta: delta,
                longitudeDelta: delta,
            };
            console.log(navTitle, location, region)
            this.setState({
                navTitle,
                region,
                location,
                associations
            })
        }
    }
    componentDidUpdate() {
        console.log("componentDidUpdate:Associations", this.state)
        // console.log(this.state.associations)

    }
    _renderMap(index) {
        console.log("_renderMap:Associations", this.state.associations[index])
        let navTitle = this.props.associations[index].titre;
        let location = {
            latitude: this.state.associations[index].location.lat,
            longitude: this.state.associations[index].location.lng,
        };
        let region = {
            latitude: this.state.associations[index].location.lat,
            longitude: this.state.associations[index].location.lng,
            latitudeDelta: delta,
            longitudeDelta: delta,
        };
        console.log(location, region)
        this.setState({
            navTitle,
            region,
            location,
        })
    }

    render() {
        return (
            <View style={StyledGlobal.container}>
                <Navbar title={this.state.navTitle} actionRigth={this.props.fPage}/>
                <MapView
                    style={StyledGlobal.mapview}
                    region={this.state.region}
                    location={this.state.location}
                />
                <View style={StyledGlobal.card}>
                    <BookCarousel associations={this.state.associations} scrollmap={this._renderMap} action={this.props.fPage}/>
                </View>
                <Footer />
            </View>
        );
    }
}

class MainAssociations extends React.Component {
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
                Associations: res.data,
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
                {this.state.inLonding === true ? <Londing /> : <Associations associations={this.state.Associations} fPage={this.props.fPage} />}
            </>
        )
    }
}



export default MainAssociations;