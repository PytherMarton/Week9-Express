const { route } = require(".");

const router = require("express").Router();

// router.get("/", (req, res) => res.status(200).send("Accounting"));

// router.get("/:name", (req, res) => {
//     console.log(req.params);
//     res.status(200).json({name: req.params.name});
// });

// router.get("/:name/:age", (req, res) => {
//     console.log(req.params);
//     res.status(200).json({name: req.params.name, age: req.params.age});
// });

let staff = [
  { name: "Bob", age: 34 },
  { name: "Sally", age: 45 },
  { name: "Jo", age: 24 },
];


// Accounting as a whole
router.get("/", (req, res) => {
    staff.forEach((item, i) => item.id = i + 1);
  res.status(200).json(staff);
});


// Create a new member of staff
router.post("/", (req, res) => {
  console.log(req.body);
  staff.push(req.body);
  staff.forEach((item, i) => (item.id = i + 1));
  res.status(201).json({ msg: "Created", data: req.body });
});


// Delete all members of staff
router.delete("/", (req, res) => {
    staff = [];
    res.status(201).json({msg: "Deleted All Staff", data: staff});
});

// Get an individual member of staff
router.get("/:id", (req, res) => {
    if (req.params.id - 1 < 0 || req.params.id > staff.length) {
        res.status(404).json({msg: `${req.params.id-1} not found.`});
    } else {
        res.status(200).json(staff[req.params.id - 1 ]);
    }
});

// Update and individual member of staff
router.put("/:id", (req, res) => {
    staff[req.params.id -1] = req.body;
    res.status(200).json({msg: `Updated ${req.params.id}`, data: req.body});
});

// Delete and individual member of staff
router.delete("/:id", (req, res) => {
    const removed = staff.splice(req.params.id - 1, 1);
    res.status(200).json({msg: `Deleted ${req.params.id}`, data: removed});
});

router.get("/:name", (req, res) =>
  res.status(200).json({ name: req.params.name })
);

module.exports = router;
