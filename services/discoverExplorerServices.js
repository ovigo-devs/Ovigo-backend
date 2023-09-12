const DiscoverExplorers = require("../models/DiscoverExplorers");

exports.getAllDIscoverExporersService = async () => {
    const getAllDIscoverExporers = await DiscoverExplorers.find({ });
    return getAllDIscoverExporers;
}

exports.getOneDIscoverExporersService = async (id) => {
    const getOneDIscoverExporers = await DiscoverExplorers.findOne({ _id: id });
    return getOneDIscoverExporers;
}