module.exports = (req, res, next) => {
  res.header('Content-Range', 'bookings 0-20/30');
  next();
};
