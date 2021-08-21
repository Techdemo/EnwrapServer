module.exports = function (app){
  app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
      resolved: "succes",
      data: {
        health: "Api in good health",
        alive: true,
      }
    })
  })
}