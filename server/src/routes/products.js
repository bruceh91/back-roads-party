import { Router } from 'express';
import { executeQuery } from '../config/db';
import Table from '../table';

let router = Router();
let productTable = new Table('products');

router.get('/', (req, res) => {
    // console.log(req.user);
    productTable.getAll()
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    productTable.insert(req.body)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            // console.log(err);
            res.sendStatus(500);
        });
});

router.get('/:id', (req, res) => {
    productTable.getOne(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/category/:id', (req, res) => {
    let sql = `SELECT
                    products.name AS name,
                    products.description AS description,
                    products.quantity AS quantity,
                    products.length AS length,
                    products.width AS width,
                    products.maxpeople AS maxpeople,
                    products.image AS image,
                    categories.category AS category,
                    products.id AS id
                FROM categories
	                JOIN prod_cat_REF ON prod_cat_REF.catID = categories.id
	                JOIN products ON products.id = prod_cat_REF.prodID
                WHERE prod_cat_REF.catID = ${req.params.id};`
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    productTable.update(req.params.id, req.body)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    productTable.delete(req.params.id)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

export default router;