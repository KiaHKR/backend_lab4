import express from "express"
import jwt from "jsonwebtoken"
import env from "dotenv"
import verify from "./routes/verifyToken.js"

env.config()


let user_list = [{
    user: "kiasar.mian@gmail.com",
    pass: "cake"
}];


const app = express()

const port = process.env.PORT || 25569
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/login_register')
})

app.get('/secured', (req, res) => {
    res.render('pages/secured_page')
})

app.post("/register_page", (req, res) => {

    user_list.push({
        user: req.body.user,
        pass: req.body.password
    })
    console.log(user_list)

})

app.get('/validate', verify, (req, res) => {
    res.json({
        user: req.user
    })

})

app.post("/login_page", (req, res) => {
    let bool = false;

    user_list.forEach(element => {
        if (element.user === req.body.user && element.pass === req.body.password) {
            const signed = jwt.sign({
                user: req.body.user,
                pass: req.body.password
            }, process.env.SECRET_TOKEN)
            res.json({
                token: signed
            })
            bool = true;
        }

    });
    if (bool) {
        return
    }
    console.log(user_list)
    res.sendStatus(401);

})



app.listen(port, () => {
    console.log('Express server listening on http://localhost:' + port)
})