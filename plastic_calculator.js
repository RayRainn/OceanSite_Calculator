
document.addEventListener('DOMContentLoaded', function(event) {


   
    //document.getElementsByTagName("reset").addEventListener("click", clear)
    document.getElementById("reset").onclick = function() {clear()};
    function clear(){
        //resets the fields individually based on their id
        document.getElementById("in_bottles").value = 0;
        document.getElementById("in_bags").value = 0;
        document.getElementById("in_wrapping").value = 0;
        document.getElementById("in_yogurt").value = 0;
        document.getElementById("in_takeout").value = 0;
        document.getElementById("in_cups").value = 0;
        document.getElementById("in_packaging").value = 0;
        document.getElementById("in_detergent").value = 0;
        document.getElementById("in_shampoo").value = 0;
        document.getElementById("in_toothbrushes").value = 0;
        document.getElementById("in_toothpaste").value = 0;
       //changes all values to 0
    }





document.getElementById('in_bottles').addEventListener('change', function() {calc()});

document.getElementById('in_bags').addEventListener('change', function() {calc()});
document.getElementById('in_wrapping').addEventListener('change', function() {calc()});
document.getElementById('in_yogurt').addEventListener('change', function() {calc()});
document.getElementById('in_takeout').addEventListener('change', function() {calc()});
document.getElementById('in_cups').addEventListener('change', function() {calc()});
document.getElementById('in_packaging').addEventListener('change', function() {calc()});
document.getElementById('in_detergent').addEventListener('change', function() {calc()});
document.getElementById('in_shampoo').addEventListener('change', function() {calc()});
document.getElementById('in_toothbrushes').addEventListener('change', function() {calc()});
document.getElementById('in_toothpaste').addEventListener('change', function() {calc()});
document.getElementById('in_household').addEventListener('change', function() {calc()});







    function calc(){
        


        //document.getElementById('biggest-category').innerHTML = 


        var in_bottles = parseInt(document.getElementById('in_bottles').value);
        var element = document.getElementById('in_bottles');
        var dw = element.getAttribute('data-weight');
        var realbottles = in_bottles * dw;
//basically assigning my attribute to a variable, then calling a variable which calculates them both which ill use for the total output in the website form

        var in_bags = parseInt(document.getElementById('in_bags').value);
        var element2 = document.getElementById("in_bags");
        var dw2 = element2.getAttribute('data-weight');
        var realbag = in_bags * dw2;
       

        
        var in_wrapping = parseInt(document.getElementById('in_wrapping').value);
        var element3 = document.getElementById("in_wrapping");
        var dw3 = element3.getAttribute('data-weight');
        var realwrap = in_wrapping * dw3;
       

        var in_yogurt = parseInt(document.getElementById('in_yogurt').value);
        var element4 = document.getElementById("in_yogurt");
        var dw4 = element4.getAttribute('data-weight');
        var realyogurt = in_yogurt * dw4;

       


        var in_takeout = parseInt(document.getElementById('in_takeout').value);
        var element5 = document.getElementById("in_takeout");
        var dw5 = element5.getAttribute('data-weight');
        var realtakeout = in_takeout * dw5;


        var in_cups = parseInt(document.getElementById('in_cups').value);
        var element6 = document.getElementById("in_cups");
        var dw6 = element6.getAttribute('data-weight');
        var realcups = in_cups * dw6;


        var in_packaging = parseInt(document.getElementById('in_packaging').value);
        var element7 = document.getElementById("in_packaging");
        var dw7 = element7.getAttribute('data-weight');
        var realpackaging = in_packaging * dw7;


        var in_detergent = parseInt(document.getElementById('in_detergent').value);
        var element8 = document.getElementById("in_detergent");
        var dw8 = element8.getAttribute('data-weight');
        var realdetergent = in_detergent * dw8;


        var in_shampoo = parseInt(document.getElementById('in_shampoo').value);
        var element9 = document.getElementById("in_shampoo");
        var dw9 = element9.getAttribute('data-weight');
        var realshampoo = in_shampoo * dw9;


        var in_toothbrushes = parseInt(document.getElementById('in_toothbrushes').value);
        var element10 = document.getElementById("in_toothbrushes");
        var dw10 = element10.getAttribute('data-weight');
        var realtoothbrushes = in_toothbrushes * dw10;


        var in_toothpaste = parseInt(document.getElementById('in_toothpaste').value);
        var element11 = document.getElementById("in_toothpaste");
        var dw11 = element11.getAttribute('data-weight');
        var realtoothpaste = in_toothpaste * dw11;

        var household = parseInt(document.getElementById('in_household').value);
    






        var total = realbottles / household + realbag / household + realwrap / household + realyogurt / household + realtakeout/ household + realcups / household + realpackaging / household + realdetergent / household + realshampoo / household + realtoothbrushes 
        / household + realtoothpaste / household;
    
        document.getElementById('total_per_year').innerHTML = total;
        

  
       


//method which helps determind which input is the highest the if statement, is my idea, but i cant quite implement a solutkon, but what im trying is to 
//do an if statement so if the max result from my input is one of those, then display the attribute name associated with them
         //if(
        //    highest = Math.max(realbottles / household ,realbag / household ,realwrap / household,realyogurt / household,realtakeout
        //    / household ,realcups/ household ,realpackaging / household,realdetergent / household,realshampoo / household,realtoothbrushes/ household,realtoothpaste / household)
            

        // ) var display = element.getElementsByAttribute('name');
        // console.log(display);
            
       

  //it at least recognizes which input is the highest value
  


   var namebottles = element.getAttribute('name');




//method which helps determind which input is the highest
        var highest = Math.max(realbottles / household ,realbag / household ,realwrap / household,realyogurt / household,realtakeout
            / household ,realcups/ household ,realpackaging / household,realdetergent / household,realshampoo / household,realtoothbrushes/ household,realtoothpaste / household);


        //var display = document.getElementsByTagName('tip_bottles');
        //console.log(in_bottles);




     //the main problem i have is finding a way to make the input id name appear, which i struggled and couldnt find a solution for
     //but at least it has recognized the largest value based on the input.

//cant seem to make them be hidden for some reason
     //document.getElementsByTagName('tip_bottles').style.display = 'hidden';
     
     //document.querySelectorAll('tip').forEach(function(el) {
     //   el.style.display = 'none';
     //});
        

        document.getElementById('biggest-category').innerHTML = highest

            

        

     
              
            
        

     


        




        
        
        }
        

    }
)


