document.addEventListener("DOMContentLoaded", function(){
    let today = Math.floor(new Date().getDay()); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const banner = document.getElementById("banner");
    const closeBannerBtn = document.getElementById("closeBanner");
    console.log(today);
    // today = 2;
   // Check if today is Monday, Tuesday, or Wednesday
    if ( today >=1 && today <= 3) { // Monday, Tuesday, Wednesday
        // Close the banner when the close button is clicked
        banner.style.display = "block";
    }
    else{
        banner.style.display = "none";
    }


    closeBannerBtn.addEventListener("click", function(){
        banner.style.display = "none";
        
    });
    
});