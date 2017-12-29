let num1 = document.querySelectorAll(".img_box li")
let num2 = document.querySelectorAll(".btn_box li")
let banners = document.querySelector(".banner")
let prev = document.querySelector(".bannerleft")
let next = document.querySelector(".bannerright")

num2.forEach(function (n, m) {
    n.onclick = function () {
        for (let i = 0; i < num2.length; i++) {
            num2[i].classList.remove("one");
            num1[i].classList.remove("one")
        }
        this.classList.add("one");
        num1[m].classList.add("one");
        en = m;
    }
});

let en = 0;

function banne(dir = "right") {
    if (dir == "right") {
        en++;
    }
    if (en === num2.length) {
        en = 0;
    }
    if (dir == "left") {
         en--

    }
    if (en == -1) {
        en = num1.length - 1
    }


    for (let i = 0; i < num2.length; i++) {
        num2[i].classList.remove("one");
        num1[i].classList.remove("one")
    }
    num2[en].classList.add("one");
    num1[en].classList.add("one");

}

let st = setInterval(banne, 2000)
banners.onmouseover = function () {
    clearInterval(st)
}
banners.onmouseout = function () {
    st = setInterval(banne, 2000)
}


next.onclick = function () {
    banne()
}
prev.onclick = function () {
    banne("left")
}


{
    let right = document.querySelector(".you")
    console.log(right)
    let left = document.querySelector(".zuo")
    let dannce = document.querySelector(".tp")
    console.log(dannce)
    right.onclick = function () {
        this.classList.remove("active")
        left.classList.add("active")
        dannce.style.transform = "translateX(-1240px)"
    }
    left.onclick = function () {
        this.classList.remove("active")
        right.classList.add("active")
        dannce.style.transform = "translateX(0)"
    }
    let m = 1

    function shi() {
        if (m % 2 === 1) {
            m++
            right.onclick()
        } else {
            left.onclick()
        }
    }

    let st = setInterval(shi, 5000)
    dannce.onmouseover = function () {
        clearInterval(st)
    }
    dannce.onmouseover = function () {
        st = setInterval(shi, 5000)
    }
}




