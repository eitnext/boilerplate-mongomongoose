const mongoose = require("mongoose");

const DB = process.env.MON_URI.replace("<PASSWORD>", process.env.MON_PASS);

module.exports = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected!...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
