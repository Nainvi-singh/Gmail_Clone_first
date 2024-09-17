import express from 'express'; // react style
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from './routes/user.route.js';
import emailRoute from './routes/email.route.js';

dotenv.config({});
connectDB();
const PORT = 4500;
const app = express();

// app.use(cors({origin:`https://gmail-clone-2-qj4n.onrender.com`,credentials:true}));
// app.options('*',cors())
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// const corsOptions = {
//     origin:'http://localhost:5174',
//     credentials:true
// }
// app.use(cors(corsOptions));

// routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/email', emailRoute);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
