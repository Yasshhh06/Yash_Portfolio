//navbar
var sidemenu=document.getElementById("sidemenu");
function closemenu(){
    sidemenu.style.right="-170px";
}
function openmenu(){
    sidemenu.style.right="0";
}
//typing effect
let typed=new   Typed('.sec-text',{
    strings:['Entrepreneur.','Investor','Programmer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true
})
//form disable code
function able(){
var name=document.getElementById("name").value;
var emid=document.getElementById("em").value;
var mesg=document.getElementById("msg").value;
document.getElementById("butn").disabled=(name==""||emid==""||mesg=="");
}
document.getElementById('name').addEventListener('input',able);
document.getElementById('em').addEventListener('input',able);
document.getElementById('msg').addEventListener('input',able);
//tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");    
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
//after form submit text code
// const scriptURL = 'https://script.google.com/macros/s/AKfycbw4xTn7GB79nIUa5IO3_A7ybxrvtZ4pyK8ptBaFAl9VphufMrSfrNC7SimHdCyCXLOliQ/exec'
//         const form = document.forms['submit-to-google-sheet']
//         const msg=document.getElementById("message-sent")
      
//         form.addEventListener('submit', e => {
//           e.preventDefault()
//           fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//             .then(response => {
//                 msg.innerHTML = "Message Sent Successfully !"
//                 setTimeout(function(){
//                     msg.innerHTML=""
//                 },3500)
//                 form.reset()
//             })
//             .catch(error => console.error('Error!', error.message))
//         })