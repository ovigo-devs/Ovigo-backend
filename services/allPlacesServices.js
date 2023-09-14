const AllPlaces = require("../models/AllPlaces");


exports.postAllPlacesService = async (data) => {
    const allPlaces = await AllPlaces.create(data);
    return allPlaces;
}

exports.getAllPlacesService = async () => {
    const allPlaces = await AllPlaces.find({});
    return allPlaces;
}

exports.getOnePlacesService = async (id) => {
    const allPlaces = await AllPlaces.findOne({_id: id});
    return allPlaces;
}