
class ViewRootController {
  static viewRoot = async(req, res) =>{
    try {
      
      res.render('viewHome',{
        title: "Home"
      });
    } catch (error) {
      console.log(error)
    }
  }
}

export default ViewRootController

