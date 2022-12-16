import AlarmClockModel from '../../models/alarmClockModel.js'

class ApiEventController {
  static getAllEvent = async(req, res) =>{
    try {
      const result = await AlarmClockModel.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }
}

export default ApiEventController