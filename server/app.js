const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const cloudinary = require('cloudinary');
const app = express();


dotenv.config();

const PORT = process.env.PORT;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

cloudinary.v2.config({ 
  cloud_name: 'dzptuxggu', 
  api_key: '312143668924137', 
  api_secret: 'gps-HL2SyXMGVCd8dninypMaCXk' 
});

app.use(express.json());
app.use(cors({
    origin : [process.env.CLIENT_URL],
    credentials : true
}));

app.use('/api/v1',userRoutes);  

 
const startServer = () => {
    connectDB(MONGO_DB_URI)
    .then(() => {
        console.log('Database started');
        app.listen(PORT,() => {
            console.log(`Server Started at ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
};

startServer();