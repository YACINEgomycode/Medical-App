import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import AddP from './AddP'
import '../App.css'
import Addrdv from './Addrdv'
import ShowAll from './ShowAll'
import home from './home'
import PHomme from './PHomme'
import PFemme from './PFemme'
import ShowRdv from './ShowRdv'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={home} />
                <Route exact path="/ShowAll" component={ShowAll} />
                <Route exact path="/ShowRdv" component={ShowRdv} />
                <Route exact path="/homme" component={PHomme} />
                <Route exact path="/femme" component={PFemme} />

                
            </div>
        )
    }
}
