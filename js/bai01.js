function validate(ele) {
    if (ele.value === "") {
        ele.classList.remove("error");
        setTimeout(() => ele.classList.add("error"), 5);
        return true;
    }

    return false;
}

function giaiBac2() {
    let a = document.getElementById("aId");
    let b = document.getElementById("bId");
    let c = document.getElementById("cId");

    if (a !== null && b !== null && c !== null) {
        if (validate(a) === true || validate(b) === true || validate(c) === true)
            return;

        a = parseFloat(a.value);
        b = parseFloat(b.value);
        c = parseFloat(c.value);

        // Biện luận
        let k = "Kết quả tại đây...";
        if (a === 0) {
            // Biện luận bậc 1 bx + c = 0
        } else {
            let delta = 0;
            // ...
        }

        let kq = document.getElementById("kq");
        if (kq !== null) {
            kq.innerHTML = `<h2 style="color:red;">${k}</h2>`;
        } else
            alert(kq);
    }
}

window.onload = function() {
    let i = document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    for (let im of images)
        im.onmousemove = function() {
            i.src = this.src;
        }

    let buttons = document.querySelectorAll(".btn button");
    for (let b of buttons)
        b.onclick = function() {
            let c = this.getAttribute("rel");
            i.src = `images/galaxys8/${c}_1.jpg`;

            for (let j = 0; j < images.length; j++)
                images[j].src = `images/galaxys8/${c}_${j + 1}.jpg`;
        }
}