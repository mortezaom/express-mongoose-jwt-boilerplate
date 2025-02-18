import mongoose from "mongoose";
const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000,
      serverApi: { version: '1', strict: true, deprecationErrors: true }
    })
    .then(() => {
      console.log("database connected!");
    })
    .catch((err) => {
      console.log(err.message);
      console.log("database connection failed, exiting now...");
      if (process.env.NODE_ENV !== 'development') process.exit(1);
    });
};

export default dbConnect;