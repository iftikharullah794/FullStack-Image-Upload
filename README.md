#  FullStack Image Upload

A full-stack web application that allows users to upload an image along with a caption. The uploaded image is stored securely on **ImageKit**, while the frontend and backend work together to handle the complete upload and feed functionality.

---

##  Features

*  Upload images with captions
*  Store uploaded images on ImageKit
*  Add captions to images
*  Responsive frontend interface
*  Display uploaded posts in a feed
*  Frontend and backend API integration
*  Fast development using Vite
*  Modern UI using Tailwind CSS
*  Organized backend using Config, Controllers, and Models

---

##  Technologies Used

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* JavaScript

### Backend

* Node.js
* Express.js
* MySQL
* ImageKit
* Multer
* dotenv

---

## 📁 Project Structure

```text
FullStack-Image-Upload/
│
├── Frontend/
│   │
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Create.jsx
│   │   │   └── Feed.jsx
│   │   │
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
├── Backend/
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── model/
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

##  How It Works

The application follows this flow:

```text
User
 │
 │ Select Image + Enter Caption
 ▼
Frontend (React + Vite)
 │
 │ HTTP Request
 ▼
Backend (Node.js + Express)
 │
 ├──────────────► ImageKit
 │                  │
 │                  └── Image Stored
 │
 └──────────────► MySQL
                    │
                    ├── Caption
                    └── Image URL
```

### Upload Process

1. User selects an image.
2. User enters a caption.
3. React frontend sends the image and caption to the backend.
4. Backend receives the uploaded image.
5. Image is uploaded to ImageKit.
6. ImageKit returns the image URL.
7. The image URL and caption are stored in the database.
8. The Feed page retrieves and displays the posts.

---

##  Frontend

The frontend is built with **React + Vite + Tailwind CSS**.

### Main Pages

#### Create Page

`Create.jsx`

This page handles:

* Image selection
* Caption input
* Form submission
* Sending image and caption to the backend

#### Feed Page

`Feed.jsx`

This page handles:

* Fetching posts from the backend
* Displaying uploaded images
* Displaying captions
* Showing posts in a feed layout

---

##  Backend

The backend is built using **Node.js and Express.js**.

The backend is organized into different folders to keep the project clean and maintainable.

### Config

The `config` folder handles configuration such as:

* MySQL database connection
* ImageKit configuration

### Controllers

The `controllers` folder handles:

* Receiving API requests
* Processing uploaded images
* Calling models
* Sending responses to the frontend

### Models

The `model` folder handles:

* Database operations
* Creating posts
* Fetching posts
* Managing post data

---

##  Image Storage

Images are stored using **ImageKit**.

The general process is:

```text
Frontend
   ↓
Backend
   ↓
ImageKit
   ↓
Image URL
   ↓
MySQL
```

The actual image file is stored on ImageKit, while the image URL is stored in the database.

---

##  Database

MySQL is used to store post information.

A post contains information such as:

```text
Post
├── ID
├── Caption
├── Image URL
└── Created At
```

---

##  Environment Variables

Create a `.env` file inside the Backend folder.

Example:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

> ⚠️ Never upload your `.env` file to GitHub. Add `.env` to `.gitignore`.

---

##  Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/FullStack-Image-Upload.git
```

### 2. Go to the Project

```bash
cd FullStack-Image-Upload
```

### 3. Install Frontend Dependencies

```bash
cd Frontend
npm install
```

### 4. Start Frontend

```bash
npm run dev
```

### 5. Install Backend Dependencies

Open another terminal:

```bash
cd Backend
npm install
```

### 6. Start Backend

```bash
node server.js
```

Or, if a development script is configured:

```bash
npm run dev
```

---

## 🔗 Application Architecture

```text
                 FullStack Image Upload
                         │
          ┌──────────────┴──────────────┐
          │                             │
      Frontend                       Backend
          │                             │
   React + Vite                   Node + Express
          │                             │
   Tailwind CSS                  ┌──────┴──────┐
          │                      │             │
     Create.jsx              ImageKit       MySQL
     Feed.jsx
          │                      │             │
          └──────────── API ─────┴─────────────┘
```

---

##  Project Goal

The main goal of this project is to understand and implement a complete **Full-Stack Image Upload System** using modern web technologies.

The project demonstrates how a React frontend communicates with a Node.js backend, how images can be uploaded to cloud storage using ImageKit, and how image URLs and captions can be stored and retrieved using MySQL.

---

##  Learning Outcomes

Through this project, the following concepts are practiced:

* React component development
* Vite project setup
* Tailwind CSS
* REST APIs
* Express.js
* File uploads with Multer
* ImageKit cloud storage
* MySQL database integration
* Frontend-backend communication
* Environment variables
* Full-stack project structure

---

##  Author

**Iftikhar Ullah**

Software Engineering Student
Full-Stack Developer

---

##  Support

If you find this project useful, consider giving the repository a  on GitHub.

