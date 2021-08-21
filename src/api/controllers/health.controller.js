exports.get = async (req, res, next) => {
  res.status(200).json({
    resolved: "succes",
    data: {
      health: "Api in good health",
      alive: true,
    }
  })
  return next();
}