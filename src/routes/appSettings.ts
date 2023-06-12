import { Router } from "express";
import { Appset } from "../db/models/appset.js";
const router = Router();

// request handlers:

//GET all students:
router.get("/", async (req, res) => {
  //TODO: handle errors:
  try {
    const appSettings = await Appset.find();
    res.json(appSettings);
  } catch (e) {
    res.status(500).json({ message: "Error", error: e });
  }
});

router.get("/abc", (req, res) => {
  Appset.find()
    .then((students) => res.json(students))
    .catch((e) => res.status(500).json({ message: "Error", error: e }));
});

//POST a student:
router.post("/", async (req, res) => {
  const app = req.body.app;

  const newAppset = new Appset({
    title: app.title,
    notifications: app.notifications,
    inbox: app.inbox,
    publish: app.publish,
    following: app.following,
    followers: app.followers,
  });

  try {
    const appsCh = await Appset.find();
    const mapped = appsCh.map((a) => a.title);

    if (!mapped.includes(app.title)) {
      newAppset.save();
    } else if (mapped.includes(app.title)) {
      const appsSet = await Appset.updateOne(
        { title: app.title },
        {
          $set: {
            notifications: app.notifications,
            inbox: app.inbox,
            publish: app.publish,
            following: app.following,
            followers: app.followers,
          },
        }
      );
    }
    res.status(200).json("halleluya");
  } catch (e) {
    res.status(500).json({ message: "Error", error: e });
  }
});

export { router as appsetRouter };
