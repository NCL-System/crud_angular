module.exports = app => {
    const clients = require("../controllers/client.controller.js");

    const router = require("express").Router();

    // Create a new clients
    router.post("/", clients.create);

    // Retrieve all clients
    router.get("/", clients.findAll);

    // Retrieve all published clients
    router.get("/published", clients.findAllPublished);

    // Retrieve a single clients with id
    router.get("/:id", clients.findOne);

    // Update a clients with id
    router.put("/:id", clients.update);

    // Delete a clients with id
    router.delete("/:id", clients.delete);

    // Create a new clients
    router.delete("/", clients.deleteAll);

    app.use('/api/clients', router);
};