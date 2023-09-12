const { getAllDIscoverExporersService, getOneDIscoverExporersService } = require("../services/discoverExplorerServices");


exports.getAllDiscoverExplorersName = async (req, res, next) => {
    try {

        const getAllExplorerName= await getAllDIscoverExporersService();
        if(getAllExplorerName){
            res.status(200).json({
                status: 'Successfully',
                data: getAllExplorerName
            })
        }else{
            res.status(400).json({
                status: 'Failled',
                message: "Data get Failed",
                error: error.message
            })
        }
        

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "get me Failed",
            error: error.message
        })
    }
}

exports.getOneDiscoverExplorersName = async (req, res, next) => {
    try {
        const  id  = req.params.id;
        const getOneExplorerName= await getOneDIscoverExporersService(id);
        if(getOneExplorerName){
            res.status(200).json({
                status: 'Successfully',
                data: getOneExplorerName
            })
        }else{
            res.status(400).json({
                status: 'Failled',
                message: "Data get Failed",
                error: error.message
            })
        }
        

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "get me Failed",
            error: error.message
        })
    }
}