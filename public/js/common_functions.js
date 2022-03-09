$(document).ready(function () {
    

    $("#btnRegister").click(function (e) { 
        e.preventDefault();
        let data = {
            "first_name" : $("input[name='first_name']").val(),
            "last_name" : $("input[name='last_name']").val(),
            "user_name" : $("input[name='user_name']").val(),
            "mobile_no" : $("input[name='mobile_no']").val(),
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
                alert('User added successfully.')
            }
        });
    });
});