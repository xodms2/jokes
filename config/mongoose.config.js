const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/jokesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("successfully established connection to the datbase"))
  .catch((err) =>
    console.log("something went wrong while establishing connection ", err)
  );
