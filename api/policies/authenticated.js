/**
 * Allow any authenticated user.
 */

 module.exports = function(req, res, next) {
   var token;

   if (req.headers && req.headers.authorization) {
     token = req.headers.authorization;
   }
   tokenAuth.verifyToken(token, function(err, token) {
     if (err) return res.json(401, {err: 'The token is not valid'});

     req.token = token;
     next();
   });
 };
