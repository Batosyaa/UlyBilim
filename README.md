# UlyBilim - Learning Management System

UlyBilim is a responsive and interactive learning management platform tailored for students, parents, and educators. The system includes login and registration flows, dynamic dashboards, technical support with live chat, and ticket submission functionality.

---

## 📁 Project Structure

```
├── index.html               # Landing page (not included here)
├── log_in.html              # User login page
├── profileParent.html       # Parent dashboard with student data
├── tech_support.html        # Support page with FAQ, chat and ticket form
├── css/
│   ├── log_in.css
│   ├── tech_support.css
│   └── about us.css
├── js/
│   └── tech_support.js      # Handles chat logic, email sending, and FAQ loading
├── audio/
│   └── notification.wav     # Sound for support reply
```

---

## ✅ Features

### 🔐 Authentication

* Clean login page using `log_in.html`

### 📊 Parent Dashboard (`profileParent.html`)

* Student performance indicators
* Attendance and assignment status
* Recent test results
* Subject-wise progress bars
* Teacher feedback section
* Contact teacher modal

### 🛠️ Tech Support Page (`tech_support.html`)

* FAQ section with dynamic questions
* Live support chat interface (auto-reply only)
* Submit support tickets via **EmailJS**

---

## 📦 Technologies Used

* HTML5, CSS3 (Bootstrap 5)
* JavaScript (Vanilla)
* [EmailJS](https://emailjs.com/) for form-based email sending
* AIML API (initially used for AI chat integration)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
https://github.com/your-username/ulybilim.git
```

### 2. Configure EmailJS

* Add this line to `tech_support.html`:

  ```html
  <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
  ```
* Replace in `tech_support.js`:

  ```js
  emailjs.init("YOUR_PUBLIC_KEY");
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
  ```
* Use your EmailJS credentials.

---

## 📌 Notes

* AI chat feature was removed in the latest version.
* All forms are functional without backend (EmailJS handles submission).
* Designed for educational centers and families.

---

## 👤 Author

**UlyBilim Team** – for learning and academic progress.

> © 2025 UlyBilim. All rights reserved.
