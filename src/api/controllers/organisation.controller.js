const Organisation = require('../models/Organisation');

exports.list = async (req, res, next) => {
  Organisation.find()
  .then((organisations) => {
    res.status(200).json({
      resolved: "success",
      data: {
          organisations: organisations,
      },
    });
  })
  .catch((err) => {
    res.status(500).json({
      resolved: "failure",
      message: "Some error occurred while retrieving Organisations.",
      error: err,
    });
  })
}

exports.create = async (req, res, next) => {
  if(!req.body.organisation){
    res.status(400).json({
      resolved: "failure",
      message: 'req.body.organisation can not be empty',
    });
  return;
  }

  const organisation = new Organisation({
    name: req.body.organisation.name, //String.  Required.. Selected.
    mailadress: req.body.organisation.mailadress, //String.  Not Required. Selected.
    adminName: req.body.organisation.adminName, //String.  Required.. Selected.
  })

  organisation.save()
  .then((organisation) => {
    res.status(201).json({
      resolved: "success",
      data: {
        organisation: organisation,
      }
    });
  })
  .catch((err) => {
    res.status(500).json({
      resolved: "failure",
      message: "some error occured while posting a new organisation",
      error: err,
    })
  })
}