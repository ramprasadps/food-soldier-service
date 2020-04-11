var express = require("express");
var app = express();
var mealsConfig = require('./app/controller/admin/mealsConfig');

app.use('/admin/mealsConfig', mealsConfig);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});