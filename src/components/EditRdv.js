import React, { Component } from 'react'
import '../App.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';


export class EditRdv extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         
            
             isLoading: false, // variable pour l'animation du button 
             modal: false,
             cinR:"",
             NumR:"",
             dateR:"",
             a:[]
        }
        this.toggle = this.toggle.bind(this); // close modal after adding new client
    }
    toggle() {
        // clear state 
        this.setState(prevState => ({
          modal: !prevState.modal,
          cinR:"",
        NumR:"",
        dateR:"",
        
            
        }))}
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,       
        });}

        componentDidMount(){
            this.getdata();
        }
      
        getdata(){
            axios.get("/onerdv/"+this.props.id ).then(res => this.setState({
                a:res.data
          }))}

          onEditPress = () => {
 
            axios.put("/updateRdv/"+this.props.id,{
            
              dateR:this.state.dateR,
            
            }).then(res => axios.get("/rdv"), )
            .catch(err => alert(err));
            this.setState({ isLoading: true})
            setTimeout(() => {
              this.setState(prevState => ({
                modal: !prevState.modal,
                isLoading: false,
              }));
            }, 1200)
            }
            
             
          
    
    render() {
        return (
            <div>
              <Button className="homeButton"  onClick={this.toggle}>modifier rdv</Button>{' '}
                
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modification du rendez vous numéro <h4>{this.state.a.NumR}</h4> </ModalHeader>
          <ModalBody>
         

         <FormGroup row> 
               <Label for="exampleEmail" sm={2}>Ancienne Date</Label>
        <Col sm={10}>
          <Input  className="inputItems" type="date" name="dateR" value={this.state.a.dateR} onChange={this.onChange} />
        </Col>
      </FormGroup> 
      <FormGroup row> 
               <Label for="exampleEmail" sm={2}>Nouvelle Date</Label>
        <Col sm={10}>
          <Input  className="inputItems" type="date" name="dateR"  onChange={this.onChange} />
        </Col>
      </FormGroup> 

      

        
        
         
               </ModalBody>
                <ModalFooter>
                    <Link to="/">
    <Button 
          disabled={this.state.isLoading} color="primary" 
          onClick= {this.onEditPress}>
        { !this.state.isLoading &&  <span>Add</span>}
        { this.state.isLoading &&  <span><i class="fas fa-circle-notch fa-spin"></i> </span>}
    
    </Button>
    </Link>
    
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        
                </Modal>
               
            </div>
        )
    }
}

export default EditRdv

