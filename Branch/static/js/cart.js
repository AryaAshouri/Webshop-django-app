function wait_for_now(){
    document.getElementById("pop-up").style.display = "none";
    document.getElementById("pay-them-all-text").style.display = "none";
    document.getElementById("pay-all-button").style.display = "none";
    document.getElementById("wait-now-button").style.display = "none";
    document.getElementById("product-container").style.filter = "none";
}
$(document).on("submit", "#form-container", function(page){
    page.preventDefault();
})
AOS.init()