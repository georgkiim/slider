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
imgesUrls.push('https://casca.club/uploads/posts/2021-03/1615849235_59-p-sportivnie-seksualnie-devushki-seksualnie-69.jpg');

var currentImgIndex = 0;

slideImage.src = imgesUrls[currentImgIndex];
showPrevBtn.disabled = true;





//function defenition
function onShowPrevBtnClick() {
    currentImgIndex--;
    slideImage.src = imgesUrls[currentImgIndex];

    //disable next button
    if (currentImgIndex === 0) {
        showPrevBtn.disabled = true;   
    }
    showNextBtn.disabled = false;
}

function onShowNextBtnClick() {
    currentImgIndex++;
    slideImage.src = imgesUrls[currentImgIndex];

    //disable next button
    if (currentImgIndex === (imgesUrls.length- 1)) {
        showNextBtn.disabled = true;   
    }
    showPrevBtn.disabled = false;
}