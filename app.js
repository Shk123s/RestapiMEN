const express = require("express");
const app = express();
const cors = require('cors')
const ProductRoute = require("./Routes/productRoute");
const createHttpError = require("http-errors");
//intial db
require("./initDB")();
//products middlerware
app.use(cors());
app.use(express.json());
app.use("/products", ProductRoute);
// body parse to json
app.use(express.urlencoded({ extended: true }));
// error handlers
app.use((req, res, next) => {
  next(createHttpError(404, "Not found"));
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
// server port
app.listen(3000, () => {
  console.log(" 3000 is listening");
});
