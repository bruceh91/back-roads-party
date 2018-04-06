import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import { executeQuery } from '../config/db';


let router = Router();

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user);
});


router.get('/:id', (req, res) => {
    let sql = `SELECT id, name FROM users
                WHERE email = '${req.params.id}';`
    executeQuery(sql)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

export default router;