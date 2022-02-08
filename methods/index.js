const { profileSchema } = require("../schema/profile");
const moment = require("moment");

profileSchema.virtual("fullName").get(function () {
	return this.fname + " " + this.lname;
});

profileSchema.methods.getIfBday = function () {
	const x = this.dob.toString();
	const z = x.substr(5, 9);
	const y = moment().format("YYYY-MM-DD").toString().substr(5, 9);
	console.log(z);
	return z == y;
};
