const AllTouristSpotName = require("../models/AllTouristSpotName");



exports.postAllTouristSpotNameService = async (data) => {
    const AllTouristSpot = await AllTouristSpotName.create(data);
    return AllTouristSpot;
}

exports.getAllTouristSpotNameService = async (query) => {

    // const searchResult = await AllTouristSpotName.find(query);
    // return searchResult;



    const AllTouristSpot = await AllTouristSpotName.find({});
    return AllTouristSpot;



    // const uniqueData = [];
    // const seen = new Set();

    // for (const item of AllTouristSpot) {
    //     if (!seen.has(item['primary_place_name'])) {
    //         uniqueData.push(item);
    //         seen.add(item['primary_place_name']);
    //     }
    // }

    // return uniqueData;
}


exports.gettAllTouristPlaceNameBusinessHotelAddService = async (division, district, sub_district) => {
    const AllTouristSpot = await AllTouristSpotName.find({division: division, district: district, sub_district: sub_district});
    return AllTouristSpot;
}

exports.gettAllTouristSpotNameBusinessHotelAddService = async (place_name) => {
    const AllTouristSpot = await AllTouristSpotName.find({primary_place_name: place_name});
    return AllTouristSpot;
}





















// const data = [
//     // Your data objects here
//   ];
  
//   // Function to remove duplicates based on a specific field
//   function removeDuplicates(data, field) {
//     const uniqueData = [];
//     const seen = new Set();
  
//     for (const item of data) {
//       if (!seen.has(item[field])) {
//         uniqueData.push(item);
//         seen.add(item[field]);
//       }
//     }
  
//     return uniqueData;
//   }