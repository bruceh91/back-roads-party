import { Router } from 'express';
import { executeQuery } from '../config/db';
import Table from '../table';

let router = Router();

router.get('/', (req, res) => {
    // console.log(req.user);
    new Table('pictures').getAll()
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/gallery', (req, res) => {
    // console.log(req.user);
    new Table('gallery').getAll()
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/gallery', (req, res) => {
    new Table('gallery').insert(req.body)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            // console.log(err);
            res.sendStatus(500);
        });
});

router.delete('/gallery', (req, res) => {
    let sql =
        `DELETE FROM gallery
        WHERE id = "${req.body.id}";`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.put('/gallery/:id', (req, res) => {
    new Table('gallery').update(req.params.id, req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/carousel', (req, res) => {
    // console.log(req.user);
    new Table('carousel').getAll()
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/carousel', (req, res) => {
    new Table('carousel').insert(req.body)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            // console.log(err);
            res.sendStatus(500);
        });
});

router.delete('/carousel', (req, res) => {
    let sql =
        `DELETE FROM carousel
        WHERE id = "${req.body.id}";`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.put('/carousel/:id', (req, res) => {
    new Table('carousel').update(req.params.id, req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/parallax', (req, res) => {
     // console.log('get featured');
     let sql =
     `SELECT * FROM parallax
     ORDER BY display_order;`;
 executeQuery(sql)
     .then((data) => {
         res.json(data);
     }).catch((err) => {
         console.log(err);
         res.sendStatus(500);
     });
});

router.delete('/parallax', (req, res) => {
    let sql =
        `DELETE FROM parallax
        WHERE id = "${req.body.id}";`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.post('/parallax', (req, res) => {
    new Table('parallax').insert(req.body)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            // console.log(err);
            res.sendStatus(500);
        });
});

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