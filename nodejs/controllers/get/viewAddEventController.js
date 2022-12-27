
class ViewAddEventController {
  static viewAddEvent = async(req, res) =>{
    try {
      
      res.render('viewAddEvent',{
        title: "viewAddEvent"
      });
    } catch (error) {
      console.log(error)
    }
  }
}

export default ViewAddEventController

