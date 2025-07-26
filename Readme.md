# MongoDB with Node.js

A minimal and effective setup to interact with a MongoDB database using **Node.js** and the official MongoDB driver.

## 📦 Features

- Connect to local MongoDB instance
- Query documents from a collection
- Clean ES module-based syntax (`import` / `export`)
- Easy to expand for CRUD operations

---

## 📁 Project Structure

```
mongo_with_node/
├── index.js
├── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Abhishek-Singh5/mongo_with_node.git
cd mongo_with_node
```

### 2. Install dependencies

```bash
npm install mongodb
```

### 3. Ensure MongoDB is running

Make sure your MongoDB server is running locally on port `27017`.

### 4. Update `package.json`

Add `"type": "module"` to support ES modules:

```json
{
  "name": "mongo_with_node",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "mongodb": "^5.8.0"
  }
}
```

### 5. Run the project

```bash
npm start
```

---

## 🧠 Example: Query Products

```js
import { MongoClient } from "mongodb";

const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

const main = async () => {
    try {
        await client.connect();

        const db = client.db("shop");
        const collection = db.collection("products");

        const data = await collection.find({ price: { $gt: 1200 } }).toArray();
        console.log("Data:", data);

        return "done";
    } catch (err) {
        console.error("Error :- ", err);
    } finally {
        await client.close();
    }
};

main().then(console.log);
```

---

## 📚 Notes

- You can change `shop` and `products` to match your database and collection.
- Use `.find()`, `.insertOne()`, `.updateOne()` etc., for various DB operations.

## 📎 License

This project is open source under the [MIT License](LICENSE).