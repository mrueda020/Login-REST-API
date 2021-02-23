const app = require("./app");
const PORT = process.env.PORT || 5000;
// set port, listen for requests
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${PORT}.`);
  }
});
