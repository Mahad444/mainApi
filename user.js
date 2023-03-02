const express = require ('express');

const router = express.Router();

const users = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Bob',
        age: 40
    }
]

router.get('/', (req, res) => {
    res.send(users);
    res.send('Hello World App');
});
router.post('/',(req,res)=>{
    const user = (req.body);
    users.push(users);
    console.log(req.body);

    res.send(`${users.name} Added Successfully`);
})
module.exports = router;