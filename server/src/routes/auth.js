import { Router } from 'express';
import passport from 'passport';
import { encode } from '../utils/tokens';
import { makeHash } from "../utils/security"; 

let router = Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, token, info) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else if (!token) {
            // console.log(info)
            return res.status(401).json(info);
        } else {
            return res.status(201).json(token);
        }
    })(req, res, next);
});

router.delete('/logout/:id', (req, res) => {
    classTable.delete(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get("/generate/:pw", (req, res, next) => {
    makeHash(req.params.pw)
        .then(hash => {
            res.send(hash);
        })
        .catch(err => {
            next(err);
        });
});


export default router;