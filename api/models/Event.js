import mongoose from "mongoose";
const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  /*
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },*/
  /*
  rooms: {
    type: [String],
  },*/
  featured: {
    type: Boolean,
    default: false,
  },
  app:[{name:String,email:String,address:String,github:String,number:String}]
  
},
{ timestamps: true }
);

export default mongoose.model("Event", EventSchema)