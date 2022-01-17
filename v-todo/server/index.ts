import app from './app';
import {startConnection} from './database';

startConnection();
const port = 4000;
app.listen(port);
console.log(`Server is running on ${port}`);