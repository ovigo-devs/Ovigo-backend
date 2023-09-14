const Place = require("../models/AllStays");
const AllStays = require("../models/AllStays");


exports.postAllStaysService = async (data) => {
    const allPlaces = await AllStays.create(data);
    return allPlaces;
}


exports.getAllStaysService = async (place_name) => {
    const allPlaces = await AllStays.find({place_name: place_name}).sort([ ['special_partner', -1],['partner', -1] ]);
    return allPlaces;
}

exports.getOneStaysService = async (id) => {
    const allPlaces = await AllStays.findOne({_id: id});
    return allPlaces;
}