import express, { Request, Response, NextFunction, Router } from 'express';

class AccountantTableRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        // Define the route for '/accountantTable'
        this.router.get('/accountantTable', this.getAccountantTablePage);
    }

    private getAccountantTablePage = (req: Request, res: Response, next: NextFunction): void => {
        // Render the 'accountantTable.pug' template with a page title
        res.render('accountantTable', { pageTitle: 'Accountant Table' });
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default AccountantTableRoutes;
