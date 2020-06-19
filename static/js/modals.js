// This JS file manages modal information and functions.

var modal = document.getElementById('modal_template');
var close_span = document.getElementById('modal_close');
var modal_header = document.getElementById('modal_header');
var modal_body = document.getElementById('modal_body');

var com_rep_button = document.getElementById('com_reports');

close_span.onclick = function (){
    modal.style.display = 'none';
}

window.onclick = function(event){
    if (event.target==modal){
        modal.style.display = 'none';
    }
}

com_rep_button.onclick = function() {
    modal.style.display = 'block';
    modal_header.innerHTML = 'This is a test modal header!';
    modal_body.innerHTML = 'This is a test modal body!';
}