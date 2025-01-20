import mongoose from 'mongoose';
import 'dotenv/config';

const mongooseConnect = mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

export default mongooseConnect;
