// This JS file manages modal information and functions.

var modal = document.getElementById('modal_template');
var close_span = document.getElementById('modal_close');
var modal_header = document.getElementById('modal_header');
var modal_body = document.getElementById('modal_body');

var com_rep_button = document.getElementById('com_reports');
var login_tmps_button = document.getElementById('login_tmps');
var nuke_button = document.getElementById('nuke');

close_span.onclick = function (){
    modal.style.display = 'none';
}

window.onclick = function(event){
    if (event.target==modal){
        modal.style.display = 'none';
    }
}

com_rep_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Commercial Reports';
    modal_body.innerHTML = 'Commercial reporting allows our users to gain data driven insight to their business. As of this writing, there are eight different report types that fall under this category. As the lead Quality Engineer on this project, I tested the report service distribution behaviors, the user interface, and the integrity of the data that made up each respective report. <br /><br />This feature is currently live to our commercial customers. View a sample report.';
}

login_tmps_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Login Templates';
    modal_body.innerHTML = 'For each security system, there are logins that a user can configure for other individuals to log into their system. This is a key part of the commercial domain due to the need to allow employees and other support staff access to the security system. This project allows the users to create templates for their logins. This enables our users to same time and maintain consistency across different login types. <br /><br />This feature is currently live to our commercial customers.';
}

nuke_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Point Hub';
    modal_body.innerHTML = 'As the lead integration QE for this project, I collaborated with the Security Panels team to develop a new generation of security hub for our PointCentral partner. The Point Hub is a security hub that takes advantage of a dedicated cell connection, allowing the device to operate even if there is a loss of power and/or broadband signals. <br /><br /> <a href="https://www.pointcentral.com/hardware-partners/" target="_blank">Learn more about the Point Hub.</a>';
}