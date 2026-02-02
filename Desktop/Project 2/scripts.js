// Get main element from index
const form = document.getElementById("e-form");
const table = document.getElementById("etable-body");
const searchInput = document.getElementById("searchInput");

//show the employee table when register button is pressed 
function showTable(section) {
    document.getElementsByClassName("registerSection")[0].style.display = "none";
    document.getElementById("employeeSection").style.display = "none";
    // show the table
    if (section == "register") {
        document.getElementsByClassName("registerSection")[0].style.display = "block";
    } else {
        document.getElementById("employeeSection").style.display = "block";
    }
}

// when the submit button is pressed, add it to the table
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // get all the form info into variables
    const name = document.getElementById("tname").value;
    const email = document.getElementById("temail").value;
    const position = document.getElementById("tposition").value;
    const department = document.getElementById("tdepartment").value;
    const salary = document.getElementById("tsalary").value;
    const date = document.getElementById("tstart").value;
    
    console.log(name, email, position, department, salary, date);
    // create a row element for the table
    const row = document.createElement("tr");

    row.innerHTML =`
        <td>${name}</td>
        <td>${email}</td>
        <td>${position}</td>
        <td>${department}</td>
        <td>$${salary}</td>
        <td>${date}</td>
        <td><button class="delete-btn">Delete</button></td>
        `;
    // add a delete button
    row.querySelector(".delete-btn").addEventListener("click", ()=> row.remove());    
    
    table.appendChild(row);
    form.reset();
    showTable("employees");
});


// search the list when you type in input field
searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    const rows = table.querySelectorAll('tr');
    rows.forEach(rows => {
        const nameCell = rows.querySelector("td:first-child").textContent.toLowerCase()
        rows.style.display = nameCell.includes(filter)? "": "none";
    });
});

function clearForm(){
    document.querySelectorAll("form input, form select").forEach(el => el.value = "");
}