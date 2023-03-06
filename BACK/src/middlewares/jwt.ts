import * as jwtService from 'jsonwebtoken'
import { jwtSecretKey } from '..';

export const middlewareJWT = (req, res, next) => {
    const jwt = req.headers["authorization"];

    jwtService.verify(jwt, jwtSecretKey, (err, userInfo) => {
        if (err) {
            res.status(403).end();
            return;
        }

        req.userInfo = userInfo;
        next();
    });
};