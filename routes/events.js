import express from "express";
import {
  getEvents,
  createEvent,
  deleteEvent,
  updateEvent,
} from "../controllers/events.js";
import { getVenues } from "../controllers/venues.js";

const router = express.Router();

router.get("/venues/:id", getVenues);
router.get("/", getEvents);
router.post("/", createEvent);
router.delete("/:id", deleteEvent);
router.post("/:id", updateEvent);

export default router;
