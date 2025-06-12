const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Connect to DB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server running on http://localhost:${PORT}`);
    });
});
