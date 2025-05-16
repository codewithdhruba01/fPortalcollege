## 📘 College Fee Payment Portal

This is a simple and responsive **College Fee Payment Portal** built using **HTML, CSS, and JavaScript**. The portal allows students to check their exam fee status by entering their Roll Number, which is matched against data from a connected **Google Sheet**.

---

### 🚀 Features

  * Search by Roll Number to view:
  * Student Name
  * Exam Name
  * Fee Amount
  * Payment Status (Paid/Unpaid)
  * Option to "Proceed to Pay" if the fee is unpaid
  * Fully responsive design (mobile-friendly)
  * Connected to a live Google Sheet for dynamic data fetch

---

### 🛠️ Tech Stack

* **HTML5** – Markup structure
* **CSS3** – Styling and responsiveness
* **JavaScript** – Dynamic data fetch and UI logic
* **Google Sheets** – Backend data source using Google Sheets API (GViz)

---

### 📂 How It Works

1. User enters their **Roll Number**.
2. JavaScript fetches data from a **public Google Sheet** in JSON format.
3. The result (Name, Exam, Amount, Status) is shown dynamically.
4. If the fee is **Unpaid**, a **"Proceed to Pay"** button is shown.

---

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/college-fee-portal.git
   cd college-fee-portal
   ```