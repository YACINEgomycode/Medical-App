import React, { Component } from 'react'
import '../App.css';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';


export class Addrdv extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cinR:"",
            NumR:"",
            dateR:"",
            a:"",
            
             isLoading: false, // variable pour l'animation du button 
             modal: false,
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

        AddRdv = () => {
          const {cinR,dateR,NumR} = this.state;
          this.setState({ isLoading: true})
          setTimeout(() => {
            this.setState(prevState => ({
              modal: !prevState.modal,
              isLoading: false,
            }));
          }, 1200)
          axios
          .post("/addRdv",{
              cinR:cinR,
              NumR:NumR,
              dateR:dateR,
            
          })
          .then(res => axios.get("/rdv"), )
        .catch(err => alert(err));
      }
      AddPatient = () => {
        const {cinR} = this.state;
        axios
        .post("/addPatient",{
            cin:cinR,
        })
        .then(res => axios.get("/Patients"), )
      .catch(err => alert(err));
    }
        
    
    render() {
        return (
            <div>
              <Button className="homeButton"  onClick={this.toggle}>Ajouter Rendez-vous</Button>{' '}
                
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Ajouter un rendez vous</ModalHeader>
          <ModalBody>
         
          <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Cin</Label>
         <Col sm={10}>
           <Input  className="inputItems" type="text" name="cinR" onChange={this.onChange} />
         </Col>
       </FormGroup> 

          <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Date rendez vous</Label>
         <Col sm={10}>
           <Input  className="inputItems" type="date" name="dateR" onChange={this.onChange} />
         </Col>
       </FormGroup> 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>NumR</Label>
         <Col sm={10}>
           <Input  className="inputItems" type="number" name="NumR" onChange={this.onChange} />
         </Col>
       </FormGroup> 

       

         
         
          
                </ModalBody>
                <ModalFooter>
                    
    <Button 
          disabled={this.state.isLoading} color="primary" 
          onClick= {()=>{this.AddRdv();this.AddPatient()}}       >
        { !this.state.isLoading &&  <span>Add</span>}
        { this.state.isLoading &&  <span><i class="fas fa-circle-notch fa-spin"></i> </span>}
    
    </Button>
    
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        
                </Modal>
               
            </div>
        )
    }
}

export default Addrdv

