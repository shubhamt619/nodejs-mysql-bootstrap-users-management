$(document).ready(function () {
  $("#btnAddAdmin").click(function (e) {
    e.preventDefault();
    let data = {
      first_name: $("input[name='first_name']").val(),
      last_name: $("input[name='last_name']").val(),
      user_name: $("input[name='user_name']").val(),
      mobile_no: $("input[name='mobile_no']").val(),
      course: 0,
      email: $("input[name='email']").val(),
      role: 2,
      gender: $("input[name='gender']").val(),
      password: $("input[name='password']").val(),
    };

    $.ajax({
      type: "POST",
      url: "/api/addAdmin",
      data: data,
      dataType: "JSON",
      success: function (response) {
        Swal.fire('Admin Added successfully')
        setTimeout(() => {
          location.reload()
        }, 1000);
      },
    });
  });

  $("#btnAddStudent").click(function (e) {
    e.preventDefault();
    let data = {
      first_name: $("input[name='first_name']").val(),
      last_name: $("input[name='last_name']").val(),
      user_name: $("input[name='user_name']").val(),
      mobile_no: $("input[name='mobile_no']").val(),
      course: $("input[name='course']").val(),
      email: $("input[name='email']").val(),
      role: 1,
      gender: $("input[name='gender']").val(),
      password: $("input[name='password']").val(),
    };

    $.ajax({
      type: "POST",
      url: "/api/addUser",
      data: data,
      dataType: "JSON",
      success: function (response) {
        Swal.fire('Student Added successfully')
        setTimeout(() => {
          location.reload()
        }, 1000);
      },
    });
  });
});
