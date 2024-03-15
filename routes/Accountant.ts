import express, { Request, Response, NextFunction, Router } from 'express';

class Accountantroutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {

        this.router.get('/accountant', this.getAccountantPage);
    }

    private getAccountantPage = (req: Request, res: Response, next: NextFunction): void => {
 
        res.render('accountant', { pageTitle: 'Accountant' });
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default Accountantroutes;
