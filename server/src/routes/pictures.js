import { Router } from 'express';
import { executeQuery } from '../config/db';
import Table from '../table';

let router = Router();

router.get('/:id', (req, res) => {
    let sql = `SELECT *
                FROM pictures
                WHERE product_id = ${req.params.id};`
                console.log(sql)
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log(req.body)
    let sql = `INSERT INTO pictures (product_id, pic_url)
    VALUES (${req.body.product_id}, "${req.body.pic_url}");`
    console.log(`sql   ==   ${sql}`)
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    console.log(req.body)
    let sql = `UPDATE pictures 
                SET pic_url = "${req.body.value}"
                WHERE id = ${req.body.ref_id};`
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});



export default router;