const AllPlaces = require("../models/AllPlaces");
const AllTouristSpotName = require("../models/AllTouristSpotName");


exports.getAllSuggetionsStaysService = async (searchData) => {
    const suggestStay = await AllPlaces.find({ place_name: searchData });
    return suggestStay;
}


exports.getAllDestinationService = async () => {
    const allDestinatioType = await AllPlaces.find({  });
    return allDestinatioType;
}

exports.getAllPlaceNameService = async (searchData) => {
    const allPlaceName = await AllTouristSpotName.find({ spot_name: searchData });
    return allPlaceName;
}

exports.getAllPlaceNameSearchService = async (query) => {
    const allPlaceSearch = await AllPlaces.find(query);
    return allPlaceSearch;
}