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












