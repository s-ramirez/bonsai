/**
 * Allow any authenticated user.
 */

module.exports = function(req, res, next) {
  // User is allowed, proceed to controller
  if (req.isAuthenticated()) {
    return next();
  }
  // User is not allowed
  else {
    return res.redirect('/login');
  }
};
