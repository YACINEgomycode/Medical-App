const express = require("express");

const {MongoClient, ObjectID} = require('mongodb')

const router = express.Router();
const Patient = require("../models/Patient");



router.get("/patients", (req, res) => {
  Patient.find().then(patient => res.send(patient))
});


router.get('/patient/:id', (req, res) => {
  let patientId = ObjectID(req.params.id)
  Patient.findOne({_id : patientId}, (err, data)=>{
      if (err) res.send('can not get this mission')
      else (res.send(data))
  })
})

router.post("/addPatient", (req, res) => {
    const cin = req.body.cin;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const tel = req.body.tel;
    const datenaiss = req.body.datenaiss;
    const gender = req.body.gender;
   
      const newPatient = new Patient({
        cin:  cin,
        name: name,
        lastname:lastname,
        tel: tel,
        datenaiss:datenaiss,
        gender: gender,
        
      });
  
          newPatient
            .save((err,) => {
                if (err) {
                    return (err);
                }
        
                res.status(200).send("patient inserée");
            });
       
      
 
  });

  router.delete('/DelPatient/:id', (req, res) => {
    let patientId = ObjectID(req.params.id)
    let updatedPT = req.body
    Patient.findOneAndDelete({_id : patientId},{$set : { ...updatedPT}}, (err, data)=>{
        if (err) console.log(err)
        else (res.send(data))
    })
  })







module.exports = router;