require("dotenv").config();

const express = require("express");
const app = express();

const indexRouter = require("./routes/index");
const errorRouter = require("./routes/error");
const accountingRouter = require("./routes/accounting");
const marketingRouter = require("./routes/marketing");
const dataRouter = require("./routes/data");


app.use("/", indexRouter);

app.use("/Accounting", accountingRouter);

app.use("/Marketing", marketingRouter);

app.use("/Data", dataRouter);

app.use("*", errorRouter);


app.listen(process.env.HTTP_PORT, () => console.log("App online"));