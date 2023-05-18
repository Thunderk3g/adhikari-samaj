const Member = require('../models/members.model');
exports.addMember = async function (req, res) {
    const member = await new Member({
        memberName: req.body.memberName,
        membershipNo: req.body.membershipNo,
        fatherName: req.body.fatherName,
        motherName: req.body.fatherName,
        memberType: req.body.memberType,
        relType: req.body.relType,
        contactnum: req.body.contactnum,
        vdc: req.body.vdc,
        status: req.body.status,
        IsActive: req.body.IsActive
    })
    member.save(err => {
        if (err) {
            res.status(500).send({ message: err });
        }
        res.status(200).send({ message: "Member was registered successfully!" });
    });
}
exports.getMember = async function (req, res) {
    try {
        const members = await Member.find();

        if (members.length === 0) {
            return res.status(404).send({ message: "No members exist" });
        }

        res.send(members);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteMember = async function (req, res) {
    const data = await Member.findOneAndDelete({ memberName: req.body.memberName }, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        if (!user) {
            res.status(401).send({ message: "Member does not exist" });
        }
        res.status(200).send({ message: "Member has been Removed" });
    })
}