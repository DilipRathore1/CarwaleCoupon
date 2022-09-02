
 const loadCoupon = () =>{
   document.getElementById("coupon").style.display="block";
   document.getElementById('searchbar').style.opacity="0.5"
   document.getElementById('featured').style.opacity="0.5"
   document.getElementById('browseby').style.opacity="0.5"
   document.getElementById('comparecar').style.opacity="0.5"
   }

 const closeCoupon = () =>{
    document.getElementById("coupon").style.display="none";
    document.getElementById('searchbar').style.opacity="1"
    document.getElementById('featured').style.opacity="1"
    document.getElementById('browseby').style.opacity="0.5"
    document.getElementById('comparecar').style.opacity="0.5"
 
 }