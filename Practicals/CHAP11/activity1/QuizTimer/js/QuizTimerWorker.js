var i = 60;

 function timedCount() {
     
     self.postMessage(i);
	 i = i - 1;
     setTimeout("timedCount()",1000);
 }

 timedCount(); 