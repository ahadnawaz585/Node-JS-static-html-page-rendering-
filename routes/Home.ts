import path from 'path';
import express, { Request, Response, NextFunction, Router } from 'express';
import { rootDir } from '../util/path';

class Homeroutes{
    private router:Router;

    constructor(){
        this.router= express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes():void{
        this.router.get('/', this.getMainPage);
    }

    private getMainPage = (req:Request , res:Response,next: NextFunction):void =>{
        res.render('Home',{pageTitle:'Home'});
    }

    public getRouter(): Router{
        return this.router;
    }   
}
export default Homeroutes;