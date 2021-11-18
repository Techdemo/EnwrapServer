const helpers = require('./helpers');

module.exports = {
	async getAll(req, res) {
		try {
      const organisations = await helpers.getAll({});

      return res.send({
        status: 'success',
        body: organisations && organisations.length ? organisations : []
      });
    } catch (error) {
      return res.status(400).send({
        status: 'failure'
      });
    }
  },
  async addNew(req, res) {
    try {
      await helpers.addNew(req.body);

      return res.send({
        status: 'success'
      });
    } catch (error) {
      return res.status(400).send({
        status: 'failure'
      });
    }
  }
};
