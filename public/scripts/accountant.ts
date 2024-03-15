import _ from 'lodash';

class FormHandler {
    private form: HTMLFormElement;
    private accountants: Accountant[] = [];
    private formContainer: HTMLElement;

    constructor(form: HTMLFormElement, formContainer: HTMLElement) {
        this.form = form;
        this.formContainer = formContainer;

        this.form.addEventListener('submit', (event: Event) => {
            event.preventDefault();

            const codeInput = document.getElementById('code') as HTMLInputElement;
            const nameInput = document.getElementById('name') as HTMLInputElement;

            const code = codeInput.value.trim();
            const name = nameInput.value.trim();

            if (code && name) {
                if (this.isCodeUnique(code)) {
                    const accountant = new Accountant(code, name);
                    this.accountants.push(accountant);
                    this.saveToLocalStorage();
                    this.clearForm();
                } else {
                    alert('This accountant code is already used');
                }
            }
        });

        this.initialize();
    }

    saveToLocalStorage() {
        localStorage.setItem('accountants', JSON.stringify(this.accountants));
    }

    clearForm() {
        this.form.reset();
    }

    initialize() {
        const savedAccountants = JSON.parse(localStorage.getItem('accountants') || '[]');
        if (savedAccountants.length > 0) {
            this.formContainer.classList.remove('hidden');
            // You can load the saved accountants and display them here.
        }
    }

    private isCodeUnique(code: string): boolean {
        return !_.some(this.accountants, (accountant) => accountant.code === code);
    }

    static initializeForm() {
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('accountForm') as HTMLFormElement;
            const formContainer = document.getElementById('formContainer') as HTMLElement;

            new FormHandler(form, formContainer);
        });
    }
}

export class Accountant {
    code: string;
    name: string;

    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }
}

FormHandler.initializeForm();
