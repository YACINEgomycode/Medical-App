const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const RdvSchema = new Schema({
 
  
    cinR: {
        type: String,
        
      },
      
      NumR: {
        type: String,
       
      },
      dateR: {
        type: String,
       
      },
     
  
});

module.exports = Rdv = mongoose.model("rdvs", RdvSchema);