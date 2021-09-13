
$(document).ready(function () {
    $("#login").click(function () {
        var uid = $("#uid").val();
        var password = $("#password").val();

        // code for matching the hardcoded password
        if (uid == '' || password == '') {
            $('input[type="text"],input[type="password"]').css("border", "2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
            alert("Please fill all fields.... !!!!");

        }
        else {
            if (password == '12345678') {
                alert('Welcome ' + uid + ' Login Successfull!!!');
            }
            else {
                $('input[type="text"],input[type="password"]').css("border", "2px solid red");
                $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
                alert("Log in unsuccessfull, Password does not match");
                $('#password').val('');

            }
        }

        //code for matching password that should be greater than 8
        // if (uid == '' || password == '') {
        //     $('input[type="text"],input[type="password"]').css("border", "2px solid red");
        //     $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
        //     alert("Please fill all fields.... !!!!");

        // }
        // else {
        //     if (password.length < 8) {
        //         $('input[type="text"],input[type="password"]').css("border", "2px solid red");
        //         $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
        //         alert("Password must be of minimum 8  characters");
        //         $('#password').val('');

        //     }
        //     else {
        //         alert('Welcome ' + uid + ' Login Successfull!!!');

        //     }
        // }
    });

    $("input").focus(function () {
        $(this).css("background-color", "#ffffff");
        $(this).css("color", "#000");

    });

    $("input").blur(function () {
        $(this).css("background-color", "#ffffff");
        $(this).css("color", "#4f4f4f");

    });
})