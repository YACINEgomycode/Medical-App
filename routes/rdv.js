const express = require("express");

const {MongoClient, ObjectID} = require('mongodb')

const router = express.Router();
const Rdv = require("../models/Rdv");






router.get("/rdv", (req, res) => {
  Rdv.find().then(rdv => res.send(rdv))
});
router.get('/onerdv/:id', (req, res) => {
  let rdvId = ObjectID(req.params.id)
  Rdv.findOne({_id : rdvId}, (err, data)=>{
      if (err) res.send('can not get edv')
      else (res.send(data))
  })
})




router.post("/addRdv", (req, res) => {
    const cinR = req.body.cinR;
    const NumR = req.body.NumR;
    const dateR = req.body.dateR;
   
 
      const newRdv = new Rdv({
        cinR:  cinR,
        NumR: NumR,
        dateR:dateR,
        
      });
  
     
          newRdv
            .save((err,) => {
                if (err) {
                    return (err);
                }
        
                res.status(200).send("Rdv inserée");
            });
    
 
  });


  router.put('/updateRdv/:id', (req, res) => {
    let rdvId = ObjectID(req.params.id)
    let updatedrdv = req.body

    Rdv.updateOne({_id : rdvId},{$set : { ...updatedrdv}}, (err, data)=>{
        if (err) console.log(err)
        else (res.send(data))
    })
    
})

  







module.exports = router;