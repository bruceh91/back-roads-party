import { Router } from 'express';
import { executeQuery } from '../config/db';
import Table from '../table';

let router = Router();
let productTable = new Table('products');
// let datesTable = new Table('dates_rented');

router.get('/', (req, res) => {
    let sql = `SELECT
                    *
                FROM 
                    products
                WHERE venue IS NULL;`
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.get('/venues', (req, res) => {
    let sql = `SELECT
                    *
                FROM 
                    products
                WHERE venue IS NOT NULL;`
    executeQuery(sql)
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
                    products.height AS height,
                    products.image AS image,
                    products.price AS price,
                    categories.category AS category,
                    products.id AS id
                FROM categories
	                JOIN prod_cat_REF ON prod_cat_REF.catID = categories.id
	                JOIN products ON products.id = prod_cat_REF.prodID
                WHERE prod_cat_REF.catID = ${req.params.id}
                AND venue IS NULL;`
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.get('/dates/:id', (req, res) => {
    let sql = `SELECT * FROM dates_rented WHERE dates_rented.product_id = ${req.params.id};`
    executeQuery(sql)
        .then((results) => {
            res.json(results);
            console.log(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });

});

router.put('/:id', (req, res) => {
    let sql = `
    UPDATE
        products
    SET ${req.body.column} = "${req.body.value}"
    WHERE id = ${req.params.id};`;
    console.log(req.body)
    executeQuery(sql)
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

router.get('/cat/id', (req, res) => {
    let sql = `SELECT
                    MAX(id) AS id
                FROM products;`
    console.log(sql)
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.delete('/cat/:id', (req, res) => {
    let sql = `DELETE FROM prod_cat_ref
                WHERE prodID = ${req.params.id};`
    console.log(sql)
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.get('/misc/misc', (req, res) => {
    let sql = `SELECT * FROM misc;`
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.put('/misc/misc/:id', (req, res) => {
    let sql = `UPDATE misc
                SET value = "${req.body.value}"
                WHERE name = "${req.params.id}";`
    console.log(sql)
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });


    // new Table('misc').update(req.params.id, req.body)
    //     .then((results) => {
    //         res.json(results);
    //     }).catch((err) => {
    //         console.log(err);
    //         res.sendStatus(500);
    //     });
});

export default router;