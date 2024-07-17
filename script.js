// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // Gets user input to create and return an array of employee objects
  let employeesArray = [];

  // Contiues to prompt user for employee info until they choose "cancel"
  while (true) {
    // Prompts user to enter employee first name
    const firstNameResponse = prompt("Enter Employee First Name");

    // If user clicks cancel, break out of loop
    if (firstNameResponse == null) {
      break;
    }
    // Prompts user to enter employee last name
    const lastNameResponse = prompt("Enter Employee Last Name");
    if (lastNameResponse == null) {
      break;
    }
    // Prompts user to enter employee salary
    let salaryResponse = prompt("Enter Employee Salary");
    if (salaryResponse == null) {
      break;
    }
    // Evaluates if user inputs an number
    // If user enters any data type other than a number, salary becomes $0.00
    if (isNaN(salaryResponse)) {
      salaryResponse = 0;
    }
    //Creates object to store employee first name, last name, and salary
    let newEmployee = {
      firstName: firstNameResponse,
      lastName: lastNameResponse,
      salary: salaryResponse,
    };
    //Adds object to end of the array
    employeesArray.push(newEmployee);
    //Prompts user to add employee or cancel
    const contineResponse = confirm("Add Another Employee?");
    if (!contineResponse) {
      break;
    }
  } // end of while loop
};

// Passes employee array to calling function
return employeesArray;

// Displays the average salary
const displayAverageSalary = function (employeesArray) {
  // Calculates and displays the average salary for all employees
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum = sum + employeesArray[i].salary;
  }
  const average = sum / employeesArray.length;
  console.log(
    "Average: " +
      // Formats salary as currency
      average.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Formats salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

// Function to get Employee information and add it to the html page
const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
