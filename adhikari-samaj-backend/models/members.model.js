const mongoose = require("mongoose");

const Member = mongoose.model(
    "Member",
    new mongoose.Schema({
        memberName: String,
        membershipNo: String,
        fatherName: String,
        motherName: String,
        memberType: String,
        relType: String,
        contactnum: String,
        vdc: String,
        status: String,
        IsActive: String,
    })
);

module.exports = Member;