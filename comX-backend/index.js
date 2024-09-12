const express = require('express'); 
const connectDB = require('./utils/connection');
const cloudinaryConnect = require("./utils/cloudinary");
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();
cloudinaryConnect();

app.get('/', (req, res) => {
  res.send('Server working perfectly');
});

// containes all the authorization routes
const auth = require("./routes/auth.routes");;
app.use("/auth", auth);

// containes all the superAdmin routes need to be protected
const superAdmin = require("./routes/superAdmin.routes");;
app.use("/superAdmin", superAdmin);

// cantain all the routes required for normal user
const user = require("./routes/user.routes");
app.use("/user", user);

//contains all the admin routes
const admin = require("./routes/admin.routes");
app.use("/admin", admin);

// contain all the general purpose feed routes
const api = require("./routes/general.routes");
app.use("/api", api);

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});