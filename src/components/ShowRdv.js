import React, { Component } from 'react'
import '../App.css';
import axios from 'axios';
import {Table } from 'reactstrap';
import { Button } from 'reactstrap'; 
import {Link} from 'react-router-dom'
import EditRdv from './EditRdv';


export class ShowRdv extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            rdvs:[],
            nbr:0
                }
      
    }

    componentDidMount() {
        axios
        .get("/rdv")
        .then(res => this.setState({
            rdvs : res.data,
        }))
        .catch(err =>console.log("err", err))     
    }
        
    
    render() {
        return (
            <div className="show">
                <h1 className='liste'>Liste des rendez vous</h1>
                <div>
                    
                <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>CIN</th>
          <th>Numero rdv</th>
          <th>Date rdv</th>
          <th>modifier</th>
        </tr></thead>
                {this.state.rdvs.map((el,i)=>{return(
      
      <tbody>
        <tr>
          <th scope="row" >{i}</th>
          <td>{el.cinR}</td>
                <td>{el.NumR}</td>
                <td>{el.dateR}</td>
                <td><EditRdv id={el._id}/></td>
                
        </tr>
      </tbody>
    )})}</Table>
            </div>
            <div className="retour">
            <Link to="/"><Button className="homeButton">Page d'acceuil</Button></Link>

            </div>
            
                
         
               
            </div>
        )
    }
}

export default ShowRdv

