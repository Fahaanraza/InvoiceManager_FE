# InvoiceManager_FE

This is the Frontend part of the app
for the backend part: https://github.com/Fahaanraza/server

The App is built and tested on physical IOS device

---

## Prequsities to run the app:
1. Node
2. ngrok(go to website and download then setup the config)
3. EXPO GO app on ios device

---
## Design for the app
### Frontend:

Use React native JavaScript to create a web application that replicates the design provided in the Figma.

Implement a form to add new invoices by the user for better testing and performance.

Implement a dashboard that shows the list of invoices. Each invoice should display the customer name, invoice number, and pending amount.

Allow the user to select an invoice from the list to edit the amount and select the payment method.

Once the user has made their changes, provide a "confirm" button that submits the updated invoice data to the backend.

On successful payment, display a success screen that acknowledges the payment success.

### Backend:

Create a database schema that accommodates the invoices, which includes fields for customer name, invoice number, amount, and payment status and more info from the BE sheeet.

Build an Insert API that allows the frontend to add new invoices to the database.

Build a Read API that retrieves the invoice data from the database and sends it to the frontend for display.

Build a Payment API that updates the invoice's pending amount and payment status after the user has made a payment.

Ensure that the backend APIs are secured and that appropriate authentication and authorization mechanisms are in place.

Test the backend APIs to ensure that they are working correctly, and handle any errors or exceptions that may arise during the process.




---

## Getting started with the App

1. Download the repo.
2. move to crediail folder from terminal.
3. run `npm i` to install node modules.
4. open terminal and run `ngrok http 3000`.
5. copy the Forwarding link from the termial.
5. open constants/url.js and paste the Forwarding link.
<img width="847" alt="Screenshot 2023-04-08 at 06 58 35" src="https://user-images.githubusercontent.com/47321056/230697416-6a0869b5-d246-477e-8513-31d4def3a1c2.png">
6. now run npm start from the creditail folder.
7. open camera on IOS device and scan the QR code from the terminal.
8.YOLA app is working on the IOS device.

---
## Major functionality’s 
1. adding invoice.
2. updating pending amount.
3. fetching all the invoices.

---
## TEST CASES

### Adding an invoice:
Test that a user can add a new invoice.
Test that the user must fill in all required fields (e.g. invoice number, rep name, date, amount).
Test that the user is shown an error message if they try to add an invoice with missing or invalid information.

### Fetching invoices:
Test that the user can view a list of all invoices.
Test that the user can see the list of updated invoices after adding/updating existing invoices without reloading.
Test that the user is shown an error message if there is an issue with fetching the invoices.

### Updating invoices:
Test that the user can update an existing invoice with pending amount.
Test that the user must fill in all required fields when updating an invoice.
Test that the user is shown an error message if they try to update an invoice with missing or invalid information.

### Error handling:
Test that the user is shown an error message if there is an issue with adding, fetching, updating an invoice.
Test that the error message provides helpful information on how to resolve the issue (e.g. network error, invalid input).












