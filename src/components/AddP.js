import React, { Component } from 'react'
import '../App.css';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';


export class AddP extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cin:"",
            name:"",
            gender:"",
            
             isLoading: false, // variable pour l'animation du button 
             modal: false,
        }
        this.toggle = this.toggle.bind(this); // close modal after adding new client
    }
    toggle() {
        // clear state 
        this.setState(prevState => ({
          modal: !prevState.modal,
          cin:"",
        name:"",
        lastname:"",
        tel:"",
        datenaiss:"",
        gender:"",
            
        }))}
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,       
        });}

        classSelect = e => {
  
            var options = document.getElementById("exampleSelect");
            var id= options[options.selectedIndex].id;
            var cl= options[options.selectedIndex].value;
            
            this.setState({
              gender: cl,
            })
           
         
          };


          AddPatient = () => {
            const {cin,name,gender,lastname,tel,datenaiss} = this.state;
            this.setState({ isLoading: true})
            setTimeout(() => {
              this.setState(prevState => ({
                modal: !prevState.modal,
                isLoading: false,
              }));
            }, 1200)
            axios
            .post("/addPatient",{
                cin:cin,
                name:name,
                lastname:lastname,
                tel:tel,
                datenaiss:datenaiss,
                gender:gender
            })
            .then(res => axios.get("/Patients"), )
          .catch(err => alert(err));
        }
        
    
    render() {
        return (
            <div>
              <Button className="homeButton"  onClick={this.toggle}>Ajouter patient</Button>{' '}
                
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Ajouter un patient</ModalHeader>
          <ModalBody>
          <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Cin</Label>
         <Col sm={10}>
           <Input  className="inputItems" type="text" name="cin" onChange={this.onChange} />
         </Col>
       </FormGroup> 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Nom</Label>
         <Col sm={10}>
           <Input  className="inputItems" type="text" name="name" onChange={this.onChange} />
         </Col>
       </FormGroup> 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Prénom</Label>
         <Col sm={10}>
           <Input  className="inputItems" type="text" name="lastname" onChange={this.onChange} />
         </Col>
       </FormGroup> 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Date de naissance</Label>
         <Col sm={10}>
           <Input  className="inputItems" type="date" name="datenaiss" onChange={this.onChange} />
         </Col>
       </FormGroup> 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Telephoen</Label>
         <Col sm={10}>
           <Input  className="inputItems" type="text" name="tel" onChange={this.onChange} />
         </Col>
       </FormGroup> 

       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Genre</Label>
                <Col sm={10}>
<Input type="select" name="select5" id="exampleSelect" onChange={()=>{this.classSelect();}}>{"  "}
        <option hidden selected>Genre</option>
        <option value="homme">Homme</option>
        <option value="femme">Femme</option>
</Input>
</Col>
       </FormGroup>  

         
         
          
                </ModalBody>
                <ModalFooter>
                    
    <Button 
          disabled={this.state.isLoading} color="primary" 
          onClick= {this.AddPatient}>
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

export default AddP

