var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var SaturdaySchema = new Schema({
    day1: {
        hour_1: String,
        hour_2: String,
        hour_3: String,
        hour_4: String,
        hour_5: String,
        hour_6: String,
        hour_7: String,
        hour_8: String,
        hour_9: String,
        hour_10: String,
        hour_11: String,
        hour_12: String
    },
    day2: {
        hour_1: String,
        hour_2: String,
        hour_3: String,
        hour_4: String,
        hour_5: String,
        hour_6: String,
        hour_7: String,
        hour_8: String,
        hour_9: String,
        hour_10: String,
        hour_11: String,
        hour_12: String
    }

});

Saturday.Schema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Saturday", SaturdaySchema);