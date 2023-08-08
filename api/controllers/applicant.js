import Applicant from "../models/Applicants.js";
import Event from "../models/Event.js";
import Room from "../models/Room.js";

import { createError } from "../utils/error.js";

/*
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
      $push:{rooms: savedRoom._id},
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};
*/

export const updateRoomAvailability2 = async (req, res, next) => {
  const eventId = req.params.eventId;
  const newApp = new Applicant(req.body);
  try {
  const savedApp = await newApp.save();
  try{
    await Event.findByIdAndUpdate(eventId,{
        $push: {app:savedApp},
      });}
      catch(err){
      next(err);
      }
  
  res.status(200).json(savedApp);
  }catch(err){
  next(err);
  }
};


export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};


export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Applicant.findByIdAndDelete(req.params.id);
    try {
      await Event.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err){
  next(err);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Applicant.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

/*
export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
        "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};

export const apply = async (req,res,next)=>{
  try{
  const newUser = new User({
  email: req.body.email,
  mobile:req.body.mobile,
  name:req.body.name,
  })

  await newUser.save()
  res.status(200).send("User has been created.")
  }catch(err){
  next(err)
  }
}

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err){
  next(err);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
*/