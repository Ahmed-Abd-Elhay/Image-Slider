// Get Slid Images
let imagesSlider = Array.from(document.querySelectorAll(".images img"));
let currentLength = imagesSlider.length;

// Get Slid Number Element
let sliderNumber = document.querySelector(".images .slid-number");

// Get Bullets Elements
let bullets = document.querySelector(".text .bullets");

// Previous Slid Element
let prevSlid = document.querySelector(".text .previous");

// Next Slid Element
let nextSlid = document.querySelector(".text .next");

// Create Current Slid
let currentSlid = 1;

// Create Previous Click Function
prevSlid.onclick = prevClick;

function prevClick() {

    if (prevSlid.classList.contains("disabeld")) {

        return false;

    } else {

        currentSlid--;

        check();
    }

}

// Create Next Click Function
nextSlid.onclick = nextClick;

function nextClick() {

    if (nextSlid.classList.contains("disabeld")) {

        return false;

    } else {

        currentSlid++;

        check();
    }
}



// Create Ul  ELement 
let ulEle = document.createElement('ul');
ulEle.className = "bullet-ul";

// Create Li Element in Loop
for (let i = 1; i <= currentLength; i++) {
    // Create Li Elements 
    let liEle = document.createElement("li");

    // Add Atrribute Data-Set 
    liEle.setAttribute("data-set", i);

    // create Text Node
    liEle.appendChild(document.createTextNode(i));

    // Add li Elements in Ul Element 
    ulEle.appendChild(liEle);


}

// Add Ul Element In Bullets 
bullets.appendChild(ulEle);


// Gey bullet-Ul Element New Create 
let bulletCheck = document.querySelector(".bullet-ul");

// Get Ul Li 
let bulletLi = document.querySelectorAll(".bullet-ul li");

// Create Function Click on Li Bullets
bulletLi.forEach((el) => {
    el.addEventListener("click", function (e) {
        // // Remove Active Class From All Lis
        // bulletLi.forEach((e) => e.classList.remove("active"));

        // // Add Active Class To Current Li Target
        // e.currentTarget.classList.add("active");

        currentSlid = parseInt(e.currentTarget.getAttribute("data-set"));

        // currentSlid = +(e.currentTarget.innerHTML);

        check();
    })
});

check();

// Create Function Check
function check() {
    // Slid Number 
    sliderNumber.innerHTML = `Slid#${currentSlid}`;

    // Remove Class Active From Image And Bullets
    removeActive();

    // Add Class Active To Image And BUllets
    imagesSlider[currentSlid - 1].classList.add("active");

    bulletLi[currentSlid - 1].classList.add("active");

    // Add class disabeld to previous Button
    if (currentSlid === 1) {
        prevSlid.classList.add("disabeld");
    } else {
        prevSlid.classList.remove("disabeld");
    }

    // Add class disabeld to Next Button
    if (currentSlid === currentLength) {
        nextSlid.classList.add("disabeld");
    } else {
        nextSlid.classList.remove("disabeld");
    }

}

// Create Function Remove Active
function removeActive() {
    // Remove Active Class From Images
    imagesSlider.forEach((e) => {
        e.classList.remove("active");
    });

    // Remove Active ClassList From bullets
    bulletLi.forEach((e) => {
        e.classList.remove("active");
    });
}


