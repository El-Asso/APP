import React, { Component } from 'react';
import { Dimensions, } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../utils/animations';

import BookCard from '../cards/BookCard';
import EventCard from '../cards/EventCard';
const SLIDER_WIDTH = Dimensions.get('window').width;

class BookCarousel extends Component {

    constructor(state) {
        super(state);
        this.state = {
            index: {}
        }
        this._renderItem = this._renderItem.bind(this)
        this._renderItems = this._renderItems.bind(this)
    }

    _renderItem(item) {
        console.log("Carousel::object", item)
        this.props.scrollmap(item)
    }

    _renderItems({ item }) {
        return (<BookCard association={item} action={this.props.action} />);
    }
    componentDidMount() {
        console.log("componentDidMount:Carousel", true)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate:Carousel", true)
        console.log("componentDidUpdate:onSnapToItem", this.state.index)
    }

    render() {
        console.log('Carousel#render this.props.associations', this.props.associations);
        return (
            <Carousel
                ref={(c) => this.carousel = c}
                data={(this.props.associations.length > 0 ? this.props.associations : [])}
                renderItem={this._renderItems}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={SLIDER_WIDTH}
                inactiveSlideShift={0}
                onSnapToItem={(object) => this._renderItem(object)}
                scrollInterpolator={scrollInterpolator}
                slideInterpolatedStyle={animatedStyles}
                useScrollView={true}
            />
        );
    }
}

class EventsCarousel extends Component {

    constructor(state) {
        super(state);
        this.state = {
            index: {},
            events:[{
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
        }
        this._renderItem = this._renderItem.bind(this)
        this._renderItems = this._renderItems.bind(this)
    }

    _renderItem(item) {
        console.log("Carousel::object", item)
        // this.props.scrollmap(item)
    }

    _renderItems({ item }) {
        return (<EventCard events={item}/>);
    }
    componentDidMount() {
        console.log("componentDidMount:Carousel", true)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate:Carousel", true)
        console.log("componentDidUpdate:onSnapToItem", this.state.index)
    }

    render() {
        return (
            <Carousel
                ref={(c) => this.carousel = c}
                data={this.state.events}
                renderItem={this._renderItems}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={SLIDER_WIDTH}
                inactiveSlideShift={0}
                onSnapToItem={(object) => this._renderItem(object)}
                scrollInterpolator={scrollInterpolator}
                slideInterpolatedStyle={animatedStyles}
                useScrollView={true}
            />
        );
    }
}

export {BookCarousel, EventsCarousel};



