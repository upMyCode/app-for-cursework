const { Router } = require("express");
const User = require("../models/User");
const Stocks = require("../models/Stocks");
const config = require("config");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = Router();

router.get("/stocks", async (req, res) => {
  const stocksList = [
    "AAPL",
    "MSFT",
    "GOOG",
    "S&P500",
    "Abbvie",
    "OLLI",
    "SCHD",
    "ZNTL",
    "FOLD",
    "ATRC",
    "IOVA",
    "FLGT",
    "RETA",
  ];

  const stocksDB = await Stocks.findOne({ stocksList });

  if (stocksDB) {
    res.json(stocksDB);
  } else {
    const stocksData = new Stocks({
      stocks: stocksList,
    });

    stocksData.save();

    res.json(stocksDB);
  }
});

router.post(
  "/sign-up",
  [
    check("email", "No correct email").isEmail(),
    check("password", "Min width is 6 symbols").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return status(400).json({
          errors: errors.array(),
          message: "No correct some data for registration",
        });
      }

      const { email, password, username } = req.body;

      const condidate = await User.findOne({ email: email });

      if (condidate) {
        return res
          .status(400)
          .json({ message: "This user is already exists." });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({ username, email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: "Вы успешно зарегистрировались" });
    } catch (e) {
      res.status(500).json({ message: "We have a some trouble" });
    }
  }
);

router.post(
  "/sign-in",
  [
    check("email", "Please input correct email").normalizeEmail().isEmail(),
    check("password", "Please input password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return status(400).json({
          errors: errors.array(),
          message: "No correct some data for registration",
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "User is not defined" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Password is not correct, please try again" });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "We have a some trouble" });
    }
  }
);

module.exports = router;
