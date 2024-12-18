import express from 'express';
import cors from 'cors';
import { taskRouter } from './routes/task.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRouter);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});