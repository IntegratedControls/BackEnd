const Controller = require('../../lib/controller');
const checkoutModel  = require('./checkout-facade');
// if (process.env.NODE_ENV === 'production') {
//   const serverUrl = 'http://ourhandsandfeetbackend.herokuapp.com';
// }else{
//   const serverUrl = "http://localhost:7000";
// }

class CheckoutController extends Controller {
  // findByTitle(req, res, next) {
  //   let bar = this.model;
  //   let result =  this.model.find({
  //     'title' : req.params.title
  //   })
  //   .then(doc => {
  //     if (!doc) {
  //       return res.status(404).end();
  //     }
  //     return res.status(200).json(doc);
  //   })
  //   .catch(err => next(err));
  //
  //   return result;
  // }
}

module.exports = new CheckoutController(checkoutModel);
