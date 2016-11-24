//user promp
var sent1=prompt("enter a sentence");
console.log(sent1);
var n=sent1.length;
   var sent2=sent1.charAt(0).toUpperCase();
   console.log(sent2);
     var sent3= sent1.charAt(n-1).toUpperCase();
     console.log(sent3);
      var sent4 = sent2+sent3;
      console.log(sent4);
      //

   function reverse (sent4){
       return sent4.split("").reverse().join("");
      };
 alert(reverse(sent4));
 var sent41 =(reverse(sent4));
 var sent5=sent1+sent41;
var divider=2;
 var n1 = n/divider.toFixed();
 var sent6 = sent1.charAt(n1-1);
 var sent7=sent6+sent1;
 alert(sent7);

function reverse(sent7)
 return  sent7.split("").reverse().join("");};
 console.log(reverse(sent7));
