

const express = require('express');



// Tells node that we are creating an "express" server
const app = express();
// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);


app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});
