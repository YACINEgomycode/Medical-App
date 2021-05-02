const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const PatientSchema = new Schema({ 
  
    cin: {
        type: String,
        
      },
      
      name: {
        type: String,
       
      },
      lastname: {
        type: String,
       
      },
      tel: {
        type: String,
       
      },
      datenaiss: {
        type: String,
       
      },
      gender: {
        type: String,
        
      },
     
});

module.exports = Article = mongoose.model("patients", PatientSchema);