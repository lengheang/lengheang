var form = document.getElementById('frm')
form.addEventListener('submit', function (e) {
    e.preventDefault()

    let useriput = document.getElementById('userinput').value
    let schoolname = document.getElementById('shc').value
    let patt = /[^a-z]/gi;
    let pattSchool = /[^a-z \s]/gi;
    let msgout = document.getElementById('msg')
    let msgschool = document.getElementById('msgshcmsgshc')

    //validate userinput 
     if(useriput.match(patt) != null){
        msgout.innerHTML = "*user input number or other charater beside a-z"
        msgout.style.color = "red"
    }
    if (useriput.match(patt)) {
        msgout.innerHTML = "*correct uername"
        msgout.style.color = "green"
    }
    if (userinput == "" || useriput == null) {
        msgout.innerHTML = "*cannot be blank"
        msgout.style.color = "red"
    }

    // validate schoolname
    if (shc.match(pattSchool) != null) {
        msgschool.innerHTML = "*cannot be blank"
        msgschool.style.color = "red"
    }
    if (shc.match(patt) == null) {
        msgschool.innerHTML = "*incorrect schoolname"
        msgschool.style.color = "red"
    }
    if (shc.match(pattSchool) == null) {
        msgschool.innerHTML = "*correct schoolname"
        msgschool.style.color = "green"
    }
    if (shc == "" || shc == null) {
        msgschool.innerHTML = "*cannot be blank"
        msgschool.style.color = "red"
    }










})