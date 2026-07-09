// =========================
// GET ELEMENTS
// =========================

const welcome = document.getElementById("welcome");

const birthday = document.getElementById("birthday");

const envelopeSection = document.getElementById("envelopeSection");

const gallery = document.getElementById("gallery");

const final = document.getElementById("final");

const beginBtn = document.getElementById("beginBtn");

const surpriseBtn = document.getElementById("surpriseBtn");

const galleryBtn = document.getElementById("galleryBtn");

const finalBtn = document.getElementById("finalBtn");

const paper = document.getElementById("paper");

const cover = document.getElementById("cover");



// =========================
// START
// =========================

birthday.style.display = "none";

envelopeSection.style.display = "none";

gallery.style.display = "none";

final.style.display = "none";



// =========================
// BEGIN BUTTON
// =========================

beginBtn.onclick = function () {

    welcome.style.display = "none";

    birthday.style.display = "flex";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



// =========================
// OPEN SURPRISE
// =========================

surpriseBtn.onclick = function () {

    birthday.style.display = "none";

    envelopeSection.style.display = "block";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



// =========================
// OPEN ENVELOPE
// =========================

cover.onclick = function () {

    cover.style.transform = "rotateX(180deg)";

    paper.style.transform = "translateY(-520px)";

    // Hide the envelope after opening
    setTimeout(function(){

        cover.style.display = "none";

        paper.style.position = "relative";
        paper.style.top = "0";
        paper.style.left = "0";
        paper.style.right = "0";
        paper.style.transform = "translateY(0)";
        paper.style.margin = "50px auto";
        paper.style.width = "80%";
        paper.style.zIndex = "10";

    },1000);

}



// =========================
// GALLERY
// =========================

galleryBtn.onclick = function () {

    envelopeSection.style.display = "none";

    gallery.style.display = "block";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



// =========================
// FINAL MESSAGE
// =========================

finalBtn.onclick = function () {

    gallery.style.display = "none";

    final.style.display = "flex";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



// =========================
// FLOATING HEARTS
// =========================

setInterval(function(){

    const heart=document.createElement("div");

    heart.innerHTML="💜";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-50px";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.opacity="0.7";

    heart.style.pointerEvents="none";

    heart.style.transition="all 6s linear";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.style.bottom="110vh";

        heart.style.opacity="0";

    },100);
    function checkPassword(){

    const password=document.getElementById("password").value;

    if(password==="Ram1808"){

        document.getElementById("passwordScreen").style.display="none";

    }

    else{

        document.getElementById("error").innerHTML="Wrong password ❤️";

    }

}

    setTimeout(function(){

        heart.remove();

    },6000);

},700);
