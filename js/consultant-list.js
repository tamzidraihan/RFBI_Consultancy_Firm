// Load consultant data and display in the consultant list page
fetch("consultants.json")
    .then(response => response.json())
    .then(data => {
        const consultantList = document.getElementById("consultant-list");

        data.forEach(consultant => {
            consultantList.innerHTML += `
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="${consultant.image}" class="card-img-top" alt="${consultant.name}">
                        <div class="card-body">
                            <h5 class="card-title">${consultant.name}</h5>
                            <p class="card-text">${consultant.designation} at ${consultant.company}</p>
                            <a href="consultant-detail.html?id=${consultant.id}" class="btn btn-primary">View Profile</a>
                        </div>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => console.error("Error loading consultant data:", error));
