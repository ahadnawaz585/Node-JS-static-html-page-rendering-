// Define a class to represent an accountant
 import _ from 'lodash';
 import { Accountant } from './accountant';
class AccountantTable{
    constructor(public code: string, public name: string) { }
}

class TablePage {
    private accountants:Accountant[] = [];

    constructor() {
        // Event listeners
        this.loadAccountants();
        this.setupEventListeners();
    }

    private loadAccountants() {
        const storedAccountants = localStorage.getItem('accountants');
        if (storedAccountants) {
            this.accountants = JSON.parse(storedAccountants);
            this.displayAccountants();
        }
    }

    private displayAccountants() {
        const tbody = document.getElementById('accountList')!;
        tbody.innerHTML = '';
    
        _.each(this.accountants, (accountant, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${accountant.code}</td>
                <td>${accountant.name}</td>
                <td>
                    <button class="edit" data-index="${index}">Edit</button>
                    <button class="delete" data-index="${index}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    
        this.setupEditButtons();
        this.setupDeleteButtons();
    }

    private setupEventListeners() {
        document.getElementById('addNew')?.addEventListener('click', () => this.showForm());
    }

    private setupEditButtons() {
        const editButtons = document.querySelectorAll('.edit');
        editButtons.forEach((editButton) => {
            editButton.addEventListener('click', (event) => {
                const target = event.target as HTMLButtonElement;
                const index = parseInt(target.dataset.index || '', 10);
                if (!isNaN(index) && index >= 0 && index < this.accountants.length) {
                    const newCode = prompt('Enter new Accountant Code:', this.accountants[index].code); // Provide the current code as default
                    const newName = prompt('Enter new Name:', this.accountants[index].name); // Provide the current name as default
    
                    if (newCode !== null && newName !== null) {
                        // Update the accountant's data at the specified index
                        this.accountants[index].code = newCode;
                        this.accountants[index].name = newName;
    
                        // Save the updated data to localStorage
                        localStorage.setItem('accountants', JSON.stringify(this.accountants));
    
                        // Refresh the table to reflect the changes
                        this.displayAccountants();
                    }
                }
            });
        });
    }
    private setupDeleteButtons() {
        const deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach((deleteButton) => {
            deleteButton.addEventListener('click', (event) => this.deleteAccountant(event));
        });
    }

    private showForm() {
        // Code to show the form for adding a new accountant
        // You can implement this part based on your existing form code
    }

    private editAccountant(event: Event) {
        const target = event.target as HTMLButtonElement;
        const index = parseInt(target.dataset.index || '', 10);
        if (!isNaN(index) && index >= 0 && index < this.accountants.length) {
            const newCode = prompt('Enter new Accountant Code:', this.accountants[index].code); // Provide the current code as default
            const newName = prompt('Enter new Name:', this.accountants[index].name); // Provide the current name as default

            if (newCode !== null && newName !== null) {
                // Update the accountant's data at the specified index
                this.accountants[index].code = newCode;
                this.accountants[index].name = newName;

                // Save the updated data to localStorage
                localStorage.setItem('accountants', JSON.stringify(this.accountants));

                // Refresh the table to reflect the changes
                this.displayAccountants();
            }
        }
    }

    private deleteAccountant(event: Event) {
        const target = event.target as HTMLButtonElement;
        const index = parseInt(target.dataset.index || '', 10);
        if (!isNaN(index) && index >= 0 && index < this.accountants.length) {
            // Remove the accountant's data at the specified index
            this.accountants.splice(index, 1);

            // Save the updated data to localStorage
            localStorage.setItem('accountants', JSON.stringify(this.accountants));

            // Refresh the table to reflect the changes
            this.displayAccountants();
        }
    }
}

// Initialize the TablePage class
const tablePage = new TablePage();
