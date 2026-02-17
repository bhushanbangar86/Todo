const express = require("express");
const userRoute = require("./routes/userRouter");
const cors = require("cors");
const connectDB = require("./utils/dbUtils");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", userRoute);

// Connect DB and start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running at http://localhost:${PORT}`);
});
