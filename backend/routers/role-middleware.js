module.exports = function (requiredRole) {
  return function(req, res, next) {
    let hasRight = req.user.roles && req.user.roles.some(role => role === requiredRole);

    if (!hasRight)
      return res.sendStatus(403);

    next()
  }
};
