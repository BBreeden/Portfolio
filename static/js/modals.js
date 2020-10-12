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
var yale500_button = document.getElementById('yale500');
var test_lab_button = document.getElementById('test_lab');
var qe_sql_button = document.getElementById('qe_sql');
var water_valve_meter_button = document.getElementById('water_valve_meter');
var jasco_contact_button = document.getElementById('jasco_contact');

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
    modal_body.innerHTML = 'Commercial reporting allows our users to gain data-driven insight to their business. As of this writing, there are eight different report types that fall under this category. As the lead Quality Engineer on this project, I tested the report service distribution behaviors. In addition, I ensured the user interface and data integrity met all expectations.';
}

login_tmps_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Login Templates';
    modal_body.innerHTML = 'For each security system, there are logins associated with that system. The user can configure these logins for a variety of different uses. The Login Templates feature allows the user to configure a single template and assign the template to multiple logins. This enables our users to save time and maintain consistency across different logins. <br /><br />As the lead QE on this project, I leveraged a complex text plan to test various login template combinations. I verified user permissions across different system levels and monitored performance on stressed systems.';
}

nuke_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Point Hub';
    modal_body.innerHTML = 'Security hubs are the center of any security system. They allow the security devices to communicate with each other. This includes locks, thermostats, contact sensors, and video cameras. <br /><br /> As the lead Commercial QE for this project, I collaborated with the Security Panels team to develop a new generation of security hub for our PointCentral partner. The Point Hub is a security hub that takes advantage of a dedicated cell connection, allowing the device to operate even if there is a loss of power and/or broadband signals. The primary use case for this device is short term and long term rental properties. <br /><br /> <a href="https://www.pointcentral.com/hardware-partners/" target="_blank">Learn more about the Point Hub.</a>';
}

sbtm_button.onclick = function(){
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Smarter Business Temperature Monitoring';
    modal_body.innerHTML = 'Our commercial customers work in a variety of industries, including industries that leverage walk-in freezers, refrigeration units, and climate controlled areas. To our customers with gaining insight about these temperature sensitive areas, we developed the Smarter Business Temperature Monitoring system. <br /><br /> As the lead QE on this project, I tested temperature sensor integration, temperature reporting, sensor dashboards, and analyzed overall feature performance.';
}

vhr_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.display = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Video Health Report'
    modal_body.innerHTML = 'One of the biggest concerns for our customers is security. The foundation of every good security system is the video camera. Our team developed a report that gives our customers insight on the status of their video cameras. This includes performance metrics, camera status, camera snapshots, and recording hardware updates (known as a <a href="https://www.alarmgrid.com/faq/how-does-an-alarm-dot-com-svr-work" rel="noreferrer" target="_blank">Stream Video Recorder</a>). <br /><br />As the quality lead on this project, I developed a test plan to verify each, individual performance metric. I also tested the report distribution systems and monitored performance with stressed video accounts.'
}

yale500_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.display = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Yale 500 Series Lock Intergration'
    modal_body.innerHTML = 'This project will always have a soft spot for me because this was the first certification project that I took the lead on. This project centered around the Yale 500 Series locks. This included hardware enrollment, security testing, user code management, and automation integrations. <br /><br />Learn more about these locks <a href="https://us.yalehome.com/en/news/news/2019/yale-launches-product-line-for-professional-installers/" rel="noreferrer" target="_blank">here</a>.'
}

test_lab_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.display = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Test Lab Maintenance'
    modal_body.innerHTML = 'The Quality Engineering testing lab is a space that is shared by all of the Quality Engineers on my team. My responsibility is to ensure all devices are funtioning as intended and that the environment is in good condition. This includes maintaining the devices themselves and cleaning/organizing the shared work space.'
}

qe_sql_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.display = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'QE SQL Documentation'
    modal_body.innerHTML = 'Alarm.com has done an exceptional job at creating an interface for Quality Engineers to work with to answer common questions. However, due to the complicated nature of the problem domain, specialized SQL queries are necessary. I have identified this as a pain point for new team members and have begun collecting queries that can be used by other members of the team. Thus, saving them time from having to write the queries themselves.'
}

water_valve_meter_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.display = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Water Valve and Meter'
    modal_body.innerHTML = 'Water damage costs $9.1 billion dollars every year. To help alleviate this problem, we released a Smart Water Valve & Meter. This allows our users to create automation rules to automatically turn off their water if a leak is detected. As the lead Quality Engineer on this project, I designed and executed an integration test plan. Working alongside our Building36 team, I tested all of the features of this device to ensure it integrated with our <a href="https://www.pointcentral.com/" rel="noreferrer" target="_blank">PointCentral</a> partner. <br /><br /> <a href="https://www.alarm.com/about/press/PressGeneric.aspx?cmid=670" rel="noreferrer" target="_blank">Learn more about the product here.</a> '
}

jasco_contact_button.onclick = function() {
    modal.style.display = 'flex';
    modal.style.display = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal_header.innerHTML = 'Jasco Contact Sensor'
    modal_body.innerHTML = 'The contact sensor is a staple in a security system. The sensor alerts the user if an entry point is open or closed. This allows our users to configure their devices to put their system into an alarm if their business or property is accessed when no one is present. Additionally, users can configure a set of automation rules to execute system actions if the sensor detects activity. As the lead Quality Engineer on this project, I composed and executed a full regression test suite to ensure this new generation of contact sensor meets our expectations.'
}