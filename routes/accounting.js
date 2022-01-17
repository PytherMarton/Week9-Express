const router = require("express").Router();

router.get("/", (req, res) => res.status(200).send("Accounting"));

router.get("/:name", (req, res) => {
    console.log(req.params);
    res.status(200).json({name: req.params.name});
});

router.get("/:name/:age", (req, res) => {
    console.log(req.params);
    res.status(200).json({name: req.params.name, age: req.params.age});
});

module.exports = router;