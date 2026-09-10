document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // Mobile Sidebar
    // ==============================

    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
    const scrim = document.getElementById("scrim");

    if (menuBtn) {

        menuBtn.addEventListener("click", function () {

            sidebar.classList.toggle("open");
            scrim.classList.toggle("show");

        });

    }

    if (scrim) {

        scrim.addEventListener("click", function () {

            sidebar.classList.remove("open");
            scrim.classList.remove("show");

        });

    }


    // ==============================
    // Animated Statistics
    // ==============================

    const counters = document.querySelectorAll(".stat-value");

    counters.forEach(counter => {

        const target = parseInt(counter.dataset.count);

        let count = 0;

        const interval = setInterval(() => {

            count += Math.ceil(target / 80);

            if (count >= target) {

                count = target;

                clearInterval(interval);

            }

            counter.innerText = count;

        }, 20);

    });


    // ==============================
    // Weekly Bar Chart
    // ==============================

    const chart = document.getElementById("barChart");

    if (chart) {

        const visits = [70, 90, 60, 100, 80, 50, 40];

        const max = Math.max(...visits);

        visits.forEach((value, index) => {

            const bar = document.createElement("div");

            bar.className = "bar";

            if (index == 3) {

                bar.classList.add("today");

            }

            bar.style.height = "0";

            chart.appendChild(bar);

            setTimeout(() => {

                bar.style.height = (value / max * 100) + "%";

            }, 200);

        });

    }


    // ==============================
    // Add Patient Button
    // ==============================

    const addPatientBtn = document.getElementById("addPatientBtn");

    if (addPatientBtn) {

        addPatientBtn.addEventListener("click", function () {

            window.location.href = "patient.html";

        });

    }

});


// =========================================
// SEARCH PATIENT
// =========================================

function searchPatients() {

    let keyword = document.getElementById("searchInput").value.trim();

    if (keyword === "") return;

    window.location.href =
        "patient.html?search=" + encodeURIComponent(keyword);

}