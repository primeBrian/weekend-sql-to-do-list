$(document).ready(onReady);

// my event click handlers
function onReady() {
    console.log('JQ loaded');
    $('#submit-task').on('click', submitBtn); 
}
// function for my click handler
function submitBtn() {
    console.log('submit button clicked');

}

