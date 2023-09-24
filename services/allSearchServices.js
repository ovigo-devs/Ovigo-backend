const AllPlaces = require("../models/AllPlaces");
const AllTouristSpotName = require("../models/AllTouristSpotName");


exports.getAllSuggetionsStaysService = async (searchData) => {
    const allStay = await AllPlaces.find({ place_name: searchData });
    return allStay;
}


exports.getAllDestinationService = async () => {
    const allStay = await AllPlaces.find({  });
    return allStay;
}

exports.getAllPlaceNameService = async (searchData) => {
    const allStay = await AllTouristSpotName.find({ spot_name: searchData });
    return allStay;
}