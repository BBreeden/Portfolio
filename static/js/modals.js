// This JS file manages modal information and functions.

var modal = document.getElementById('modal_template');
var close_span = document.getElementById('modal_close');
var modal_header = document.getElementById('modal_header');
var modal_body = document.getElementById('modal_body');

var com_rep_button = document.getElementById('com_reports');
var login_tmps_button = document.getElementById('login_tmps');
var nuke_button = document.getElementById('nuke');
var sbtm_button = document.getElementById('sbtm');
var vhr_button = document.getElementById('vhr');
var yale500_button = document.getElementById('yale500')

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
    modal_body.innerHTML = 'Commercial reporting allows our users to gain data driven insight to their business. As of this writing, there are eight different report types that fall under this category. As the lead Quality Engineer on this project, I tested the report service distribution behaviors, the user interface, and the integrity of the data that made up each respective report. <br /><br />View a sample report.';
}

login_tmps_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Login Templates';
    modal_body.innerHTML = 'For each security system, there are logins that a user can configure for other individuals to log into their system. This is a key part of the commercial domain due to the need to allow employees and other support staff access to the security system. This project allows the users to create templates for their logins. This enables our users to same time and maintain consistency across different login types. <br /><br />As the lead QE on this project I leveraged a complex text plan to test various login template combinations, verified user perissions across different system levels, and monitored performance on stressed systems.';
}

nuke_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Point Hub';
    modal_body.innerHTML = 'As the lead integration QE for this project, I collaborated with the Security Panels team to develop a new generation of security hub for our PointCentral partner. The Point Hub is a security hub that takes advantage of a dedicated cell connection, allowing the device to operate even if there is a loss of power and/or broadband signals. <br /><br /> <a href="https://www.pointcentral.com/hardware-partners/" target="_blank">Learn more about the Point Hub.</a>';
}

sbtm_button.onclick = function(){
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Smarter Business Temperature Monitoring';
    modal_body.innerHTML = 'Our commercial customers work in a variety of industries, including industries that leverage walk-in freezers, refrigeration units, and climate controlled areas. To assist them in gaining insight about these temperature sensitive areas, we developed the Smarter Business Temperature Monitoring system.<br /><br /> As the lead QE on this project, I extensively tested temperature sensor integration, temperature reporting, sensor dashboards, and analyzed overall feature performance.';
}

vhr_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.display = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Video Health Report'
    modal_body.innerHTML = 'One of the biggest concerns for our customers is security. The foundation of every good security system is the video cameras. Out team developed a report that gives our customers insight on the status of their video cameras. This includes performance metrics, camera status, camera snapshots, and recording hardware updates (known as a <a href="https://www.alarmgrid.com/faq/how-does-an-alarm-dot-com-svr-work" target="_blank">Stream Video Recorder</a>). <br /><br />As the lead on this quality project, I developed a test plan to verify each, individual performance metric. I also tested the report distribution systems and monitored performance with stressed video accounts. View a sample Video Health Report.'
}

yale500_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.display = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Yale 500 Series Lock Intergration'
    modal_body.innerHTML = 'This project will always have a soft spot for me because this was the first certification project that I took the lead on. This project centered around the Yale 500 Series locks. This included hardware enrollment, security testing, user code management, and automation integrations. <br /><br />Learn more about these locks <a href="https://us.yalehome.com/en/news/news/2019/yale-launches-product-line-for-professional-installers/" target="_blank">here</a>.'
}