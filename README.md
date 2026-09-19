PatientPro 🏥

PatientPro is a web-based Patient Management System designed to simplify and organize hospital patient records. It provides a clean dashboard and allows healthcare staff to add, view, search, update, and delete patient information.

🚀 Features
🔐 Login interface
📊 Interactive dashboard
👤 Add new patients
📋 View patient records
🔍 Search patients by:
Patient ID
Patient Name
Phone Number
✏️ Edit patient details
🗑️ Delete patient records
🩺 Store medical information
📅 Store admission details
📱 Responsive and professional UI
💾 MySQL database integration
🔄 REST API-based backend
🛠️ Technologies Used
Frontend
HTML
CSS
JavaScript
Backend
Java
Spring Boot
Spring Data JPA
Hibernate
Database
MySQL
Development Tools
Visual Studio Code
Maven
Git & GitHub
📁 Project Structure
```text
PatientPro/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/patient/PatientPro/
│       │       ├── controller/
│       │       ├── entity/
│       │       ├── repository/
│       │       └── service/
│       │
│       └── resources/
│           ├── static/
│           │   ├── css/
│           │   ├── js/
│           │   ├── images/
│           │   ├── login.html
│           │   ├── dashboard.html
│           │   └── patient.html
│           │
│           └── application.properties
│
├── pom.xml
├── mvnw
└── mvnw.cmd
```
👨‍💻 Patient Information

The system stores details including:

Patient ID
Patient Name
Age
Gender
Blood Group
Phone Number
Address
Disease
Doctor Name
Admission Date
Height
Weight
Blood Pressure
Allergies
Emergency Contact
Patient Status
⚙️ How to Run
1. Clone the repository
git clone https://github.com/anithaa-j/PatientPro.git
2. Open the project
cd PatientPro
3. Configure MySQL

Create the required database in MySQL and update the database configuration in:

src/main/resources/application.properties

Example:

spring.datasource.url=jdbc:mysql://localhost:3307/patientdb
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
4. Run the application

On Windows:

.\mvnw.cmd spring-boot:run

The application runs on:

http://localhost:8081
🔄 Main Operations
```text
Login
  ↓
Dashboard
  ↓
Add Patient
  ↓
Save to MySQL
  ↓
View Patient Records
  ↓
Search / Edit / Delete
```
🎯 Project Objective

The main objective of PatientPro is to provide a simple digital solution for managing patient records efficiently. It reduces dependence on manual record handling and makes patient information easier to access and manage.

🔮 Future Enhancements
Appointment management
Doctor management
Medicine management
Patient profile pages
PDF/Excel report generation
Advanced dashboard analytics
Role-based authentication
Notifications and reminders