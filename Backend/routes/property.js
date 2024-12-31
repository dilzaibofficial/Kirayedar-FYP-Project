const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const cors = require("cors");
// const { upload } = require("../middleware/multer.middleware.js");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage });

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const {
  createProperty,
  myProperty,
  freshRecommendation,
  makeAgreement,
  MyAgreement,
  buyerDetail,
} = require("../controller/property");

//Middleware for authenticating routes
// function authenticateToken(req, res, next) {
//   console.log(req.cookies.jwt);
//   const authtoken = req.cookies.jwt;
//   if (authtoken) {
//     jwt.verify(
//       authtoken,
//       process.env.ACCESS_TOKEN_SECRET,
//       (err, decodedToken) => {
//         if (err) {
//           console.log(err.message);
//           res.status(401).send({ error: "Unauthorizeds" });
//         } else {
//           req.user = decodedToken;
//           next();
//         }
//       }
//     );
//   } else {
//     res.status(401).send({ error: "Unauthorizeds" });
//   }
// }
router.route("/createProperty").post(upload.array("images"), createProperty);
router.route("/findmyproperty").post(myProperty);
router.route("/freshRecommendation").post(freshRecommendation);
router.route("/makeAgreemnet").post(makeAgreement);
router.route("/myAgreement").post(MyAgreement);
router.route("/myBuyers").post(buyerDetail);

// router.route("/issueCreated").get(authenticateToken, issueCreated); //done
// router.route("/issueUpvote").post(authenticateToken, issueUpvote); //done
// router.route("/issueUnvote").post(authenticateToken, issueUnvote); //done
// router.route("/issueUpvotedWindow").post(authenticateToken, issueUpvotedWindow); //done
// router.route("/issueUnactive").get(authenticateToken, issueUnactive); //done
// router.route("/issueBanned").get(authenticateToken, issueBanned); //done

module.exports = router;
