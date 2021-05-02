import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AddP from './AddP';
import Addrdv from './Addrdv';
import ShowAll from './ShowAll';
import '../App.css';
import { Button } from 'reactstrap'; 
export default class home extends Component {
    render() {
        return (
            <div className="App">
                  <div className="homeMenu">
                  <h1 className="title">Medical</h1>
                  <h1 className="title1">App</h1>
                  <div className="buttons">
                <AddP/>
                  <Addrdv/>
                  <Link to="/ShowAll"><Button className="homeButton">Afficher patients</Button></Link>
                  <Link to="/ShowRdv"><Button className="homeButton">Afficher rdv</Button></Link>
                  
                  </div>
                  
                  </div>
                
            </div>
        )
    }
}
