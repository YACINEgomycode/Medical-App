import React, { Component } from 'react'
import axios from 'axios';
import {Table } from 'reactstrap';
import { Button,Progress } from 'reactstrap'; 
import {Link} from 'react-router-dom'

export default class PHomme extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hommes:[],
             nbrhomme:0,
             nbrtotal:0
        }
    }

    onPressDelete= (id)=> {
        axios
        .delete("/DelPatient/" +id)
        .then(res => {  //
                    this.setState({
            hommes: this.state.hommes.filter(el => el._id !== id)
          })
        })
        .catch(err =>console.log("err", err))     
        }   

    componentDidMount() {
        axios
        .get("/patients")
        .then(res => this.setState({
            nbrtotal:Object.keys(res.data).length, //nbr des patients 
            hommes : res.data.filter((e)=>e.gender=='homme')   , //importer les patients hommes 
            nbrhomme:Object.keys(res.data.filter((e)=>e.gender=='homme')).length //nbr des patients hommes
        }))
        .catch(err =>console.log("err", err))     

        
    }
    
    
    render() {
        return (
            <div className="show">
            <h1 className='liste'>Liste des Hommes</h1>
            <div>
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
            {this.state.hommes.map((el,i)=>{return(
  
  <tbody>
    <tr>
      <th scope="row" >{i}</th>
      <td>{el.cin}</td>
      <td>{el.name}</td>
                <td>{el.lastname}</td>
                <td>{el.datenaiss}</td>
                <td>{el.tel}</td>
                <td>{el.gender}</td>
                <td><Button className="homeButton" id={el.id}  onClick={()=>{ if (window.confirm('Are you sure you wish to delete this item?')) this.onPressDelete(el._id)} }>Supprimer</Button></td>
    </tr>
  </tbody>
)})}</Table>
        </div>
        <div className='bas'>
            
        <div className="text-center"><h4>{(this.state.nbrhomme/this.state.nbrtotal)*100} % de patients sont des hommes</h4></div>
       <div className='prog'>
        <Progress multi>
               <Progress bar color="danger" value={(this.state.nbrhomme/this.state.nbrtotal)*100} >
                        {parseInt((this.state.nbrhomme/this.state.nbrtotal)*100)} 
               </Progress>
               <Progress bar color="warning" value={((this.state.nbrtotal-this.state.nbrhomme)/this.state.nbrtotal)*100} >
                          {parseInt(((this.state.nbrtotal-this.state.nbrhomme)/this.state.nbrtotal)*100)}
               </Progress>
        </Progress></div>
        </div>
        <div className="retour">
        <Link to="/"><Button className="homeButton">Page d'acceuil</Button></Link>
        <Link to="/femme"><Button className="homeButton">Patients Fermmes</Button></Link>

        </div>
        
            
     
           
        </div>
        )
    }
}
