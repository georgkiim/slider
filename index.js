//find elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');

//subscribe to events
showPrevBtn.addEventListener('click',onShowPrevBtnClick );
showNextBtn.addEventListener('click',onShowNextBtnClick );

// creste iame array
var imgesUrls = [];
imgesUrls.push('https://on-desktop.com/wps/2021_Sporty_girl_in_a_black_swimsuit_in_a_rack_150842_.jpg');
imgesUrls.push('https://on-desktop.com/wps/2021_Sports_girl_lying_on_fitball_152952_.jpg');
imgesUrls.push('https://classpic.ru/wp-content/uploads/2016/02/14150/Rastyazhka-blondinki.jpg');
imgesUrls.push('https://wallpapercave.com/wp/wp10113418.jpg');

var currentImgIndex = 0;

slideImage.src = imgesUrls[currentImgIndex];





//function defenition
function onShowPrevBtnClick() {
    currentImgIndex--;
    slideImage.src = imgesUrls[currentImgIndex];
}
function onShowNextBtnClick() {
    currentImgIndex++;
    slideImage.src = imgesUrls[currentImgIndex];
}