const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganisationSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	mailadress: {
		type: String,
		required: false,
	},
	adminName: {
		type: String,
		required: true,
	},
}, { collection: 'organisations' });


module.exports = mongoose.model('Organisation', OrganisationSchema);

