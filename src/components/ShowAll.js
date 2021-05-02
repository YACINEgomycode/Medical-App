import React, { Component } from 'react'
import '../App.css';
import axios from 'axios';
import {Table } from 'reactstrap';
import { Button } from 'reactstrap'; 
import {Link} from 'react-router-dom'


export class ShowAll extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            patients:[],
            nbr:0
                }
      
    }

    onPressDelete= (id)=> {
        axios
        .delete("/DelPatient/" +id)
        .then(res => {  //
                    this.setState({
            patients: this.state.patients.filter(el => el._id !== id)
          })
        })
        .catch(err =>console.log("err", err))     
        }   
        
    componentDidMount() {
        axios
        .get("/patients")
        .then(res => this.setState({
            patients : res.data,
      
        }))
        .catch(err =>console.log("err", err))     
    }
        
    
    render() {
        return (
            <div className="show">
                <h1 className='liste'>Liste des Patients</h1>
                <div>
                    <div className='femmehommebtns'>
                <Link to="/homme"><Button className="homeButton">Patients Hommes</Button></Link>
                <Link to="/femme"><Button className="homeButton">Patients Fermmes</Button></Link></div>
                <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>CIN</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Date de naissance</th>
          <th>Telephone</th>
          <th>Genre</th>
          <th>Supprimer</th>
        </tr></thead>
                {this.state.patients.map((el,i)=>{return(
      
      <tbody>
        <tr>
          <th scope="row" >{i}</th>
          <td>{el.cin}</td>
                <td>{el.name}</td>
                <td>{el.lastname}</td>
                <td>{el.datenaiss}</td>
                <td>{el.tel}</td>
                <td>{el.gender}</td>
                <td><Button className="homeButton" id={el.id}  onClick={()=>{ if (window.confirm('veuillez confirmer la suppression')) this.onPressDelete(el._id)} }>Supprimer</Button></td>
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

export default ShowAll

