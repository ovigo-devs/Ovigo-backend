const mongoose = require("mongoose");
const allStaysSchema = new mongoose.Schema({
    // place_name: {
    //     type: String,
    //     // required: [true, "Place Name must be required"],
    //     // minLength: [3, "At least 3 caracted must be provide"],
    //     // maxLength: [40, "Name is to large"],
    // },
    // location_name: {
    //     type: String,
    //     // required: [true, "Location Name must be required"],
    //     // minLength: [3, "At least 3 caracted must be provide"],
    //     // maxLength: [40, "Name is to large"],
    // },
    // service: {
    //     type: String,
    //     // required: [true, "Service Name must be required"],
    //     // minLength: [3, "At least 3 caracted must be provide"],
    //     // maxLength: [40, "Name is to large"],
    // },
    // service_type: {
    //     type: String,
    //     // required: [true, "Service type Name must be required"],
    //     // minLength: [3, "At least 3 caracted must be provide"],
    //     // maxLength: [40, "Name is to large"],
    // },
    // name: {
    //     type: String,
    //     // required: [true, "Name must be required"],
    //     // minLength: [3, "At least 3 caracted must be provide"],
    //     // maxLength: [40, "Name is to large"],
    // },
    // location: {
    //     type: String,
    //     // required: [true, "Location Name must be required"],
    //     // minLength: [3, "At least 3 caracted must be provide"],
    //     // maxLength: [40, "Name is to large"],
    // },
    // image: [
    //     {
    //         image: String,
    //     },
    // ],
    // ratting: {
    //     type: String
    // },
    // price: {
    //     type: String
    // },
    // old_price: {
    //     type: String
    // },
    // about: {
    //     type: String
    // },
    // pacilities: {
    //     type: String
    // },
    // about_location: {
    //     type: String
    // },
    // review: {
    //     type: String
    // },
    // room_type: {
    //     type: String
    // },
    // room_name: {
    //     type: String
    // },
    // partner: {
    //     type: String
    // },
    // special_partner: {
    //     type: String
    // }



    // New Schema
    service_type: {
        type: String,
        required: [true, "Type Name must be required"],
    },
    stay_type: {
        type: String,
        required: [true, "Stay Type Name must be required"],
    },
    stay_type_description: {
        type: String,
        required: [true, "Stay Type Description must be required"],
    },
    no_of_hotel: {
        type: String,
        required: [true, "Number Of Hotel must be required"],
    },
    country: {
        type: String,
        required: [true, "Country Name must be required"],
    },
    city: {
        type: String,
        required: [true, "District Name must be required"],
    },
    zip_code: {
        type: String,
        required: [true, "Zip Code must be required"],
    },
    division: {
        type: String,
        required: [true, "Division Name must be required"],
    },
    place_name: {
        type: String,
        required: [true, "Place must be required"],
    },
    hotel_address: {
        type: String,
        required: [true, "Hotel Address Name must be required"],
    },
    hotel_name: {
        type: String,
        required: [true, "hotel Name must be required"],
    },
    hotel_star: {
        type: String,
        required: [true, "Hotel Star must be required"],
    },
    property_company_chain: {
        type: String,
        required: [true, "Proparty Company must be required"],
    },
    property_company_name: {
        type: String,
    },
    hotel_pacilities: [
        {
            pacilitie_name: String
        }
    ],
    serve_breakfast: {
        require: [true, "Breakfat Should Yes Or No"],
        type: String
    },
    breakfast_include_main_price: {
        type: String
    },
    price_person_day: {
        type: Number
    },
    breakfast_type: [
        {
            food_type: String
        }
    ],
    parking_available: {
        require: [true, "Parking Type Should Fill Up"],
        type: String
    },
    reserve_parking_spot: {
        type: String
    },
    parking_location: {
        type: String
    },
    parking_type: {
        type: String
    },
    hotel_staff_speak: [
        {
            require: [true, "Hotel Staff Speak Need"],
            staff_speak: String
        }
    ],
    check_in_time_from: {
        require: [true, "Hotel Check In From Time Need"],
        type: String
    },
    check_in_time_to: {
        require: [true, "Hotel Check In To Time Need"],
        type: String
    },
    check_out_time_from: {
        require: [true, "Hotel Check Out From Time Need"],
        type: String
    },
    check_out_time_to: {
        require: [true, "Hotel Check Out To Time Need"],
        type: String
    },
    allow_children: {
        require: [true, "Allow Children Should Yes or No"],
        type: String
    },
    allow_pets: {
        require: [true, "Allow Pets Should Yes or No"],
        type: String
    },
    allow_petPrice: {
        type: Number
    },
    room_type: {
        require: [true, "Room Type Required"],
        type: String
    },
    total_room: {
        require: [true, "Total Room Number Required"],
        type: Number
    },
    room_type_bed: [
        {
            require: [true, "Room Bed Type Required"],
            bed_name: String,
            bed_number: Number
        }
    ],
    total_person_stay: {
        require: [true, "How many guest stay required"],
        type: Number
    },
    room_size: {
        type: String
    },
    allow_smoking: {
        require: [true, "You Allaw Smoking Required"],
        type: String
    },
    bathroom_private: {
        require: [true, "Private Birthroom Details Required"],
        type: String
    },
    bathroom_service: [
        {
            require: [true, "Bathroom Details Required"],
            service_name: String
        }
    ],
    room_general_amenities: [
        {
            require: [true, "Room Amenities Details Required"],
            service_name: String
        }
    ],
    outdoor_view: [
        {
            require: [true, "Room Outdoor View Details Required"],
            outdoor_view: String
        }
    ],
    outdoor_view_main: {
        type: String
    },
    room_food_drinks: [
        {
            require: [true, "Room Food And Drinks Details Required"],
            service_name: String
        }
    ],
    room_name: {
        require: [true, "Room Name Must Provide"],
        type: String
    },
    room_price: {
        require: [true, "Room Price Must Provide"],
        type: Number
    },
    room_main_image: {
        require: [true, "Main image need"],
        type: String
    },
    room_another_image: [
        {
            require: [true, "Main image needed"],
            another_image: String
        }
    ],
    charge_credit_card: {
        require: [true, "Charge Credit Card Should Yes or No"],
        type: String
    },
    invoice_name: {
        require: [true, "Invoice Name Should Required"],
        type: String
    },
    invoice_legal_company_name: {
        type: String
    },
    legal_company_recipient_same_address: {
        type: String
    },
    role: {
        type: String,
        default: "business_user"
    },
    partner: {
        type: String,
        default: "NO"
    },
    special_partner: {
        type: String,
        default: "NO"
    },
    status: {
        type: String,
        default: "Not Approve"
    }
})

const AllStays = mongoose.model("allstays", allStaysSchema);

module.exports = AllStays;
