const { getProductsService, createProductService, getSingleProductService, getProductsByQuery, getProductsByUnitStatus, getProductsOutOfStock, getProductsMinQuantity }=require("../services/product")


exports.getProducts = async (req, res, next) => {
    try {
        // const products = await Product
        //   .where("name").equals(/\w/)
        //   .where("quantity").gt(100).lt(600)
        //   .limit(2).sort({ quantity: -1 })
        const products = await getProductsService();

        res.status(200).json({
            status: "success",
            data: products
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
};

exports.getProduct = async (req, res, next) => {
    try {
        // console.log(req.params.id)
        const id = {
            _id: req.params.id
        }
        const product = await getSingleProductService(id)
        res.status(200).json({
            status: "success",
            data: product
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
}

exports.getProductsMinQuantity = async (req, res, next) => {
    try {
        // console.log(req.params.id)
        const quantity = {
            quantity: req.params.quantity
        }
        const product = await getProductsMinQuantity(quantity)
        res.status(200).json({
            status: "success",
            data: product
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
}

exports.getProductsByQuery = async (req, res, next) => {
    try {
        // console.log(req.params.id)
        // console.log(req.params.status)
        const query = {
            _id: req.params.id,
            status:req.params.status
        }
        const products = await getProductsByQuery(query)
        res.status(200).json({
            status: "success",
            data: products
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
}

exports.getProductsUnitStatus = async (req, res, next) => {
    
    try {
        //  console.log(req.params.unit)
        // console.log(req.params.status)
        const query = {
            unit: req.params.unit,
            status: req.params.status
        }
       
        const products = await getProductsByUnitStatus(query)
        res.status(200).json({
            status: "success",
            data: products
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
}
exports.getProductsOutOfStock = async (req, res, next) => {
    
    try {
        
        const products = await getProductsOutOfStock()
        res.status(200).json({
            status: "success",
            data: products
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
}






exports.createProduct = async (req, res, next) => {
    

    try {
        // save or create
        // res.send('Its working')
                // console.log(req.body)
        
        const result = await createProductService(req.body);

        result.logger()


        // const product = new Product(req.body)

        // instance creation--> Do something --> save()

        // if (product.quantity == 0) {
        //   product.status = 'out-of-stock'
        // }

        // const result = await product.save()
        // result.logger()

        res.status(200).json({
            status: 'success',
            messgae: 'Data inserted successfully!',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: ' Data is not inserted ',
            error: error.message
        })
    }


}