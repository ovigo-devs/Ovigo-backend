
const AllStays = require("../models/AllStays");


exports.postAllStaysService = async (data) => {
    const allStay = await AllStays.create(data);
    return allStay;
}


exports.getAllStaysService = async (place_name) => {
    const allStay = await AllStays.find({ place_name: place_name, status: "Approve" }).sort([['special_partner', -1], ['partner', -1]]);
    return allStay;
}

exports.getOneStaysService = async (id) => {
    const allStay = await AllStays.findOne({ _id: id });
    return allStay;
}
