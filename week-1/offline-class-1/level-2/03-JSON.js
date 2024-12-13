function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // JSON.parse(string)
  //JSON.stringify(object)

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);
  console.log(parsedObject.number);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
  console.log(jsonStringified.number); // ---->> doesn't give anything
}

// JSON- JavaScript Object Notation

// Used to convert JS object into JSON string and vice-versa
// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);
