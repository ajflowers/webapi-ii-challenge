const express = require('express');

const PostRouter = require('./post-router.js');

const server = express();

const cors = require('cors');

server.use(express.json());

server.use(cors());

server.use('/api/posts', PostRouter);

server.listen(9003, () => {
    console.log('\n*** Server Running on http://localhost:9003 ***\n');
  });
  