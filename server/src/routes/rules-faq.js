import { Router } from 'express';
import Table from '../table';
import { executeQuery } from '../config/db';

let router = Router();
let rulesTable = new Table('rules');


router.get('/rules', (req, res) => {
    // console.log(req.user);
    let sql =
        `SELECT * FROM rules
        ORDER BY id;`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.put('/rules/:id', (req, res) => {
    let sql =
        `UPDATE rules
    SET rule = "${req.body.rule}"
    WHERE id = ${req.params.id};`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.post('/rules', (req, res) => {
    let sql =
        `INSERT INTO rules (rule)
        VALUES ("${req.body.rule}");`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.delete('/rules', (req, res) => {
    let sql =
        `DELETE FROM rules
        WHERE id = "${req.body.id}";`;
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
        ORDER BY id;`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.put('/faq/:id', (req, res) => {

    let sql =
        `UPDATE faq
    SET question = "${req.body.q}", answer = "${req.body.a}"
    WHERE id = ${req.params.id};`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.post('/faq', (req, res) => {
    let sql =
        `INSERT INTO faq (question, answer)
        VALUES ("${req.body.q}", "${req.body.a}");`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.delete('/faq', (req, res) => {
    let sql =
        `DELETE FROM faq
        WHERE id = "${req.body.id}";`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});




export default router;