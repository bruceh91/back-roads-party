import { Router } from 'express';
import { executeQuery } from '../config/db';
import Table from '../table';

let router = Router();
let catTable = new Table('categories');


router.get('/', (req, res) => {
    // console.log(req.user);
    catTable.getAll()
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});




router.post('/reference_table', (req, res) => {
    console.log(req.body)
    let sql = `INSERT INTO prod_cat_ref (prodID, catID)
    VALUES (${req.body.prodID}, ${req.body.catID});`
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});



export default router;