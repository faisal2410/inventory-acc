const Product=require("../models/product")

exports.getProductsService = async () => {
    const products = await Product.find({})
    return products
}

exports.getSingleProductService = async (id) => {
    const product = await Product.find(id);
    return product;
}
exports.getProductsByQuery = async (query) => {
    const products = await Product.find({ $or: [{ _id: query._id},{status:query.status}]} );
    return products;
}
exports.getProductsByUnitStatus = async (query) => {   
    const products = await Product.find({ $or: [{ unit:query.unit},{status:query.status}]} );
    return products;
}
exports.getProductsOutOfStock = async () => {   
    const products = await Product.find({ status:{$ne:"out-of-stock"}} );
    return products;
}
exports.getProductsMinQuantity = async (quantity) => {   
    const products = await Product.find({ quantity:{$gte:quantity.quantity}} );
    return products;
}
exports.createProductService = async (data) => {
    const product = await Product.create(data)
    return product
}