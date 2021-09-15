

            $('document').ready(function () {
                $('#Testcontent').hide();
                $('#clock').hide();
                $('#stop').hide();
                $(".ques input[type=radio]").attr('disabled', true);

                    $('#start').click(function () {
                    $('#Testcontent').show();
                    $('#clock').show();
                    $('#stop').show();
                    $("#start").css("background-color","gray"); 
                    $('#start').attr("disabled", true);
                    $(".ques input[type=radio]").attr('disabled', false);
                });


            });

            var w;

            function startWorker() {
                if (typeof (Worker) !== "undefined") {
                    if (typeof (w) == "undefined") {
                        w = new Worker("js/QuizTimerWorker.js");
                    }



                    w.onmessage = function (event) {
                        if (event.data != 0) {
                            if (event.data >= 10)
                                document.getElementById("result").innerHTML = "Time Remaining: 00:" + event.data;
                            else
                                document.getElementById("result").innerHTML = "Time Remaining: 00:0" + event.data;
                        }
                          else {
                            alert("Time's up!!! Your test has been submitted.");
                            validate();
                            window.close();
                            stopWorker();
                        }
                    };
                } else {
                    document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
                }
            }

            function stopWorker() {
                w.terminate();
                w = undefined;
                validate();
                window.close();
            }

            function validate() {
                var cnt = 0;
                var q1 = $('#que1:checked').val();
                var q2 = $('#que2:checked').val();
                var q3 = $('#que3:checked').val();
                var q4 = $('#que4:checked').val();
                if (q1 == "B") {
                    ++cnt;
                }
                if (q2 == "B") {
                    ++cnt;
                }
                if (q3 == "C") {
                    ++cnt;
                }
                if (q4 == "B") {
                    ++cnt;
                }
                alert("Your score is: " + cnt);
            }