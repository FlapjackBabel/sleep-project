    function nowTime() {
    var now = new Date();
    var nowHours = now.getHours();
    if (nowHours == 0) {
      nowHours = 12;
    }
    var nowMinutes = now.getMinutes();
    if (nowMinutes < 10) {
      nowMinutes = "0" + nowMinutes;
    }
    nowSeconds = now.getSeconds();
      if (nowSeconds < 10) {
        nowSeconds = "0" + nowSeconds;
      }
    $('.time h2[name="now"]').text(nowHours + ":" + nowMinutes + ":" + nowSeconds);

    setTimeout(nowTime, 1000);

  }

  function calculateTime() {
    
      
    
    for (var i = 2; i < 3; i++) {
        $('.time .calculate').click(function() {
    
            var hours = $('.time select[name="opt-hours"]').val();
            var minutes = $('.time select[name="opt-minutes"]').val();
            var moreMinutes;
    
                var calHours = parseFloat(hours) + 15 + Math.floor((i-3)*1.5);

                if (i % 2 == 0) {
                  moreMinutes = 30;
                }
                else {
                  moreMinutes = 0;
                }

                var calMinutes = parseFloat(minutes) + moreMinutes;
                
                if (calHours >= 24) {
                  calHours = calHours % 24;
                  if (calHours == 0) {
                    calHours = 0;
                  }
                }
                
                if (calMinutes >= 60) {
                  var newHours = ((minutes / 60));
                  if (newHours > 1) {
                    calMinutes = calMinutes % 60 + newHours * (newHours % 1);
                    calMinutes = Math.floor(calMinutes);
                    calHours = calHours + Math.floor(newHours);
                  } else {
                    calMinutes = calMinutes % 60 + newHours * (newHours % 1);
                    calMinutes = Math.floor(calMinutes);
                    calHours = calHours + 1;
                  }
                }

                if (calHours < 10) {
                  calHours = "0" + calHours;
                }
                
                if (calMinutes < 10) {
                  calMinutes = "0" + calMinutes;
                }
            
            var calculatedTime = calHours + " : " + calMinutes;
            

            document.getElementById("calNum").innerHTML = calculatedTime + " to complete 6 sleep cycles";
        });

    }

  }

  function calculateTime2() {
    
      
    
    for (var i = 2; i < 4; i++) {
        $('.time .calculate').click(function() {
    
            var hours = $('.time select[name="opt-hours"]').val();
            var minutes = $('.time select[name="opt-minutes"]').val();
            var moreMinutes;
    
                var calHours = parseFloat(hours) + 15 + Math.floor((i-3)*1.5);

                if (i % 2 == 0) {
                  moreMinutes = 30;
                }
                else {
                  moreMinutes = 0;
                }

                var calMinutes = parseFloat(minutes) + moreMinutes;
                
                if (calHours >= 24) {
                  calHours = calHours % 24;
                  if (calHours == 0) {
                    calHours = 0;
                  }
                }
                
                if (calMinutes >= 60) {
                  var newHours = ((minutes / 60));
                  if (newHours > 1) {
                    calMinutes = calMinutes % 60 + newHours * (newHours % 1);
                    calMinutes = Math.floor(calMinutes);
                    calHours = calHours + Math.floor(newHours);
                  } else {
                    calMinutes = calMinutes % 60 + newHours * (newHours % 1);
                    calMinutes = Math.floor(calMinutes);
                    calHours = calHours + 1;
                  }
                }

                if (calHours < 10) {
                  calHours = "0" + calHours;
                }
                
                if (calMinutes < 10) {
                  calMinutes = "0" + calMinutes;
                }
            
            var calculatedTime = calHours + " : " + calMinutes;
            

            document.getElementById("calNum2").innerHTML = calculatedTime + " to complete 5 sleep cycles";
        });

    }

  }

  function calculateTime3() {
    
      
    
    for (var i = 2; i < 5; i++) {
        $('.time .calculate').click(function() {
    
            var hours = $('.time select[name="opt-hours"]').val();
            var minutes = $('.time select[name="opt-minutes"]').val();
            var moreMinutes;
    
                var calHours = parseFloat(hours) + 15 + Math.floor((i-3)*1.5);

                if (i % 2 == 0) {
                  moreMinutes = 30;
                }
                else {
                  moreMinutes = 0;
                }

                var calMinutes = parseFloat(minutes) + moreMinutes;
                
                if (calHours >= 24) {
                  calHours = calHours % 24;
                  if (calHours == 0) {
                    calHours = 0;
                  }
                }
                
                if (calMinutes >= 60) {
                  var newHours = ((minutes / 60));
                  if (newHours > 1) {
                    calMinutes = calMinutes % 60 + newHours * (newHours % 1);
                    calMinutes = Math.floor(calMinutes);
                    calHours = calHours + Math.floor(newHours);
                  } else {
                    calMinutes = calMinutes % 60 + newHours * (newHours % 1);
                    calMinutes = Math.floor(calMinutes);
                    calHours = calHours + 1;
                  }
                }

                if (calHours < 10) {
                  calHours = "0" + calHours;
                }
                
                if (calMinutes < 10) {
                  calMinutes = "0" + calMinutes;
                }
            
            var calculatedTime = calHours + " : " + calMinutes;
            

            document.getElementById("calNum3").innerHTML = calculatedTime + " to complete 4 sleep cycles";
        });

    }

  }

  function calculateTime4() {
    
      
    
    for (var i = 2; i < 6; i++) {
        $('.time .calculate').click(function() {
    
            var hours = $('.time select[name="opt-hours"]').val();
            var minutes = $('.time select[name="opt-minutes"]').val();
            var moreMinutes;
    
                var calHours = parseFloat(hours) + 15 + Math.floor((i-3)*1.5);

                if (i % 2 == 0) {
                  moreMinutes = 30;
                }
                else {
                  moreMinutes = 0;
                }

                var calMinutes = parseFloat(minutes) + moreMinutes;
                
                if (calHours >= 24) {
                  calHours = calHours % 24;
                  if (calHours == 0) {
                    calHours = 0;
                  }
                }
                
                if (calMinutes >= 60) {
                  var newHours = ((minutes / 60));
                  if (newHours > 1) {
                    calMinutes = calMinutes % 60 + newHours * (newHours % 1);
                    calMinutes = Math.floor(calMinutes);
                    calHours = calHours + Math.floor(newHours);
                  } else {
                    calMinutes = calMinutes % 60 + newHours * (newHours % 1);
                    calMinutes = Math.floor(calMinutes);
                    calHours = calHours + 1;
                  }
                }

                if (calHours < 10) {
                  calHours = "0" + calHours;
                }
                
                if (calMinutes < 10) {
                  calMinutes = "0" + calMinutes;
                }
            
            var calculatedTime = calHours + " : " + calMinutes;
            

            document.getElementById("calNum4").innerHTML = calculatedTime + " to complete 3 sleep cycles";
            document.getElementById("alert").innerHTML = "You need to sleep at:";
        });

    }

  }


  function timeSinceNow() {

    nowTime();
    calculateTime();
    calculateTime2();
    calculateTime3();
    calculateTime4();
    $('.time .update').click(function() {
      now = new Date();
      nowHours = now.getHours() % 12;
      nowMinutes = now.getMinutes();
      if (nowMinutes < 10) {
        nowMinutes = "0" + nowMinutes;
      }
      
      $('.time h2[name="now"]').text(nowHours + ":" + nowMinutes);
    });

  }
  
  $(document).ready(function() {
    timeSinceNow();
  });