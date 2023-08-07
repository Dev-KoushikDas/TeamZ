import mongoose from "mongoose";
const ApplicantSchema = new mongoose.Schema({
  name: {
  type: String,
  required: true,
  },
  email:{
  type:String,
  required: true,
  },
  address: {
  type: String,
  required: true,
  },
  github: {
  type: String,
  required: false,
  },
  number: {
  type: String,
  required: true,
  },
  event:{
  type:String,
  required:true
  }
},
{timestamps: true}
);

export default mongoose.model("Applicant", ApplicantSchema)