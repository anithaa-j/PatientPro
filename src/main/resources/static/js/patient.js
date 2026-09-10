const BASE_URL = "http://localhost:8081/patients";

let editingId = null;

// ===============================
// PAGE LOAD
// ===============================

window.onload = function () {

    const params = new URLSearchParams(window.location.search);
    const keyword = params.get("search");

    if (keyword) {
        searchPatient(keyword);
    } else {
        loadPatients();
    }

};

// ===============================
// LOAD ALL PATIENTS
// ===============================

async function loadPatients() {

    try {

        const response = await fetch(BASE_URL);

        const patients = await response.json();

        displayPatients(patients);

    } catch (error) {

        console.error(error);

    }

}

// ===============================
// DISPLAY TABLE
// ===============================

function displayPatients(patients) {

    let rows = "";

    patients.forEach(patient => {

        rows += `

<tr>

<td>${patient.patientId ?? ""}</td>

<td>${patient.patientName ?? ""}</td>

<td>${patient.age ?? ""}</td>

<td>${patient.gender ?? ""}</td>

<td>${patient.bloodGroup ?? ""}</td>

<td>${patient.phoneNumber ?? ""}</td>

<td>${patient.disease ?? ""}</td>

<td>${patient.doctorName ?? ""}</td>

<td>${patient.admissionDate ?? ""}</td>

<td>${patient.height ?? ""}</td>

<td>${patient.weight ?? ""}</td>

<td>${patient.bloodPressure ?? ""}</td>

<td>${patient.allergies ?? ""}</td>

<td>${patient.emergencyContact ?? ""}</td>

<td>${patient.status ?? ""}</td>

<td>${patient.address ?? ""}</td>

<td>

<button class="edit"
onclick="editPatient(${patient.id})">

Edit

</button>

<button class="delete"
onclick="deletePatient(${patient.id})">

Delete

</button>

</td>

</tr>

`;

    });

    document.getElementById("patientTableBody").innerHTML = rows;

}

// ===============================
// SEARCH PATIENT
// ===============================

async function searchPatient(keyword) {

    try {

        const response = await fetch(BASE_URL + "/search/" + keyword);

        const patients = await response.json();

        displayPatients(patients);

    } catch (error) {

        console.error(error);

    }

}

// ===============================
// ADD / UPDATE
// ===============================

async function addPatient() {

    const patient = {

        patientId: document.getElementById("patientId").value,

        patientName: document.getElementById("patientName").value,

        age: parseInt(document.getElementById("age").value),

        gender: document.getElementById("gender").value,

        bloodGroup: document.getElementById("bloodGroup").value,

        phoneNumber: document.getElementById("phoneNumber").value,

        address: document.getElementById("address").value,

        disease: document.getElementById("disease").value,

        doctorName: document.getElementById("doctorName").value,

        admissionDate: document.getElementById("admissionDate").value,

        height: parseFloat(document.getElementById("height").value),

        weight: parseFloat(document.getElementById("weight").value),

        bloodPressure: document.getElementById("bloodPressure").value,

        allergies: document.getElementById("allergies").value,

        emergencyContact: document.getElementById("emergencyContact").value,

        status: document.getElementById("status").value

    };

    try {

        if (editingId == null) {

            await fetch(BASE_URL, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(patient)

            });

            alert("Patient Added Successfully");

        }

        else {

            await fetch(BASE_URL + "/" + editingId, {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(patient)

            });

            alert("Patient Updated Successfully");

            editingId = null;

            document.querySelector(".save-btn").innerHTML = "Save Patient";

        }

        clearForm();

        loadPatients();

    } catch (error) {

        console.error(error);

    }

}

// ===============================
// DELETE
// ===============================

async function deletePatient(id) {

    if (!confirm("Delete this patient?"))
        return;

    await fetch(BASE_URL + "/" + id, {

        method: "DELETE"

    });

    loadPatients();

}

// ===============================
// EDIT
// ===============================

async function editPatient(id) {

    const response = await fetch(BASE_URL + "/" + id);

    const patient = await response.json();

    editingId = id;

    document.getElementById("patientId").value = patient.patientId;

    document.getElementById("patientName").value = patient.patientName;

    document.getElementById("age").value = patient.age;

    document.getElementById("gender").value = patient.gender;

    document.getElementById("bloodGroup").value = patient.bloodGroup;

    document.getElementById("phoneNumber").value = patient.phoneNumber;

    document.getElementById("address").value = patient.address;

    document.getElementById("disease").value = patient.disease;

    document.getElementById("doctorName").value = patient.doctorName;

    document.getElementById("admissionDate").value = patient.admissionDate;

    document.getElementById("height").value = patient.height;

    document.getElementById("weight").value = patient.weight;

    document.getElementById("bloodPressure").value = patient.bloodPressure;

    document.getElementById("allergies").value = patient.allergies;

    document.getElementById("emergencyContact").value = patient.emergencyContact;

    document.getElementById("status").value = patient.status;

    document.querySelector(".save-btn").innerHTML = "Update Patient";

}

// ===============================
// CLEAR FORM
// ===============================

function clearForm() {

    document.getElementById("patientId").value = "";

    document.getElementById("patientName").value = "";

    document.getElementById("age").value = "";

    document.getElementById("gender").selectedIndex = 0;

    document.getElementById("bloodGroup").value = "";

    document.getElementById("phoneNumber").value = "";

    document.getElementById("address").value = "";

    document.getElementById("disease").value = "";

    document.getElementById("doctorName").value = "";

    document.getElementById("admissionDate").value = "";

    document.getElementById("height").value = "";

    document.getElementById("weight").value = "";

    document.getElementById("bloodPressure").value = "";

    document.getElementById("allergies").value = "";

    document.getElementById("emergencyContact").value = "";

    document.getElementById("status").selectedIndex = 0;

}