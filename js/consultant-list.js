// Load consultant data and display in the consultant list page
fetch("consultants.json")
    .then(response => response.json())
    .then(data => {
        const consultantList = document.getElementById("consultant-list");

        data.forEach(consultant => {
            consultantList.innerHTML += `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${consultant.image}" class="card-img-top" alt="${consultant.name}" style="height: 250px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${consultant.name}</h5>
                            <p class="card-text text-muted">${consultant.designation}</p>
                            <p class="card-text text-muted small">${consultant.company}</p>
                            <p class="card-text">${consultant.qualifications}</p>
                            <div class="mt-auto">
                                <a href="consultant-detail.html?id=${consultant.id}" class="btn btn-primary w-100">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => console.error("Error loading consultant data:", error));
