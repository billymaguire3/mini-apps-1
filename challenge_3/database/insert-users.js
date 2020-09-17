const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("checkout");
    const collection = database.collection("users");
    // create a document to be inserted
    const accountInfo = { name: "Billy", email: "Maguire", password: "123"};
    const addressInfo = { address_line_1: "123 Hack Reactor Dr", address_line_2: "Unit B", city: "San Fransisco", state: "CA", zip: "94160"};
    const cardInfo = { card_number: "12345678910", expiration_date: "1/2/2024", cvv: "123", billing_zip: "94160" };

    const result = await collection.insertMany([accountInfo, addressInfo, cardInfo]);

    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);