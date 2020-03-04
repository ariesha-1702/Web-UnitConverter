var area = new Array("cm sq","m sq","km sq");
var lengths = new Array("cm","m","km","mm","feet","inch","mile");
var mass = new Array("kg","g","pound","tonne","ounce");
var speed = new Array("m/s","km/hr","mile/hr");
var temperature = new Array("celsius","fahrenheit","kelvin");
var frequency = new Array("hz","khz","mhz","ghz"); 
window.onload=function()
{    
document.getElementById("properties").onchange =function()
{
        var p=document.getElementById("properties").value;
        if (p==("area"))
         {
          insert(area);
         }
        else if (p==("mass"))
         {
          insert(mass);
         } 
        else if (p==("length"))
         {
          insert(lengths);
         }   
        else if (p==("speed"))
         {
          insert(speed);
         }  
        else if (p==("temperature"))
         {
          insert(temperature);
         } 
        else if (p==("frequency"))
         {
          insert(frequency);
         }    
}
function insert(units)
{
        document.getElementById("unit-1").innerHTML="";
        document.getElementById("unit-2").innerHTML="";
        for(let i=0;i<units.length;i++)
        {
          let option=document.createElement("option");
          option.append(units[i]); 
          document.getElementById("unit-1").appendChild(option);
        }
        for(let i=0;i<units.length;i++)
        {
          let option=document.createElement("option");
          option.append(units[i]); 
          document.getElementById("unit-2").appendChild(option);
        }
}
document.getElementById("input-box").onchange=function()
{
      var a=document.getElementById("unit-1").value;
      var b=document.getElementById("unit-2").value;
      let val=document.getElementById("input-box").value;
  
      if(a==b)
      {
        document.getElementById("output-box").value=val;
      }
      else if(a=="km sq" && b=="m sq")
        {
          document.getElementById("output-box").value=val*(10**6);
        }
      else if(a=="km sq" && b=="cm sq")
        {
          document.getElementById("output-box").value=val*(10**10);
        }
      else if(a=="m sq" && b=="km sq")
        {
          document.getElementById("output-box").value=val*(10**(-6));
        }
      else if(a=="m sq" && b=="cm sq")
        {
          document.getElementById("output-box").value=val*(10**4);
        }
      else if(a=="cm sq" && b=="km sq")
        {
          document.getElementById("output-box").value=val*(10**-10);
        }
      else if(a=="cm sq" && b=="m sq")
        {
          document.getElementById("output-box").value=val*(10**-4);
        }     
                              
      




      else if(a=="km" && b=="m")
        {
          document.getElementById("output-box").value=val*1000;
        }
      else if(a=="km" && b=="cm")
        {
          document.getElementById("output-box").value=val*1000*100;
        }
      else if(a=="km" && b=="mm")
        {
          document.getElementById("output-box").value=val*1000*100*10;
        }
      else if(a=="km" && b=="feet")
        {
          document.getElementById("output-box").value=val*3280.84;
        }
      else if(a=="km" && b=="inch")
        {
          document.getElementById("output-box").value=val*39370.079;
        }
      else if(a=="km" && b=="mile")
        {
          document.getElementById("output-box").value=val/1.609;
        }
      else if(a=="m" && b=="km")
        {
          document.getElementById("output-box").value=val/1000;
        }
      else if(a=="m" && b=="cm")
        {
          document.getElementById("output-box").value=val*100;
        }
      else if(a=="m" && b=="mm")
        {
          document.getElementById("output-box").value=val*1000;
        }
      else if(a=="m" && b=="feet")
        {
          document.getElementById("output-box").value=val*3.281;
        }
      else if(a=="m" && b=="inch")
        {
          document.getElementById("output-box").value=val*39.37;
        }
      else if(a=="m" && b=="mile")
        {
          document.getElementById("output-box").value=val*1609.344;
        }
      else if(a=="cm" && b=="km")
        {
          document.getElementById("output-box").value=val/(100000);
        }
      else if(a=="cm" && b=="m")
        {
          document.getElementById("output-box").value=val/(100);
        }
      else if(a=="cm" && b=="mm")
        {
          document.getElementById("output-box").value=val*10;
        }
      else if(a=="cm" && b=="feet")
        {
          document.getElementById("output-box").value=val/30.48;
        }
      else if(a=="cm" && b=="inch")
        {
          document.getElementById("output-box").value=val/2.54;
        }
      else if(a=="cm" && b=="mile")
        {
          document.getElementById("output-box").value=val/160934.4;
        }
      else if(a=="mm" && b=="km")
        {
          document.getElementById("output-box").value=val/1000000;
        }
      else if(a=="mm" && b=="m")
        {
          document.getElementById("output-box").value=val/1000;
        }
      else if(a=="mm" && b=="cm")
        {
          document.getElementById("output-box").value=val/10;
        }
      else if(a=="mm" && b=="feet")
        {
          document.getElementById("output-box").value=val/304.8;
        }
      else if(a=="mm" && b=="inch")
        {
          document.getElementById("output-box").value=val/25.4;
        }
      else if(a=="mm" && b=="mile")
        {
          document.getElementById("output-box").value=(val/1.609)/(10**6);
        }
      else if(a=="feet" && b=="km")
        {
          document.getElementById("output-box").value=val/3280.84;
        }
      else if(a=="feet" && b=="m")
        {
          document.getElementById("output-box").value=val/3.28084;
        }
      else if(a=="feet" && b=="cm")
        {
          document.getElementById("output-box").value=val*30.48;
        }
      else if(a=="feet" && b=="mm")
        {
          document.getElementById("output-box").value=val*304.8;
        }
      else if(a=="feet" && b=="inch")
        {
          document.getElementById("output-box").value=val*12;
        }
      else if(a=="feet" && b=="mile")
        {
          document.getElementById("output-box").value=val/5280;
        }
      else if(a=="inch" && b=="km")
        {
          document.getElementById("output-box").value=val/39370.079;
        }
      else if(a=="inch" && b=="m")
        {
          document.getElementById("output-box").value=val/39.3701;
        }
      else if(a=="inch" && b=="cm")
        {
          document.getElementById("output-box").value=val*2.54;
        }
      else if(a=="inch" && b=="mm")
        {
          document.getElementById("output-box").value=val*25.4;
        }
      else if(a=="inch" && b=="feet")
        {
          document.getElementById("output-box").value=val/12;
        }
      else if(a=="inch" && b=="mile")
        {
          document.getElementById("output-box").value=val/63360;
        }
      else if(a=="mile" && b=="km")
        {
          document.getElementById("output-box").value=val*1.609;
        }
      else if(a=="mile" && b=="m")
        {
          document.getElementById("output-box").value=val*1609.344;
        }
      else if(a=="mile" && b=="cm")
        {
          document.getElementById("output-box").value=val*160934.4;
        }
      else if(a=="mile" && b=="mm")
        {
          document.getElementById("output-box").value=val*1609344;
        }
      else if(a=="mile" && b=="feet")
        {
          document.getElementById("output-box").value=val*5280;
        }
      else if(a=="mile" && b=="inch")
        {
          document.getElementById("output-box").value=val*63360;
        }
                     
                     
      




      else if(a=="kg" && b=="g")
        {
          document.getElementById("output-box").value=val*1000;
        }
      else if(a=="kg" && b=="pound")
        {
          document.getElementById("output-box").value=val*2.205;
        }
      else if(a=="kg" && b=="tonne")
        {
          document.getElementById("output-box").value=val/1000;
        }
      else if(a=="kg" && b=="ounce")
        {
          document.getElementById("output-box").value=val*35.274;
        }  
      else if(a=="g" && b=="kg")
        {
          document.getElementById("output-box").value=val/1000;
        }
      else if(a=="g" && b=="pound")
        {
          document.getElementById("output-box").value=val/453.592;
        }
      else if(a=="g" && b=="tonne")
        {
          document.getElementById("output-box").value=val/1000000;
        }
      else if(a=="g" && b=="ounce")
        {
          document.getElementById("output-box").value=val/28.35;
        }  
      else if(a=="pound" && b=="kg")
        {
          document.getElementById("output-box").value=val/2.205;
        }
      else if(a=="pound" && b=="g")
        {
          document.getElementById("output-box").value=val*453.592;
        }
      else if(a=="pound" && b=="tonne")
        {
          document.getElementById("output-box").value=val/2204.623;
        }
      else if(a=="pound" && b=="ounce")
        {
          document.getElementById("output-box").value=val*16;
        }  
      else if(a=="tonne" && b=="kg")
        {
          document.getElementById("output-box").value=val*1000;
        }
      else if(a=="tonne" && b=="g")
        {
          document.getElementById("output-box").value=val*(1000000);
        }
      else if(a=="tonne" && b=="pound")
        {
          document.getElementById("output-box").value=val*(2204.623);
        }
      else if(a=="tonne" && b=="ounce")
        {
          document.getElementById("output-box").value=val*35273.962;
        }               
      else if(a=="ounce" && b=="kg")
        {
          document.getElementById("output-box").value=val/35.274;
        }  
      else if(a=="ounce" && b=="g")
        {
          document.getElementById("output-box").value=val/28.35;
        } 
      else if(a=="ounce" && b=="pound")
        {
          document.getElementById("output-box").value=val*16;
        }           
      else if(a=="ounce" && b=="tonne")
        {
          document.getElementById("output-box").value=val/35273.962;
        }           



      else if(a=="m/s" && b=="km/hr")
        {
          document.getElementById("output-box").value=val*3.6;
        }               
      else if(a=="m/s" && b=="mile/hr")
        {
          document.getElementById("output-box").value=val*2.237;
        }               
      else if(a=="km/hr" && b=="m/s")
        {
          document.getElementById("output-box").value=val/3.6;
        }               
      else if(a=="km/hr" && b=="mile/hr")
        {
          document.getElementById("output-box").value=val/1.609;
        }
      else if(a=="mile/hr" && b=="m/s")
        {
          document.getElementById("output-box").value=val/2.237;
        }               
      else if(a=="mile/hr" && b=="km/hr")
        {
          document.getElementById("output-box").value=val*1.609;
        }                              
                     
                     
     

      else if(a=="celsius" && b=="fahrenheit")
        {
          document.getElementById("output-box").value=(val*(9/5))+32;
        }
      else if(a=="celsius" && b=="kelvin")
        {
          document.getElementById("output-box").value=int(val)+int(273.15);
        }
      else if(a=="fahrenheit" && b=="celsius")
        {
          document.getElementById("output-box").value=(val-32)*(5/9);
        }
      else if(a=="fahrenheit" && b=="kelvin")
        {
          document.getElementById("output-box").value=((val-32)*(5/9))+273.15;
        }
      else if(a=="kelvin" && b=="celsius")
        {
          document.getElementById("output-box").value=val-273.15;
        }
      else if(a=="kelvin" && b=="fahrenheit")
        {
          document.getElementById("output-box").value=((val-273.15)*(9/5))+32;
        }

                     
              
      
      
      else if(a=="hz" && b=="khz")
        {
          document.getElementById("output-box").value=val/1000;
        }
      else if(a=="hz" && b=="mhz")
        {
          document.getElementById("output-box").value=val/1000000;
        }
      else if(a=="hz" && b=="ghz")
        {
          document.getElementById("output-box").value=val/1000000000;
        }
      else if(a=="khz" && b=="hz")
        {
          document.getElementById("output-box").value=val*1000;
        }
      else if(a=="khz" && b=="mhz")
        {
          document.getElementById("output-box").value=val/1000;
        }
      else if(a=="khz" && b=="ghz")
        {
          document.getElementById("output-box").value=val/1000000;
        }
      else if(a=="mhz" && b=="hz")
        {
          document.getElementById("output-box").value=val*1000000;
        }
      else if(a=="mhz" && b=="khz")
        {
          document.getElementById("output-box").value=val*1000;
        }
      else if(a=="mhz" && b=="ghz")
        {
          document.getElementById("output-box").value=val/1000;
        }
      else if(a=="ghz" && b=="hz")
        {
          document.getElementById("output-box").value=val*1000000000;
        }
      else if(a=="ghz" && b=="khz")
        {
          document.getElementById("output-box").value=val*1000000;
        }
      else if(a=="ghz" && b=="mhz")
        {
          document.getElementById("output-box").value=val*1000;
        }
                     
}
}