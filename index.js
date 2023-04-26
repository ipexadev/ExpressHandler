const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

    const routesPath = path.join(__dirname, 'routes');
    fs.readdirSync(routesPath).forEach(folder => {
        const folderPath = path.join(routesPath, folder);
        if (fs.lstatSync(folderPath).isDirectory()) {
            fs.readdirSync(folderPath).forEach(file => {
                const routeHandler = require(path.join(folderPath, file));
                routeHandler(app);
            });
        }
    });

    // Define the path to the events folder
    const eventsPath = path.join(__dirname, 'events');

    // Load all event files
    fs.readdirSync(eventsPath).forEach(file => {
        const eventHandler = require(path.join(eventsPath, file));
        // Call the event handler with the app as the parameter
        eventHandler(app);
    });


const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

