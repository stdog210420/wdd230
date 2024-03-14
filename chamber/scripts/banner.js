document.addEventListener("DOMContentLoaded", function(){
    const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const banner = document.getElementById("banner");
    const closeBannerBtn = document.getElementById("closeBanner");
    console.log(today);
   // Check if today is Monday, Tuesday, or Wednesday
    if (today !=0 && today <= 3) { // Monday, Tuesday, Wednesday
        banner.style.display = "block";
    }

    // Close the banner when the close button is clicked
    closeBannerBtn.addEventListener("click", function(){
        banner.style.display = "none";
    });
});