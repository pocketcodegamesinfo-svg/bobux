import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'bobux-backend',
    time: new Date().toISOString()
  });
});

app.get('/api', (req, res) => {
  res.json({
    name: 'Bobux API',
    version: '0.1.0',
    message: 'Сервер работает'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend: http://localhost:${PORT}`);
  console.log(`📡 API: http://localhost:${PORT}/api`);
});