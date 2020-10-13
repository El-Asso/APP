import React from 'react';
import { View,Text , ScrollView, Linking} from 'react-native'
import StyledGlobal from '../global.conf'
import {EventsCarousel} from "../component/core/Carousel"
import MapView from '../component/core/MapView';
import Navbar from "../component/core/Navbar"
import Londing from "../component/core/Londing"
import Footer from "../component/core/Footer"
import { sortAssociation } from "../API/index"
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Icon } from 'react-native-elements'


const delta = 0.003;

class Association extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navTitle: "",
            association :{
                region: {
                    latitude: 0,
                    longitude: 0,
                    latitudeDelta: delta,
                    longitudeDelta: delta,
                },
                events: [{
                        image:"https://moovevent.com/wp-content/uploads/2019/07/MoovEvent_SliderEvents0.0_1860x1020.jpg",
                        titre:"Evénement 1",
                        date:"12-12-2020"
                    },{
                        image:"https://www.gl-events.com/sites/default/files/styles/hero_background_image/public/2020-03/COMMUNIQUE-APPEL-SOLIDARITE-COLLECTIVE-HEADER-BENTO.jpg?itok=hitK6ee_",
                        titre:"Evénement 2",
                        date:"12-12-2020"
                    },{
                        image:"https://www.kravmaga-beynes.fr/wp-content/uploads/2016/09/EVENTS1-910x768.jpg",
                        titre:"Evénement 3",
                        date:"12-12-2020"
                    }],
                location: {
                    latitude: 0,
                    longitude: 0,
                    bounds: 12
                }
            }
        }
    }

    componentDidMount() {
        console.log("componentDidMount:Association", this.props)
        this.setState({
            navTitle : this.props.association.titre,

        })
    }


    render() {
        const setLogo = (logo_obj) => {
            if (logo_obj) {
                return logo_obj.original
            }
            return "https://www.belin-beliet.fr/medias/2019/04/associations.jpg"
        }
        return (
            <View style={StyledGlobal.container}>
                    <Navbar title={this.state.navTitle} actionRigth={this.props.fPage} bgnav="#6666ff"/>
                    <ScrollView style={StyledGlobal.container}>
                        <EventsCarousel events={this.state.association.events} action={this.props.fPage}/>
                        <Card>
                            <CardImage 
                                source={{uri: setLogo(this.props.association.logo)}}
                            />
                            <CardTitle 
                                title={this.props.association.titre}
                            />
                            <CardContent text={this.props.association.objet} />
                            <CardAction 
                                separator={true} 
                                inColumn={false}>
                                <Icon
                                    raised
                                    name='facebook'
                                    type='font-awesome'
                                    color='#808080'
                                    onPress={() => console.log('hello')} />
                                <Icon
                                    raised
                                    name='instagram'
                                    type='font-awesome'
                                    color='#808080'
                                    onPress={() => console.log('hello')} />
                                <Icon
                                    raised
                                    name='twitter'
                                    type='font-awesome'
                                    color='#808080'
                                    onPress={() => console.log('hello')} />
                                <Icon
                                    raised
                                    name='linkedin'
                                    type='font-awesome'
                                    color='#808080'
                                    onPress={() => console.log('hello')} />
                                <Icon
                                    raised
                                    name='phone'
                                    type='font-awesome'
                                    color='#808080'
                                    onPress={() => Linking.openURL(`tel:${this.props.association.telephone}`)} />
                            </CardAction>
                            </Card>
            </ScrollView>

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
            title: "9300 associations"
        }
    }
    componentDidMount() {
        console.log("componentDidMount::Main")
        sortAssociation(this.props.iD).then(res => {
            this.setState({
                association: res.data,
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
                {this.state.inLonding === true ? <Londing /> : <Association association={this.state.association} fPage={this.props.fPage} iD={this.props.iD} />}
            </>
        )
    }
}



export default MainAssociation;