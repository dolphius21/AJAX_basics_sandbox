// Employees Widget
const employeeWidget = new XMLHttpRequest();
// Callback function
employeeWidget.onreadystatechange = function () {
  if (employeeWidget.readyState === 4) {
    let employees = JSON.parse(employeeWidget.responseText);
    let statusHTML = '<ul class = "bulleted">';
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
// Open request
employeeWidget.open('GET', 'data/employees.json');
// Send request
employeeWidget.send();


// Room Widget
const roomWidget = new XMLHttpRequest();
// Callback function
roomWidget.onreadystatechange = function () {
  if (roomWidget.readyState === 4) {
    let rooms = JSON.parse(roomWidget.responseText);
    let statusHTML = '<ul class = "bulleted">';
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
// Open request
roomWidget.open('GET', 'data/rooms.json');
// Send request
roomWidget.send();