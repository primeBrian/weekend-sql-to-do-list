$(document).ready(onReady);

// my event click handlers
function onReady() {
    console.log('JQ loaded');
    $('.submit-task').on('click', submitBtn); 
    $('#viewTask').on('click', '.complete-btn', updateTask);
    $('#viewTask').on('click', '.delete-btn', deleteButton);
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
      appendToDom(response);
   // .catch(function (error){
     // console.error(error);
     // alet('something went wrong')
   //});   
        
      })
    
}
// end of getTask function

// POST call  for submitBtn function

function submitBtn() {
  console.log('submit button is clicked');
  let submitTask = {
    task: $('#task').val(),
    location: $('#location').val(),
    complete: false
  };
  $.ajax({
      type: 'POST',
      url: '/todo',
      data: submitTask
  }).then(function(response) {
    console.log('submit function works');
    $('#task').val(''),
    $('#location').val(''),
      getTask();
  }).catch(error => {
    console.log('POST function is not working', error);
  })
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

// put in a appendToDom function that loop through the objects for table rows
// Also to have a complete and delete button appear on the DOM
function appendToDom(array) {
  $('#viewTask').empty();
  for (let obj of array ) {
    $('#viewTask').append(`
      <tr id="${obj.id}" data-id="${obj.id}">
      <td>${obj.task}</td>
      <td>${obj.location}</td>
      <td><button class="complete-btn">Complete</button></td>
      <td><button class="delete-btn">Delete</button></td>
      </tr>
    `)
    if (obj.complete) {
      $(`#${obj.id}`).css('background-color', 'green')
    }
  } 
  
}