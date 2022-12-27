import AlarmClockModel from '../../models/alarmClockModel.js'

class ViewCalendarController {
  static viewCalendar = async(req, res) =>{
    try {
      const result = await AlarmClockModel.find().sort ( { time_start_alarm: 1 } )

      res.render('viewCalendar',{
        title: "View Calendar",
        allEvents: result
      });
    } catch (error) {
      console.log(error)
    }
  }
}

export default ViewCalendarController