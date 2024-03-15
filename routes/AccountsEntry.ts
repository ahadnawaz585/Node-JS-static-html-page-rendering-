import express, { Request, Response, NextFunction, Router } from 'express';

class AccountsEntryroutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        // Define the route for '/accountsEntry'
        this.router.get('/accountsEntry', this.getAccountsEntryPage);
    }

    private getAccountsEntryPage = (req: Request, res: Response, next: NextFunction): void => {
        // Render the 'accountsEntry.pug' template with a page title
        res.render('accountsEntry', { pageTitle: 'Accounts Entry' });
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default AccountsEntryroutes;
