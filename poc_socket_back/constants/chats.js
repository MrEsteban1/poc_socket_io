const fs = require("fs");

// chats();
function fetchLocalJSONData(ubicacion = "/chats.json") {
  try {
    // Step 1: Read the JSON file
    const jsonString = fs.readFileSync(ubicacion, "utf8");
    const textString = fs.readFileSync()

    // Step 2: Parse the JSON data
    const data = JSON.parse(jsonString);

    // Step 3: Access specific data
    return data;
    // const name = data.name;
    // const age = data.age;
    // const email = data.email;

    // console.log("Name:", name);
    // console.log("Age:", age);
    // console.log("Email:", email);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

module.exports = fetchLocalJSONData;
