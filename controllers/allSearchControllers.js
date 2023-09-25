const { getAllSuggetionsStaysService, getAllDestinationService, getAllPlaceNameService, getAllPlaceNameSearchService } = require("../services/allSearchServices");



exports.getSearchSuggetionsStays = async (req, res, next) => {
    try {
        const searchTerm = req.query.term;
        const searchData = { $regex: searchTerm, $options: 'i' }
        const data = await getAllSuggetionsStaysService(searchData);
        if (data) {
            res.status(200).json({
                status: 'Successfully',
                data: data
            })
        } else {
            res.status(400).json({
                status: 'Failled',
                message: "Data Get Failed",
                error: error.message
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Get Failed",
            error: error.message
        })
    }
}


exports.getAllDestinationTypeStays = async (req, res, next) => {
    try {
        const data = await getAllDestinationService();
        if (data) {
            res.status(200).json({
                status: 'Successfully',
                data: data
            })
        } else {
            res.status(400).json({
                status: 'Failled',
                message: "Data Get Failed",
                error: error.message
            })
        }


    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Get Failed",
            error: error.message
        })
    }
}

exports.getSpotNameSearchSuggetionsTouristSpot = async (req, res, next) => {
    try {
        const searchTerm = req.query.term;
        const searchData = { $regex: searchTerm, $options: 'i' }
        const data = await getAllPlaceNameService(searchData);
        if (data) {
            res.status(200).json({
                status: 'Successfully',
                data: data
            })
        } else {
            res.status(400).json({
                status: 'Failled',
                message: "Data Get Failed",
                error: error.message
            })
        }


    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Get Failed",
            error: error.message
        })
    }
}


exports.getPlaceNameSearchSuggetionsDetails = async (req, res, next) => {
    try {
        const { district, division, place_name, activity } = req.body;

        const conditions = {};

        if (district) {
            conditions.district = { $regex: district, $options: 'i' };
        }

        if (division) {
            conditions.division = { $regex: division, $options: 'i' };
        }

        if (place_name) {
            conditions.place_name = { $regex: place_name, $options: 'i' };
        }

        if (activity) {
            conditions.activity = { $regex: activity, $options: 'i' };
        }

        const query = conditions;

        const data = await getAllPlaceNameSearchService(query);
        if (data) {
            res.status(200).json({
                status: 'Successfully',
                data: data
            })
        } else {
            res.status(400).json({
                status: 'Failled',
                message: "Data Get Failed",
                error: error.message
            })
        }


    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Get Failed",
            error: error.message
        })
    }
}



// import React, { useState, useEffect } from 'react';

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     if (searchTerm) {
//       // Fetch suggestions from the backend when the search term changes
//       fetch(`/api/suggestions?term=${searchTerm}`)
//         .then((response) => response.json())
//         .then((data) => setSuggestions(data));
//     } else {
//       // Clear suggestions if the search term is empty
//       setSuggestions([]);
//     }
//   }, [searchTerm]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {suggestions.map((suggestion, index) => (
//           <li key={index}>{suggestion}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Search;




// const { field1="Chattagram", field2="Coxsbazar", field3="Moheshkhali", field4="Swimming" } = req.query;

// const conditions = {};

// if (field1) {
//     conditions.division = { $regex: field1, $options: 'i' };;
// }

// if (field2) {
//     conditions.district = { $regex: field2, $options: 'i' };;
// }

// if (field3) {
//     conditions.sub_district = { $regex: field3, $options: 'i' };;
// }

// if (field4) {
//     conditions.activity = { $regex: field4, $options: 'i' };;
// }

// // কুয়েরি তৈরি
// const query = conditions;
// // console.log(query);

// // MongoDB কুয়েরি চালানো
// const data = await getAllTouristSpotNameService(query);
// console.log(data);




// const uniqueData = [];
// const seen = new Set();

// for (const item of AllTouristSpot) {
//     if (!seen.has(item['primary_place_name'])) {
//         uniqueData.push(item);
//         seen.add(item['primary_place_name']);
//     }
// }

// return uniqueData;