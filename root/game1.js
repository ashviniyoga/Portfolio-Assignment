while(!flag)


   { 
      var userColor=prompt("I am thinking of some color, Try to guess the color");
	  
     if(isNaN(random_color))
	   {
	    alert("Enter the valid number");
		flag=false;
		count++;
	   }
	  if((userColor < 0)||(userColor>8))
	  {
	    alert("Invalid entry, the color doesnt exists");
		flag=false;
		count++;
	  }
	  if(userColor < random_color)
	  
   }


 + \n  + " You took " + count + " guesses to finsh the game");



 \n + "Hint: Your colors  is alphabetically higher than mine."+ \n + "	Please try again "


+ \n + "Hint: Your colors  is alphabetically lower than mine."+ \n + "	Please try again "