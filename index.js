const express            = require('express');
const app                = express();
const bodyParser         = require('body-parser');
const dotenv             = require('dotenv');
const mongoose           = require('mongoose');
const cors               = require('cors');
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.DB_URL;

const ojRoutes           = require("./routes/main-routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

//app.use("/route",middleware);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use("/oj-live",ojRoutes);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: false, driverInfo: { platform: 'oj-platform' }}).then(result => {

    app.listen(PORT, () => {
        console.log("Server Running on Port>> ",PORT)

    });
}).catch(err => console.log(err));
