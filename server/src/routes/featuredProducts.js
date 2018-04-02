import { Router } from 'express';
import Table from '../table';
import { executeQuery } from '../config/db';

let router = Router();
let featuredProductsTable = new Table('products');

router.get('/', (req, res) => {
    console.log('get featured');
    let sql =
        `SELECT * FROM products
        WHERE featured IS NOT NULL
        ORDER BY featured;`;
    executeQuery(sql)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    featuredProductsTable.insert(req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    featuredProductsTable.getOne(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
    featuredProductsTable.update(req.params.id, req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    featuredProductsTable.delete(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

export default router;