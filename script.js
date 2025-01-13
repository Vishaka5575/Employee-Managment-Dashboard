// Add employee to the table
document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form data
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;
  
    // Create a new table row
    const row = document.createElement('tr');
  
    // Create table data cells
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
  
    const positionCell = document.createElement('td');
    positionCell.textContent = position;
  
    const departmentCell = document.createElement('td');
    departmentCell.textContent = department;
  
    const salaryCell = document.createElement('td');
    salaryCell.textContent = '$' + salary;
  
    // Create delete button
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
      row.remove();
    });
  
    // Append cells to the row
    actionCell.appendChild(deleteButton);
    row.appendChild(nameCell);
    row.appendChild(positionCell);
    row.appendChild(departmentCell);
    row.appendChild(salaryCell);
    row.appendChild(actionCell);
  
    // Append the row to the table
    document.querySelector('#employeeTable tbody').appendChild(row);
  
    // Clear form fields after submission
    document.getElementById('employeeForm').reset();
  });
  