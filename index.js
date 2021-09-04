/*
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )
 
      An invalid day should be (d<=0) or (d>31)

        An invalid month should be (m<= 0) or (m > 12)  
 
 
 */

  function birthDay(){
       var DD=parsefloat(getElementById("").value);
       var MM=parsefloat(getElementById("").value);
       var YY=parsefloat(getElementById("").value);


       var weekDay =( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
  }