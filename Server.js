const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbConnection = require("./connection/config");
const cors = require('cors');
const { addUser, getAllUsers, login, deleteUser } = require('./controllers/userController');

const  User  = require('./models/userSchema');

const router = express.Router();

dbConnection();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 4040;

router.post('/user', addUser).get('/user', getAllUsers);
router.post('/login', login);
router.post('/delete', deleteUser);

app.use(router);

app.post('/testing', async (req, res)=>{
  console.log(req.body);
    const user = await User.create(req.body);
   if(user){
    res.send(user);
   }else{
    res.send("Error")
   }
// res.send("Hello from Server")
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// post, get, delete, patch/update