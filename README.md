
# Kirayedar Mobile App

## Project Description
The **Kirayedar Mobile App** is a comprehensive rental management platform designed to facilitate transparent and secure transactions between tenants and landlords. By combining the roles of tenant and landlord into a single profile, the app offers a seamless and flexible experience for users managing rental properties or searching for accommodations. The app emphasizes fraud prevention, secure payments, and efficient communication between parties.

---

## Preview

Below is a full preview of the app:

![App Preview](preview/preview.gif)



## Key Features

1. **Role Management**
   - Users can manage both tenant and landlord roles within a single account.
   - Example: A landlord can list a property for rent and simultaneously rent another property as a tenant.

2. **Property Management**
   - Landlords can add properties with detailed information such as:
     - Rent amount
     - Location
     - Property type (Flat, House, Room, etc.)

3. **Fraud Prevention Mechanism**
   - Payments are held securely until both tenant and landlord confirm the transaction.
   - In case of disputes, the admin evaluates the provided proofs and finalizes the payment transfer.

4. **In-App Messaging System**
   - Tenants and landlords can communicate securely within the app without sharing personal contact details.

5. **Payment System**
   - Integrated secure payment gateway for hassle-free rent payments.
   - Payments are transferred only after transaction confirmation from both parties.

6. **Admin Role**
   - Admin monitors the app, resolves disputes, and ensures a fair transaction process.
   - Admin has the authority to make decisions based on submitted proofs in fraud cases.

7. **User-Friendly Interface**
   - Built with a clean and intuitive design for easy navigation.
   - Designed to be accessible for both Android and iOS users.

---

## Technology Stack

- **Frontend:** React Native
- **Backend:** Node.js
- **Database:** MongoDB
- **Payment Integration:** Secure payment gateway (e.g., Stripe or PayPal)
- **Version Control:** Git and GitHub

---

## Unique Functionalities

- Combined roles for tenants and landlords in a single account.
- Fraud-proof payment mechanism with transaction confirmation.
- In-app messaging system without sharing contact details.
- Admin role for monitoring and resolving conflicts.

---

## Installation Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/kirayedar-mobile-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd kirayedar-mobile-app
   ```

3. Install dependencies for both frontend and backend:
   ```bash
   npm install
   ```

4. Start the development servers:
   - **Frontend:**
     ```bash
     npx start
     ```
   - **Backend:**
     ```bash
     npm run dev
     ```

5. Run the app on an emulator or physical device:
   ```bash
   react-native run-android
   react-native run-ios
   ```

---

## Usage

- Sign up as a user to access tenant and landlord functionalities.
- Landlords can list properties and track rent payments.
- Tenants can browse properties, communicate with landlords, and make secure payments.
- Admin oversees the system and resolves disputes.

---

## Contribution Guidelines

1. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```

2. Commit your changes:
   ```bash
   git commit -m "Added feature description"
   ```

3. Push your branch to the repository:
   ```bash
   git push origin feature-name
   ```

4. Create a pull request on GitHub.

