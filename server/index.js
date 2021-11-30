const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const config = require("config");
const schema = require("./schema");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = config.get("port") || 5000;

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use("/auth", require("./routes/auth.routes"));

async function start() {
  try {
    await mongoose.connect(config.get("URI"), {
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`Running  on PORT ${PORT}`));
  } catch (e) {
    console.log(`Server error ${e.message}`);
    process.exit(1);
  }
}

start();
