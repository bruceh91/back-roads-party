import { Router } from 'express';
import Table from '../table';
import { executeQuery } from '../config/db';

let router = Router();

router.get('/rules', (req, res) => {
    // console.log(req.user);
    let sql =
        `SELECT * FROM rules
        WHERE rank IS NOT NULL
        ORDER BY rank;`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.get('/faq', (req, res) => {
    // console.log(req.user);
    let sql =
        `SELECT * FROM faq
        WHERE rank IS NOT NULL
        ORDER BY rank;`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});




export default router;