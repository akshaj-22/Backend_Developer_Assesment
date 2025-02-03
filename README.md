# RESTful API MANAGEMENT

## Overview  
This RESTful API is used to manage groups, users, and notifications. It makes it possible to administer groups, create user profiles, and send out notifications automatically when a new member joins.

## 🛠️ Tech Stack  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose ORM   
- **Testing:** Postman 🚀 (for API request validation)  

## 🚀 Installation  
1. **📥 Clone the repository:**  
   ```sh  
   git clone https://github.com/akshaj-22/Backend_Developer_Assesment.git  
   cd Backend_Developer_Assesment  
   ```

2. **📦 Install dependencies:**
   ```sh
   npm install
   ```
3. **⚙️ Create a `.env` file** and add MongoDB connection:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/Backend
   ```
4. **🚀 Start the server:**
   ```sh
   node server.js
   ```

## 📡  API Endpoints
### 👤 User Management
| Method | Endpoint | Description |
|--------|------------------|-------------------------|
|➕ POST | `/users/register` | Create a new user |
|📋 GET | `/users/get` | Retrieve all users |
| ✏️ PUT | `/users/:id` | Update a user's details |
|🗑️ DELETE | `/users/:id` | Delete a user |

### 👥 Group Management
| Method | Endpoint | Description |
|--------|------------------------------|----------------------------------|
|➕POST | `/groups` | Create a new group |
|➕ POST | `/groups/:groupId/add` | Add a member to a group |

### 🔔 Notification Management
| Method | Endpoint | Description |
|--------|-----------------------------|--------------------------------|
|📋 GET | `/notifications/:userId` | Retrieve notifications based on the userId |

## 🧪 Testing with Postman
1. **Published Link** : [Link](https://documenter.getpostman.com/view/39568175/2sAYX3sPrN)
2. **🔁 Replace `:id`, `:userId`, and `:groupId` with actual values**
3. **🚀 Run requests and validate responses**

