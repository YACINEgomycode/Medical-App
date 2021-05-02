const express = require("express");

const app = express();
const cors = require("cors");


// Body & Header Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());




// Connexion BD
require("./config/db")();

// API Route
app.use(require("./routes/patient"));
app.use(require("./routes/rdv"));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
