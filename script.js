document.getElementById('employeeForm').addEventListener('submit', function(event) {
    // This line selects the button with the ID submitButton and adds an event listener to it. 
    // The event listener waits for the click event and then executes the provided function.
    event.preventDefault();

    // Without this line, when we click submit, it will reload the page and default it into blank elements. 

    // We get form values below
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const employeeID = document.getElementById('id').value;
    const jobTitle = document.getElementById('title').value;
    const annualSalary = parseFloat(document.getElementById('annualSalary').value);

    // For each input field, we use the document.getElementById method to access the input elements by their IDs.

    addEmployeeRow(firstName, lastName, employeeID, jobTitle, annualSalary);

    // Add new employee row to the table
    // This line calls the addEmployeeRow function below with the input values to add a new row to the table.

    function addEmployeeRow(firstName, lastName, employeeID, jobTitle, annualSalary) {
        const tableBody = document.querySelector('#employeeTable tbody');
        // This line selects the <tbody> element within the table with the ID employeeTable.
        const row = document.createElement('tr');
        // This line creates a new <tr> element, representing a table row.

        row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeID}</td>
            <td>${jobTitle}</td>
            <td>$${annualSalary.toLocaleString()}</td>
            <td><button class="deleteBtn">Delete</button></td>`;

        // This block sets the inner HTML of the row, creating <td> elements for each piece of employee data and adding a delete button.

        // Add event listener to the delete button
        row.querySelector('.deleteBtn').addEventListener('click', function() {
            deleteEmployeeRow(row, annualSalary / 12);

            // This line selects the delete button within the new row and adds an event listener to it.
            // When the delete button is clicked, it calls the deleteEmployeeRow function.
        });

        tableBody.appendChild(row);

        // This line appends the new row to the table body, making it visible in the table.
        // If we don't add this, the new employee row will not be added to the table once we enter the data to the input ID.
        // This means that, even though the new row is created and populated with the employee's data, it will not be inserted into the DOM.
    }

    // Update the total monthly cost
    updateTotalMonthlyCost(annualSalary / 12);

    // This line updates the total monthly cost by calling the updateTotalMonthlyCost function and passing the monthly salary (annual salary divided by 12).
    // Unless we have this line, the monthly cost will not be updated after each employee is added or deleted.

    // Clear form inputs
    document.getElementById('employeeForm').reset();

    // This will reset the employeeForm input ID once the info is entered and the function runs.
    // If we don't have this, the data we enter in the input fields won't reset even after a new employee is added.
});

function deleteEmployeeRow(row, monthlySalary) {
    row.remove();
    // This line removes the specified row from the table when we click delete.

    updateTotalMonthlyCost(-monthlySalary);
    // This line updates the total monthly cost by subtracting the deleted employee's salary.
}

function updateTotalMonthlyCost(updatedMonthlySalary) {
    // Defined a function that updates the total monthly cost by adding or subtracting a given amount (change).
    const totalCostElement = document.getElementById('totalMonthlyCost');

    let totalMonthlySalary = parseFloat(totalCostElement.textContent.replace(/[$,]/g, ''));

    // parseFloat handles numbers with decimal points, making it suitable for financial calculations where precision is important.
    // when I didn't use parseFloat, it gave me weird decimal points on the totalMonthlyCost.

    // totalCostElement.textContent
    // This part gets the current text inside the totalMonthlyCost element.
    // example the current text is "$15,000.00".

    // This part removes the dollar sign ($) and commas (,) from the text.
    // .replace(/[$,]/g, '') is a method that replaces all symbols of $ and , with nothing (or it removes them).
    // After this step, "$15,000.00" becomes "15000.00".

    totalMonthlySalary += updatedMonthlySalary;

    console.log("Updated Total Cost: ", totalMonthlySalary);

    totalCostElement.textContent = `$${totalMonthlySalary.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    }
}
