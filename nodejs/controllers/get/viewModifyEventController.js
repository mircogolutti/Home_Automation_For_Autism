import AlarmClockModel from '../../models/alarmClockModel.js'

class ViewModifyEventController {
  static viewModifyEvent = async(req, res) =>{
    try {
      const id_event = req.query.id;

      const result = await AlarmClockModel.findOne({_id: id_event});
 
      res.render('viewModifyEvent',{
        title: "Modify Event",
        event: result
      });
      
    } catch (error) {
      console.log(error)
    }
  }
}

export default ViewModifyEventController