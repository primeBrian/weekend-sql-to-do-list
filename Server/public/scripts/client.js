$(document).ready(onReady);

// my event click handlers
function onReady() {
    console.log('JQ loaded');
    $('#submit-task').on('click', submitBtn); //  call out in POST function
    $('#taskTable').on('click', '#complete-btn', completeButton);
    $('#taskTable').on('click', '#delete-btn', deleteButton);
        getTask();
}
// function for my click handler for the submitBtn
// function submitBtn() {
//     console.log('submit button clicked');

// }
// putting in the ajax call to get task
function getTask(){
    $('#taskTable').empty();
    console.log( 'in getTask' );
    // ajax call to server to get task
    $.ajax({
      type: 'GET',
      url: '/todo'
    }).then(function(response) {
      console.log('GET, /todo', response);
      for (let i= 0; i , response.length; i++) {
        if (response[i].complete_task == 'true'){
          console.log('complete task: ', response[i].complete_task)
        $('#taskTable').append(`
        <tr data-id=${response[i].id}>
         <td>${response[i].task}</td>
         <td>${response[i].location}</td>
         <td>${response[i].complete_task}</td>
         <td>${response[i].delete}</td>
         <td>💚<button id="complete-btn"><Complete</button></td>
         <td><button id="delete-btn">Delete</button></td>
        </tr>
  
        `);} 
        else if (response[i].complete_task == 'false'){
        $('#taskTable').append(`
        <tr data-id=${response[i].id}>
         <td>${response[i].task}</td>
         <td>${response[i].location}</td>
         <td>${response[i].complete_task}</td>
         <td>${response[i].delete} <button id="transfer-btn">Transfer?</button></td>
         <td><button id="complete-btn"><Complete</button></td>
         <td><button id="delete-btn">Delete</button></td>
        </tr>
        `)}
        else {
          $('#taskTable').append(`
        <tr data-id=${response[i].id}>
         <td>${response[i].task}</td>
         <td>${response[i].location}</td>
         <td>${response[i].complete_task}</td>
         <td>${response[i].delete}</td>
         <td><button id="complete-btn"><Complete</button></td>
         <td><button id="delete-btn">Delete</button></td>
        </tr>
  
        `);} 
      }
    }).catch(error => {
      console.log('Error', error);
    })
}
