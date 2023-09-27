
const AllStays = require("../models/AllStays");


exports.postAllStaysService = async (data) => {
    const allStay = await AllStays.create(data);
    return allStay;
}


exports.getAllStaysService = async (place_name, stay_type) => {
    // const allStay = await AllStays.find({ place_name: place_name, status: "Approve" }).sort([['special_partner', -1], ['partner', -1]]);
    const allStay = await AllStays.find({ place_name: place_name, stay_type:stay_type }).sort([['special_partner', -1], ['partner', -1]]);
    return allStay;
}

exports.getAllStaysShowService = async () => {
    // const allStay = await AllStays.find({ status: "Approve" }).sort([['special_partner', -1], ['partner', -1]]);
    const allStay = await AllStays.find({ }).sort([['special_partner', -1], ['partner', -1]]);
    return allStay;
}

exports.getOneStaysService = async (id) => {
    const allStay = await AllStays.findOne({ _id: id });
    return allStay;
}

exports.getPlaceDetailsPageAllStaysService = async (place_name, stay_type) => {
    // const allStay = await AllStays.find({ place_name: place_name, stay_type: stay_type, status: "Approve" }).sort([['special_partner', -1], ['partner', -1]]);
    const allStay = await AllStays.find({ place_name: place_name, stay_type: stay_type }).sort([['special_partner', -1], ['partner', -1]]);
    return allStay;
}
