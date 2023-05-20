$(document).ready(onReady);

// my event click handlers
function onReady() {
    console.log('JQ loaded');
    $('#submit-task').on('click', submitBtn); 
    $('#viewTask').on('click', '#complete-btn', updateTask);// call in the put function
    $('#viewTask').on('click', '#delete-btn', deleteButton);// call in the delete function
        getTask();
}

// putting in the ajax call to get task
function getTask(){
    $('#viewTask').empty();
    console.log( 'in getTask' );

   
    
    $.ajax({
      type: 'GET',
      url: '/todo'
    }).then(function(response) {
      console.log('GET, /todo', response);
      for (let i= 0; i , response.length; i++) {
        if (response[i].complete === true){
          console.log('complete task: ', response[i].complete)
        $('#viewTask').append(`
        <tr data-id=${response[i].id}>
         <td>${response[i].task}</td>
         <td>${response[i].location}</td>
         <td>💚</td>
         <td><button id="delete-btn">Delete</button></td>
        </tr>
  
        `);} 
        else {
          $('#viewTask').append(`
        <tr data-id=${response[i].id}>
         <td>${response[i].task}</td>
         <td>${response[i].location}</td>
         <td><button id="complete-btn"><Complete</button></td>
         <td><button id="delete-btn">Delete</button></td>
        </tr>
  
        `);} 
      }
    }).catch(error => {
      console.log('Error', error);
    })
}
// end of getTask function

// POST call submitBtn

function submitBtn() {
  console.log('submit button is clicked');
  let submitTask = {
    task: $('#task').val(),
    location: $('#location').val(),
    
  };
  $.ajax({
      type: 'POST',
      url: '/todo',
      data: submitTask
  }).then(function(response) {
    $('#task').val(''),
    $('#location').val(''),
      getTask();
  });
};

// The PUT function to update task
function updateTask(event) {
  event.preventDefault();
  console.log('Task ready for update')
  const idToUpdate = $(this).closest('tr').data('id');

  $.ajax({
      type: 'PUT',
      url: `/todo/${idToUpdate}`,
  }).then(function (response) {
      console.log(response)
      getTask();
  }).catch(function (error) {
      console.log('Error with updating task : ', error);
  })
}

// delete button function with ajax
function deleteButton() {

  const taskToDelete = $(this).closest('tr').data('id');

  console.log("Inside delete function. Task to delete:", taskToDelete);

  $.ajax({
      type: 'DELETE',
      url: `/todo/${taskToDelete}`
  }).then(function (response) {
      getTask();
  }).catch(function (error) {
      console.log('Error with delete function: ', error);
  })
}
