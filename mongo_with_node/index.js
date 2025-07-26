import { MongoClient } from "mongodb";


const uri = 'mongodb://127.0.0.1:27017/';

const client = new MongoClient(uri);

const data1 = {
    name : "Abhishek SIngh",
    company: "64d54756e545f54564c21857n",
    price : 5000,
    color : ["#021563", "#cc6600", "#336632"],
    image: "/images/prodect-handbag.png",
    category : "86sa5445sf7g89dsf5sdf414d3fw",
    isFeatured : true,
};


const main = async () => {
    try {
        await client.connect();
        const db = client.db("shop");
        const collection = db.collection("products");

        await collection.insertOne(data1);
        const data = await collection.find({price : {$eq : 5000}}).toArray();


        console.log("Data :- ", data);
        return "done";

    } catch (error) {
        console.log("Error :- ", error);

    } finally {
        await client.close();
    }
};


main().then(console.log());