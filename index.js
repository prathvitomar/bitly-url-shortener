const express = require('express');
const app = express();
const PORT = 8000;
const {connectToDb} = require('./connection');
const urlRouter = require('./models/url');
const {checkForAuthentication,restrictTo} = require('./middleware/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser());
app.use(checkForAuthentication);

connectToDb('mongodb://127.0.0.1:27017/url-shortener')
.then(()=> console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.use("/url", restrictTo(["NORMAL"]), urlRouter)

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectURL);
  });

app.listen(PORT, ()=> console.log('Listening on port 8000'))