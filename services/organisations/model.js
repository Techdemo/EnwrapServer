const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganisationsSchema = new Schema({
	name: {
		type: String,
		required: true
	}
});

mongoose.model('Organistions', OrganisationsSchema);
