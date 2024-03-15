import express, { Request, Response, NextFunction, Router } from 'express';

class AccountsRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        // Define the route for '/accountsTable'
        this.router.get('/accounts', this.getAccountsTablePage);
    }

    private getAccountsTablePage = (req: Request, res: Response, next: NextFunction): void => {
        // Render the 'accountsTable.pug' template with a page title
        res.render('accounts', { pageTitle: 'Accounts' });
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default AccountsRoutes;
