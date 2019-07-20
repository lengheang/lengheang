var form = document.getElementById('frm');      //connect form pi html mk js 
form.addEventListener('submit', function(e){   
    e.preventDefault()  //dak event oy form somrab tver ka submit
    let username = document.getElementById('username');   //jab dom lai mk check leak khan
    let p = new RegExp('e', 'gi')   //mun ta bong pa kert pattern sin
    // use with test methods
    
    if(p.test(username.value)){
        console.log(`user have input charater e "${username.value}"`)  //&{username.value} print dom lai del user input
    }
    else {
        console.log('other character')
    }
}) 