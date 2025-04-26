
# School Management APIs

This project is a set of APIs developed using **Node.js** and **Express.js** to manage school records. The system allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

---

## Features

- **Add a new school**: Allows users to add school details such as name, address, latitude, and longitude.
- **List all schools**: Fetches and sorts the schools by proximity to a user's location (latitude, longitude).
- **Error Handling**: Returns meaningful error messages when something goes wrong.
- **MySQL Database Integration**: The application uses **MySQL** for storing school data, hosted on **Railway**.
- **Hosted API**: The APIs are deployed on **Render** and can be accessed publicly for testing.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL (Hosted on Railway)
- **Hosting**: Render
- **Tools**: Postman (for testing the APIs)

---

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/amitver01/APIs-for-School-Management.git
cd APIs-for-School-Management
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory of the project and add your **Railway MySQL database connection string** like this:

```bash
DB_URL=mysql://root:<your-db-password>@ballast.proxy.rlwy.net:<port>/railway
```

> **Note**: Replace `<your-db-password>` and `<port>` with your actual credentials from Railway.

### 4. Run the Application

Start the backend server:

```bash
npm start
```

This will start the server on your local machine.

---

## API Endpoints

### 1. **Add School**
- **Method**: `POST`
- **Endpoint**: `/addSchool`
- **Request Body**:
  ```json
  {
    "name": "St. Anthony Public School",
    "address": "Jai Prakash Nagar, Madhuban Nagar, Alambagh, Lucknow, Uttar Pradesh",
    "latitude": 26.807305,
    "longitude": 80.904397
  }
  ```
- **Description**: Adds a new school to the database.

### 2. **List Schools**
- **Method**: `GET`
- **Endpoint**: `/listSchools`
- **Query Parameters**: 
  - `latitude`: User's latitude (e.g., 26.807305)
  - `longitude`: User's longitude (e.g., 80.904397)
- **Description**: Fetches the list of all schools and sorts them by proximity to the provided latitude and longitude.

---

## Live API Endpoints

You can test the APIs using the following live endpoints:

- [Add School](https://apis-for-school-management-tb5m.onrender.com/addSchool)
- [List Schools](https://apis-for-school-management-tb5m.onrender.com/listSchools)

---

## Postman Collection

To easily test the API, you can use the following Postman collection:

[**Postman Collection Link**](https://www.postman.com/security-cosmologist-67148063/amit-work/collection/k8kpzjt/school-management?action=share&creator=37796312)

---

## Author

- **Amit Verma**
- GitHub: [amitver01](https://github.com/amitver01)

---

## Notes

- The **MySQL database** is hosted on **Railway**. Make sure to replace the database URL in the `.env` file with the correct credentials.
- If deploying locally, ensure that your **MySQL server** is up and running.
- To deploy this project on **Render**, follow the [Render documentation](https://render.com/docs).
