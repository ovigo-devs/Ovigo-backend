const AllTouristSpotName = require("../models/AllTouristSpotName");



exports.postAllTouristSpotNameService = async (data) => {
    const AllTouristSpot = await AllTouristSpotName.create(data);
    return AllTouristSpot;
}

exports.getAllTouristSpotNameService = async () => {
    const AllTouristSpot = await AllTouristSpotName.find({});
    return AllTouristSpot;
}


exports.gettAllTouristPlaceNameBusinessHotelAddService = async (division, district, sub_district) => {
    const AllTouristSpot = await AllTouristSpotName.find({division: division, district: district, sub_district: sub_district});
    return AllTouristSpot;
}

exports.gettAllTouristSpotNameBusinessHotelAddService = async (place_name) => {
    const AllTouristSpot = await AllTouristSpotName.find({primary_place_name: place_name});
    return AllTouristSpot;
}
