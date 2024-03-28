

# Static Page Rendering with Node.js Express and Pug

This project demonstrates how to render static pages using Node.js, Express, and the Pug templating engine. It provides a simple and efficient way to create dynamic HTML content by separating the view logic from the application logic.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

4. Visit `http://localhost:3000` in your web browser to view the static pages rendered by the application.

## Project Structure

this is an example project structure:

```
.
├── views/                  # Pug template files
│   ├── index.pug           # Main page template
│   └── about.pug           # About page template
├── public/                 # Static assets (CSS, JavaScript, images)
│   ├── css/
│   ├── js/
│   └── img/
├── routes/                 # Express route handlers
│   └── index.js            # Route handlers for main and about pages
├── app.js                  # Express application configuration
└── README.md               # Project documentation
```

## Usage

### Creating New Pages

To create new static pages:

1. Add a new Pug template file in the `views/` directory.
2. Create a new route handler in the `routes/` directory to render the page.
3. Update the navigation links in the existing templates to navigate to the new page.

### Adding Stylesheets and JavaScript

To include stylesheets and JavaScript files:

1. Place CSS files in the `public/css/` directory.
2. Place JavaScript files in the `public/js/` directory.
3. Link to these files in the Pug templates using the appropriate tags.

### Modifying Templates

To modify existing templates:

1. Edit the Pug files in the `views/` directory to update the HTML structure and content.
2. Use Pug's syntax to include dynamic content or logic in the templates as needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

