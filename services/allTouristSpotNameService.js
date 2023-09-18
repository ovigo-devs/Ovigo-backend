const AllTouristSpotName = require("../models/AllTouristSpotName");



exports.postAllTouristSpotNameService = async (data) => {
    const AllTouristSpot = await AllTouristSpotName.create(data);
    return AllTouristSpot;
}

exports.getAllTouristSpotNameService = async () => {
    const AllTouristSpot = await AllTouristSpotName.find({});
    return AllTouristSpot;
}