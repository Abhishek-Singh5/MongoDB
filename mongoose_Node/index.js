import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/shop";

mongoose.connect(uri);


// Schema

const productSchema = new mongoose.Schema({
    name : String,
    company: String,
    price : Number,
    colors: [String],
    image : String,
    category: String,
    isFeatured : Boolean,
});


// Model

const Product = new mongoose.model("Product", productSchema);


const data1 = {
    name : "Vishal Singh",
    company: "64d54756e545f54564c21857n",
    price : 5500,
    color : ["#021563", "#cc6600", "#336632"],
    image: "/images/prodect-handbag.png",
    category : "86sa5445sf7g89dsf5sdf414d3fw",
    isFeatured : false,
};

const main = async () => {
    try {

        // Read operations

        // const data = await Product.find({price : {"$eq" : 5000}});
        // console.log(data);


        // insert data

        // await Product.insertOne(data1);
        // const data = await Product.find({price : {"$eq" : 5500}});
        // console.log(data);


        // update query

        // const updateQuery = await Product.findOneAndUpdate(
        //     {
        //         name: "Vishal Singh",
        //         price : 5500,
        //     },
        //     {
        //         $set : {
        //             price : 10000,
        //         }
        //     }
        // );

        // const data = await Product.find({price : {"$eq" : 10000}});
        // console.log(data);


        // Delete Query

        await Product.findOneAndDelete (
           {
            name : "Vishal Singh",
            price : 10000,
           }
        )

        const data = await Product.find({price : {"$eq" : 10000}});
        console.log(data);

    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
}

main();