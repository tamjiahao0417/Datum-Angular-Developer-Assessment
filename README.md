# Datum Web Developer Intern Assessment: Address Book

This project is a simple Address Book application built with **Angular 17 (Standalone Components)** and **DevExtreme**. It features full CRUD (Create, Read, Update, Delete) functionality with all data stored locally in-memory, fulfilling the requirements for the Datum Web Developer Intern Assessment.

## Features
* **View Contacts:** Displays a list of contacts in a DevExtreme DataGrid.
* **Add Contact:** Opens a custom DevExtreme Popup modal to add a new contact.
* **Edit Contact:** Clicking a row opens the modal with populated data. Fields are read-only until the "Edit" button is clicked.
* **Delete Contact:** Deletes a record with a native DevExtreme confirmation dialog.
* **Validation:** Enforces required fields, email formatting, number-only postcodes, and no-letter phone numbers using `dx-validation-group`.
* **Dynamic Address:** Automatically combines Street, State, and Postcode into a single column on the DataGrid.

## Application Screenshot
<img width="506" height="624" alt="image" src="https://github.com/user-attachments/assets/64bf15b5-48c5-40e9-954a-0ebbe06249bb" />
<img width="1900" height="178" alt="image" src="https://github.com/user-attachments/assets/b92e95a7-a851-4652-84df-b92ee75d5b85" />

## Technologies Used
* **Angular 17** (Standalone Components architecture)
* **DevExtreme & DevExtreme-Angular** (UI Components: DataGrid, Popup, TextBox, SelectBox, Buttons, Validation)
* **TypeScript / HTML / CSS**

## How to Run the Project Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and the [Angular CLI](https://angular.io/cli) installed on your machine.

### Installation & Run Steps

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/tamjiahao0417/Datum-Angular-Developer-Assessment.git](https://github.com/tamjiahao0417/Datum-Angular-Developer-Assessment.git)
