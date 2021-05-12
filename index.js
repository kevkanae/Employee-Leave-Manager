const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dotenv = require("dotenv");
dotenv.config();
//-------------------------------------------------------------------------------------

app.use(cors());
app.use(express.json());

//-------------------------------------------------------------------------------------
// User Auth Schema
//-------------------------------------------------------------------------------------

const AccountSchema = new Schema({
  employeeEmail: {
    type: String,
  },
  employeePassword: {
    type: String,
  },
});
const User = mongoose.model("user", AccountSchema);

//-------------------------------------------------------------------------------------
//Employee Leave Schema
//-------------------------------------------------------------------------------------

const LeaveSchema = new Schema({
  leaveType: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});
const Leave = mongoose.model("leave", LeaveSchema);
//-------------------------------------------------------------------------------------

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    mongoose.connection.once("open", () => {
      console.log("MongoDB Connection: ✔");
    })
  );

//-------------------------------------------------------------------------------------
//Add Leave Data
//-------------------------------------------------------------------------------------
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});
app.post("/add", (req, res) => {
  let add = new Leave(req.body);
  add
    .save()
    .then(() => {
      res.status(200).json({ add: "Added Successfully" });
    })
    .catch(() => {
      res.status(400).send("Failed");
    });
});

//-------------------------------------------------------------------------------------
//Authentication
//-------------------------------------------------------------------------------------

app.post("/find", (req, res) => {
  // If Employee Details Exists
  User.countDocuments(req.body).then((count) => {
    console.log(count);
    if (count) {
      res.status(200).json({ code: true });
    } else {
      res.status(200).json({ code: false });
    }
  });
});

//-------------------------------------------------------------------------------------
//Add Email & Password (Optional)
//-------------------------------------------------------------------------------------

app.post("/adduser", (req, res) => {
  let add = new User(req.body);
  add
    .save()
    .then(() => {
      res.status(200).json({ add: "Employee Added Successfully" });
    })
    .catch(() => {
      res.status(400).send("Adding Employee Failed");
    });
});

//-------------------------------------------------------------------------------------
app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running on Port: 5000");
});
//-------------------------------------------------------------------------------------
