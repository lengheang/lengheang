let save = document.getElementById('save')
save.addEventListener('click', function(e){
    e.preventDefault()
    let username = document.getElementById('username').value;
    let school = document.getElementById('school').value;
    let contact = document.getElementById('contact').value;
   
    let patt = /[^a-z ]/gi;
    let pattSchool = /[^a-z \s]/gi;
    let pattContact = /[0-9]/gi;

    let namemsgResult = document.getElementById('namemsg');
    let schoolmsgResult = document.getElementById('schoolmsg');
    let contactmsgResult = document.getElementById('msgcontact');



    if (username.match(patt) != null){
        namemsg.innerHTML = "*allow to input only a-z"
        namemsg.style.color = 'red'
    }
    if (username.match(patt) == null){
        namemsg.innerHTML = "*correct "
        namemsg.style.color = 'green'
    }
    if (username == "" || username == null){
        namemsg.innerHTML = "*cannot blank"
        namemsg.style.color = 'red'
    }
    //validate school name text field
    if(school.match(pattSchool) != null){
        console.log("incorrect school name")
        schoolmsg.innerHTML = "*incorrect input "
        schoolmsg.style.color = 'red'
    }
    if (school.match(pattSchool) == null){
        schoolmsg.innerHTML = "correct "
        schoolmsg.style.color = 'green'
    }
    if (school == "" || school == null){
        schoolmsg.innerHTML = "*cannot blank "
        schoolmsg.style.color = 'red'
    }
    //contact field
    if(contact == "" || school == null){
        contactmsgResult.innerHTML = "*cannt blank "
        contactmsgResult.style.color = 'red'
    }
    if (contact.value.length < 9 || contact.value.length > 10){
        contactmsgResult.innerHTML = "*invalid contact"
        contactmsgResult.style.color = 'red';
    }
    if (contact.value.match(pattContact) == null){
        contactmsgResult.innerHTML = "*invalid contact"
        contactmsgResult.style.color = 'red';
    }
    if (contact.value[0] == '0' && contact.value.match(pattContact) != null){
        contact = `+855${contact.value.substring(1)}`
    }

    let info = {
        username: username,
        school: school,
        contact: contact
    }
 //addTotable(info); 

})
 
function editList(){

}

    

function addTotable(info) {
    //create row and colum
    let row = document.createElement('tr');
    let colum1 = document.createElement('td');
    let colum2 = document.createElement('td');
    let colum3 = document.createElement('td');
    let colum4 = document.createElement('td');
    let b = document.createElement('button');
    b.setAttribute("onclick", "removeInfo(this)")
    b.className = "btn btn-primary";



    let username = document.createTextNode(info.username);
    let school = document.createTextNode(info.school);
    let contact = document.createTextNode(info.contact);
    let title = document.createTextNode('DELETE');



    colum1.appendChild(username);
    colum2.appendChild(school);
    colum3.appendChild(contact);
    b.appendChild(title);
    colum4.appendChild(b);


    row.appendChild(colum1);
    row.appendChild(colum2);
    row.appendChild(colum3);
    row.appendChild(colum4);
    let tbody = document.getElementsByTagName('tbody')[0];
    tbody.appendChild(row);
}
function removeInfo(btn) {
    let r = confirm('Are you sure?')
    if (r == true) {
        let parent = btn.parentNode.parentNode.parentNode
        let currentRow = btn.parentNode.parentNode
        parent.removeChild(currentRow)
    }
    console.log(parent)
}