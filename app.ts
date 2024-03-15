import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import Homeroutes from './routes/Home';
import Accountantroutes from './routes/Accountant';
import AccountantTableRoutes from './routes/ViewAccountant';
import AccountsRoutes from './routes/Accounts';
import AccountsEntryroutes from './routes/AccountsEntry';

class App {
    private app: Express;

    constructor() {
        this.app = express();
        this.initializeMiddleware();
        this.initializeRoutes();
        this.startServer();
        console.log('App constructor executed');
    }

    private initializeMiddleware(): void {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.set('view engine', 'pug');
        this.app.set('views', path.join(__dirname, 'views'));
    }

    private initializeRoutes(): void {
        const Home = new Homeroutes().getRouter();
        const Accountant = new Accountantroutes().getRouter();
        const accountantTable = new AccountantTableRoutes().getRouter();
        const Accounts = new AccountsRoutes().getRouter();
        const AccountEntry= new AccountsEntryroutes().getRouter();

        this.app.use(Home);
        this.app.use(Accountant);
        this.app.use(accountantTable);
        this.app.use(Accounts);
        this.app.use(AccountEntry);
    }

    private startServer(): void {
        const port = process.env.PORT || 3000;

        this.app.use(this.handleNotFound);

        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }

    private handleNotFound(req: Request, res: Response, next: NextFunction): void {
        res.status(404).render('404'); // Assuming '404.pug' is in your 'views' directory
    }
}

new App();
