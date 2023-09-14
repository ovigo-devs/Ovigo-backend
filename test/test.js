

const totalData = (total) =>{
    const data = {
        name: "sundorbon",
        place: "khulna",
        about: "test data",
        over: [
            {
                image: "1.jpg"
            },
            {
                image: "2.jpg"
            },
            {
                image: "3.jpg"
            }
        ],
        tradition: [
            {
                name: "test1",
                image: "1.jpg",
                des: "tesstdes"
            },
            {
                name: "test2",
                image: "2.jpg",
                des: "tesstdes"
            },
            {
                name: "test3",
                image: "3.jpg",
                des: "tesstdes"
            }
        ]

    }
    fetch('http://localhost:3000/postdata',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: json.stringify(data)
    }).then(res => res.json())
    .then(data => {
        if (data.status === "Successfully Added") {
            toast.success(`Booking Added Successfully`)
            setIsOpen(false);
            refetch()
        }
    })
}






// const mongoose = require("mongoose");
// const allPlacesSchema = new mongoose.Schema({
    // place_name: {
    //     type: String,
    //     required: [true, "Hotel Name must be required"],
    //     minLength: [3, "At least 3 caracted must be provide"],
    //     maxLength: [40, "Name is to large"],
    // },
    // location_name: {
    //     type: String,
    //     required: [true, "Hotel Name must be required"],
    //     minLength: [3, "At least 3 caracted must be provide"],
    //     maxLength: [40, "Name is to large"],
    // },
    // img: {
    //     required: true,
    //     type: String
    // },
//     name: String,
//     place: String,
//     about: String,
//     over: [
//         {
//             image: String,
//         },
//     ],
//     tradition: [
//         {
//             name: String,
//             image: String,
//             des: String,
//         },
//     ],

// })

// const AllPlaces = mongoose.model("allplaces", allPlacesSchema);

// module.exports = AllPlaces;

// questions:[{
//     id: String, //or again, number
//     text: String,
//     type: String,
//     options: [
//         {
//             id: String, //or number
//             text: String,
//             value: String
//         }
//     ]
// }
// ]







// {
//     "name": "sundorbon",
//     "place": "khulna",
//     "about": "test data",
//     "over": [
//       {
//         "image": "1.jpg"
//       },
//       {
//         "image": "2.jpg"
//       },
//       {
//         "image": "3.jpg"
//       }
//     ],
//     "tradition": [
//       {
//         "name": "test1",
//         "image": "1.jpg",
//         "des": "tesstdes"
//       },
//       {
//         "name": "test2",
//         "image": "2.jpg",
//         "des": "tesstdes"
//       },
//       {
//         "name": "test3",
//         "image": "3.jpg",
//         "des": "tesstdes"
//       }
//     ]
//   }
  