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
        let user_name = $("#exampleInputEmail").val()
        let password = $("#exampleInputPassword").val()
        if (user_name == "aman@gmail.com" && password == "1234") {
            Swal.fire('Logging in')
            window.location.href = "/admin"
        } else {
            Swal.fire('Wrong username or password')
        }
        // let data = {
        //     "first_name" : $("input[name='first_name']").val(),
        //     "last_name" : $("input[name='last_name']").val(),
        //     "user_name" : $("input[name='user_name']").val(),
        //     "mobile_no" : $("input[name='mobile_no']").val(),
        //     "course" : $("input[name='course']").val(),
        //     "email" : $("input[name='email']").val(),
        //     "role" : $("select[name='role']").val(),
        //     "gender" : $("input[name='gender']").val(),
        //     "password" : $("input[name='password']").val()
        // }


        // $.ajax({
        //     type: "POST",
        //     url: "/api/addUser",
        //     data: data,
        //     dataType: "JSON",
        //     success: function (response) {
        //         Swal.fire('User inserted successully !')
        //     }
        // });
    });
});