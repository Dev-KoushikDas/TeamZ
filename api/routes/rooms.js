import express from "express";
import { deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability2 } from "../controllers/applicant.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
//router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
//router.put("/availability/:id", updateRoomAvailabilit);

router.post("/app/:eventid",updateRoomAvailability2);

router.put("/:id", verifyAdmin, updateRoom);

//DELETE
//router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
router.delete("/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router;
