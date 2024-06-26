const { MongoClient, ObjectId } = require("mongodb");

// MongoDB connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database Name
const dbName = "myDatabase";

async function main() {
  let client;
  try {
    // Connect to the MongoDB cluster
    client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("users"); // Define collection here

    // insert one
    // async function insertOneExample() {
    //   const collection = db.collection("users");
    //   const document = {
    //     name: "Abhishek",
    //     email: "abhi@example.com",
    //     status: "active",
    //   };
    //   const result = await collection.insertOne(document);
    //   console.log(`Inserted ${result.insertedCount} document`);
    // }
    // await insertOneExample();

    //insert many
    // async function insertManyExample() {
    //   const collection = db.collection("users");
    //   const documents = [
    //     { name: "Kundan", email: "kundan@example.com", status: "active" },
    //     { name: "Rahual", email: "rahual@example.com", status: "active" },
    //   ];
    //   const result = await collection.insertMany(documents);
    //   console.log(`Inserted ${result.insertedCount} documents`);
    // }
    // await insertManyExample();

    // Example of updating one document by ObjectId
    // async function updateOneExample() {
    //   const collection = db.collection("users");
    //   const objectIdupdateOne = new ObjectId("667bdffcf2a533f1b84d58f9"); // Replace with your ObjectId
    //   const updateDocument = { $set: { name: "Updated Name" } };
    //   const result = await collection.updateOne(
    //     { _id: objectIdupdateOne },
    //     updateDocument
    //   );
    //   console.log(
    //     `Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`
    //   );
    // }
    // await updateOneExample();

    // update many
    // async function updateManyExample() {
    //   const collection = db.collection("users");
    //   const filter = { status: "active" };
    //   const updateDocument = { $set: { status: "inactive" } };
    //   const result = await collection.updateMany(filter, updateDocument);
    //   console.log(
    //     `Matched ${result.matchedCount} documents and modified ${result.modifiedCount} documents`
    //   );
    // }
    // await updateManyExample();

    // find
    // async function findExample() {
    //   const collection = db.collection("users");

    //   const cursor = collection.find({});
    //   await cursor.forEach((document) => {
    //     console.log(document);
    //   });
    // }
    // await findExample();

    // replace one
    async function replaceOneExample() {
      const collection = db.collection("users");
      const ObjId = new ObjectId("667bdffcf2a533f1b84d58f9"); // Replace with your ObjectId
      const filter = { _id: ObjId }; // Replace with your document _id
      const replacement = {
        name: "New Name",
        email: "new.email@example.com",
        status: "active",
      };
      const result = await collection.replaceOne(filter, replacement);
      console.log(
        `Matched ${result.matchedCount} document(s) and replaced ${result.modifiedCount} document(s)`
      );
    }
    await replaceOneExample();

    // Example of deleting one document by ObjectId
    // const deleteOneExample = async (collection) => {
    //   const objectIdToDelete = new ObjectId("667bde15ea071e99f21722e8"); // Replace with your ObjectId
    //   const result = await collection.deleteOne({ _id: objectIdToDelete });
    //   console.log(`Deleted ${result.deletedCount} document`);
    // };
    // await deleteOneExample(collection); // Pass collection as an argument

    // delete many
    // async function deleteManyExample() {
    //   const collection = db.collection("users");
    //   const filter = { status: "inactive" };
    //   const result = await collection.deleteMany(filter);
    //   console.log(`Deleted ${result.deletedCount} documents`);
    // }
    // await deleteManyExample();
  } finally {
    if (client) {
      // Close the client
      await client.close();
      console.log("Disconnected from MongoDB");
    }
  }
}

main().catch(console.error);

// node Database.js
