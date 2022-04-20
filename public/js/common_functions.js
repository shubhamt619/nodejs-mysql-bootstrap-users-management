$(document).ready(function () {
    

    $("#btnRegister").click(function (e) { 
        e.preventDefault();
        let data = {
            "first_name" : $("input[name='first_name']").val(),
            "last_name" : $("input[name='last_name']").val(),
            "user_name" : $("input[name='user_name']").val(),
            "mobile_no" : $("input[name='mobile_no']").val(),
            "course" : $("input[name='course']").val(),
            "email" : $("input[name='email']").val(),
            "role" : $("select[name='role']").val(),
            "gender" : $("input[name='gender']").val(),
            "password" : $("input[name='password']").val()
        }


        $.ajax({
            type: "POST",
            url: "/api/addUser",
            data: data,
            dataType: "JSON",
            success: function (response) {
                Swal.fire('User inserted successully !')
            }
        });
    });

    $("#btnLogin").click(function (e) { 
        e.preventDefault();
        let email = $("#exampleInputEmail").val() // This will hold the value entered by user
        let password = $("#exampleInputPassword").val() // This will h
        let data = {
            "email" : email,
            "password" : password
        }
        $.ajax({
            type: "POST",
            url: "/api/loginUser",
            data: data,
            dataType: "JSON",
            success: function (response) {
                if (response.status == false) {
                    Swal.fire('Wrong username or password')
                } else {
                    Swal.fire('Logged in successfully')
                    if (response.role == 1) {
                        window.location.href = 'student/dashboard'
                    } else {
                        window.location.href = 'admin/dashboard'
                    }
                }
            }
        });
    });
});