import express from "express";
import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent,
} from "../controllers/event.js";
//import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/",createEvent);

//UPDATE
router.put("/:id",updateEvent);
//DELETE
router.delete("/:id",deleteEvent);
//GET

router.get("/find/:id", getEvent);
//GET ALL

router.get("/", getEvents);

//router.get("/countByCity", countByCity);
//router.get("/countByType", countByType);
//router.get("/room/:id", getHotelRooms);

export default router;
