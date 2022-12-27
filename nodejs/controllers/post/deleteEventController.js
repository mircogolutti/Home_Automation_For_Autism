import express from 'express';
import AlarmClockModel from '../../models/alarmClockModel.js'


const root = express.Router();

class DeleteEventController {
  static deleteEvent = async (req, res) => {
    try {

      let event = req.body;
      
      AlarmClockModel.deleteOne({ _id: event._id })
        .then(item => {
          res.redirect('/viewAllEvents');
        })
        .catch(err => {
          console.log(`Save DB : ${err}`);
          res.status(400).send("Unable to delete to database");
        });

      
    } catch (error) {
      console.log(error)
    }
  }
}

export default DeleteEventController