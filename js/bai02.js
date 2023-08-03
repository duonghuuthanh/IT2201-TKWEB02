function loadCates() {
    fetch("data/categories.json").then(res => res.json()).then(data => {
        let h = "";
        for (let c of data)
            h += `<li><a href="#">${c.name}</a></li>`;

        // Cách 1
        // let d = document.getElementById("menu");
        // d.innerHTML += h;

        // Cách 2
        let d = document.querySelector("#menu :first-child");
        d.insertAdjacentHTML("afterend", h);
    })
}

function loadProducts() {
    fetch("data/products.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data)
            h += `
            <div class="product">
                <div>
                    <div><img src="images/${p.image}" alt="iPhone" /></div>
                    <h3>${p.name}</h3>
                    <p>${p.price} VNĐ</p>
                    <a href="javascript:;" class="del">&times;</a>
                </div>
            </div>
            `;

        let d = document.getElementById("products");
        d.innerHTML = h;

        // Gắn sự kiện
        let buttons = document.getElementsByClassName("del");
        for (let b of buttons)
            b.addEventListener("click", function() {
                if (confirm("Bạn chắc chắn xóa không?") === true)
                    this.parentNode.parentNode.remove();
            })
    })
}

window.onload = function() {
    loadCates();
    loadProducts();

    let k = document.getElementById("kw");
    let m = document.getElementById("menu");
    k.addEventListener("blur", function() {
        if (this.value === "")
            this.classList.toggle("error");
    });

    let d = document.querySelector(".show-nav");
    d.addEventListener("click", function() {
        m.style.right = "50%";
        m.style.left = 0;
    });

    let c = document.querySelector(".close");
    c.addEventListener("click", function() {
        m.style.right = "unset";
        m.style.left = "-100%";
    })
}