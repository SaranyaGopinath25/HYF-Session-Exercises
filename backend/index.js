import express from 'express';
import knexLibrary from 'knex';

const dbFile = '../Databases/tasks.sqlite3';

const knex = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
  useNullAsDefault : true
});

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/', (req,res) => {
    res.send("Let's do some other get req");
})

//REQ >>>>> http://localhost:3000/add?a=5&b=4
app.get('/add', (req,res) => {
    console.log("REQ >>>>>>>> "+req.url);
    console.log("REQ query >>>>>>>>>> "+JSON.stringify(req.query.a));
    const {a,b} = req.query;
    console.log("a : "+a+" b : "+b);
    res.send(
        `<h1>Math Page </h1>
        <h4>Sum of the params : </h4>
        <p>${Number(req.query.a) + Number(req.query.b)}</p>`

    );
});


// Exercise #1
// REQ >>>>> http://localhost:3000/currentYear
app.get('/currentYear', (req,res) => {
    const currentYear = new Date().getFullYear();
    console.log("Current Year : ; "+currentYear);

    res.send(`<h1>Current Year is ${currentYear}</h1>`);

})

// Fetch Data from the database

app.get('/tasks', async (req,res) => {
    const results = await knex.raw("SELECT * FROM task");
    console.log("RESULT :::::: "+results);
    res.json(results);

})
