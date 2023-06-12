import { Router } from "express";
import { Addapp } from "../db/models/addapp.js";

const router = Router();

router.get("/", async (req, res) => {
  //TODO: handle errors:
  try {
    const appsChosen = await Addapp.find().then((chosen) => {
      if (chosen.length === 0) {
        res.json([]);
      } else {
        const arr = chosen[0].chosen ?? [];
        res.json(arr);
      }
    });
  } catch (e) {
    res.status(500).json({ message: "Error", error: e });
  }
});

//POST a student:
router.post("/", async (req, res) => {
  const apps = req.body.apps ?? [];
  const id = req.body.id ?? "";
  const newAddApp = new Addapp({
    title: "apps",
    chosen: apps,
  });

  try {
    const appsCh = await Addapp.find();
    if (appsCh.length === 0) {
      newAddApp.save();
    }
    if (appsCh.length === 1) {
      const appsChosen = await Addapp.updateOne(
        { title: "apps" },
        { $set: { chosen: apps } }
      );
    }

    res.json({ message: "Apps Saved" });
  } catch (e) {
    res.status(500).json({ message: "Error", error: e });
  }
});

export { router as addappRouter };
