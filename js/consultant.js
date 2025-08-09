// Function to get query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fetch consultant data from the JSON file
fetch("consultants.json")
    .then(response => response.json())
    .then(data => {
        const consultantId = getQueryParam("id"); // Get the ID from URL
        const consultant = data.find(c => c.id == consultantId);

        if (consultant) {
            document.getElementById("consultant-name").textContent = consultant.name;
            document.getElementById("consultant-qualifications").textContent = consultant.qualifications;
            document.getElementById("consultant-designation").textContent = consultant.designation;
            document.getElementById("consultant-company").textContent = consultant.company;
            document.getElementById("consultant-topic").textContent = consultant.topic;
            document.getElementById("consultant-description").textContent = consultant.description;
            document.getElementById("consultant-image").src = consultant.image;
            document.getElementById("consultant-video").src = consultant.video;
        } else {
            document.body.innerHTML = "<h2 class='text-center mt-5'>Consultant Not Found</h2>";
        }
    })
    .catch(error => console.error("Error fetching consultant data:", error));
