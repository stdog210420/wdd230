document.addEventListener("DOMContentLoaded", function(){
    const banner = document.getElementById("banner");
    const closeBannerBtn = document.getElementById("closeBanner");
    // Check if today is Monday, Tuesday, or Wednesday
    const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    console.log(today);
    if (today >= 1 && today <= 3) { // Monday, Tuesday, Wednesday
        banner.style.display = "block";
    }

    // Close the banner when the close button is clicked
    closeBannerBtn.addEventListener("click", function(){
        banner.style.display = "none";
    });
});