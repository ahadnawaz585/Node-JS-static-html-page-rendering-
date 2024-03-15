import { Accountant } from "./accountant";

class AccountantLoginHandler {
    private loginForm: HTMLFormElement;
    private loginMessage: HTMLElement;
    private accountants: Accountant[] = [];

    constructor() {
        this.loginForm = document.getElementById('accountantLoginForm') as HTMLFormElement;
        this.loginMessage = document.getElementById('loginMessage') as HTMLElement;

        this.loginForm.addEventListener('submit', (event: Event) => {
            event.preventDefault();

            const codeInput = document.getElementById('accountantCode') as HTMLInputElement;
            const nameInput = document.getElementById('accountantName') as HTMLInputElement;

            const code = codeInput.value.trim();
            const name = nameInput.value.trim();

            const matchedAccountant = this.accountants.find(accountant => accountant.code === code && accountant.name === name);

            if (matchedAccountant) {
                this.loginMessage.textContent = 'Login successful';
                this.loginMessage.style.color = 'green';

                // Automatically redirect to a new page after 2 seconds
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 2000);
            } else {
                this.loginMessage.textContent = 'Login failed. Invalid code or name.';
                this.loginMessage.style.color = 'red';
            }
        });

        this.initialize();
    }

    initialize() {
        const savedAccountants = JSON.parse(localStorage.getItem('accountants') || '[]');
        this.accountants = savedAccountants;
    }

    static initializeLoginForm() {
        document.addEventListener('DOMContentLoaded', () => {
            new AccountantLoginHandler();
        });
    }
}

AccountantLoginHandler.initializeLoginForm();
