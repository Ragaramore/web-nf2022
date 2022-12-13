function submitForm() {
            
    let form = document.getElementById("form");
    let success = document.getElementById("success");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let jam = document.getElementById("jam").value;
    let tujuan = document.getElementById("tujuan").value;
    let jumlah = document.getElementById("jumlah").value;


    let error_nama = document.getElementById("error_nama");
    let error_email = document.getElementById("error_email");
    let error_jam = document.getElementById("error_jam");
    let error_tujuan = document.getElementById("error_tujuan");
    let error_jumlah = document.getElementById("error_jumlah");

    
    function ValidateEmail() {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(validRegex)) {
            // alert("Valid email address!");
            // email.focus();
            return true;

        } else {
            alert("Invalid email address!");
            // email.focus();
            return false;
        }

    }

    if(name == '') {
        error_nama.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_nama.style.display = 'none';
        }  
    } 
    if(email == '') {
        error_email.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_email.style.display = 'none';
        }
    } 
    if(jam == '') {
        error_jam.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_jam.style.display = 'none';
        }
    }
    if(tujuan == '') {
        error_tujuan.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_tujuan.style.display = 'none';
        }
    } 
    if(jumlah == '') {
        error_jumlah.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_jumlah.style.display = 'none';
        }
    } 
    
    if(name != '' && email != '' && ValidateEmail(email) == true) {
        form.style.display = 'none';
        success.style.display = 'block';
    }
    




    
}
