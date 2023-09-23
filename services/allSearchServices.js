const AllPlaces = require("../models/AllPlaces");


exports.getAllSuggetionsStaysService = async (searchData) => {
    const allStay = await AllPlaces.find({ place_name: searchData });
    return allStay;
}


exports.getAllDestinationService = async () => {
    const allStay = await AllPlaces.find({  });
    return allStay;
}