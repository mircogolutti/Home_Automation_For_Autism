import AlarmClockModel from '../../models/alarmClockModel.js'

class viewAllEventsController {
  static viewAllEvents = async(req, res) =>{
    try {
      const result = await AlarmClockModel.find()

      res.render('viewAllEvents',{
        title: "View All Events",
        allEvents: result
      });
    } catch (error) {
      console.log(error)
    }
  }
}

export default viewAllEventsController