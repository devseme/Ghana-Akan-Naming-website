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
       let DD=parsefloat(getElementById("day").value);
       let MM=parsefloat(getElementById("month").value);
       let YY=parsefloat(getElementById("year").value);

       let vv=DD=0;
       let CC=(YY -1)/100 +1;
       let weekDay =( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
       console.log(weekDay);
            
         document.getElementById("result").innerHTML=math.Round(weekDay);
         
         /* Array for names*/
         let maleNames=["Kwasi","Kwadwo","Kwabena","kwaku","Yaw","Kofi","Kwame"];
         let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
            
         let choice=document.getElementById("select").value;

         /*conditional statement if*/
           if((choice==="male" &&(DD>0 && DD<31) && (MM>0 && MM<12) &&YY>=1)){
                  
                console.log(maleNames(math.Round(weekDay)));
                  document.getElementById("akanName").innerHTML=maleNames[math.Round(weekDay)];

             }

            else if((choice==="female" &&(DD>0 && DD<31) && (MM>0 && MM<12) &&YY>=1))
                  {
                console.log(femaleNames(math.Round(weekDay)));
                 
                document.getElementById("akanName").innerHTML=femaleNames[math.Round(weekDay)]; 
            }
            /*in case of wrong input*/
               else{
                   console.log("You entered invalid data")

                      alert("The data you entered is invalid.Try again!")
                        document.getElementById("akanName").innerHTML="You entered invalid data";
                       
               }

  }