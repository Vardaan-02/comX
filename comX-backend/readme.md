# Backend Submission by Pratham Jain 🚀

This backend project is designed to provide a secure and feature-rich platform for students and admins. The project is divided into two main parts:

- [Installation](#installation) ⚙️
- [Features](#features) ✨

## Installation ⚙️

Follow the steps below to set up and run the project:

1. **Clone this Git repository** 📂:
    ```bash
    git clone <repository-url>
    ```

2. **Run npm install** to install the dependencies 📦:
    ```bash
    npm install
    ```

3. **Set up the `.env` file** 🛠️:
    - Check the `.env.example` file for the required environment variables.
    - If you prefer, you can skip setting up the environment file. I’m ready to sacrifice my secrets for you! 😅

4. **Make sure you are not behind a proxy** 🚫, as MongoDB will not connect properly if you're using one.

5. **Run `setup.js` once** to configure your MongoDB 🍃:
    ```bash
    node setup.js
    ```
    - This script sets up necessary data, including a `superAdmin` user in your database. More details are provided in the Features section.

7. **Start the project** 🏁:
    ```bash
    node index.js
    ```

## Features ✨

### 1. Secure Authentication & Authorization 🔒
- Robust user authentication and role-based authorization ensure a secure environment.
- A `superAdmin` user is automatically created when `setup.js` is run. This user has the highest authority in the app 👑.
- Admins have a separate login and registration flow. To become an admin, email verification and `superAdmin` approval are required ✅.
- Users can register and log in directly via a simpler flow with email verification but without the need for approval from the `superAdmin` 📨.
- JWT tokens are returned in cookies 🍪 for secure and persistent connections.

### 2. Student Dashboard of Dreams 🎓
- Students can make posts and share resources (images, video links, PDF drive links, etc.) with other users.
- Every post is subject to admin approval 🔍.
- Students can view profiles of other users and see their posts 🧑‍🤝‍🧑.
- Students can track their posts' status—whether accepted, rejected, or pending—through a filtered view 📝.
- Students can delete their posts as needed 🗑️.

### 3. Admin Kingdom 👑
- Admins have the power to approve or reject student posts. A post becomes public only if an admin approves it 👍.
- Admins can view a queue of pending posts that require their attention 🕒.

### 4. Feed Garden 🌱
- All users can view approved posts, benefiting from the resources shared by others 🌍.
- Users can apply filters to view posts by category 🎯.
- The platform provides an in-house search functionality 🔎 to find specific posts in the feed.


## Contact 📞

**Name**: Pratham Jain  
**Enrollment Number**: IIT2023248  
**Phone Number**: 7707990624
