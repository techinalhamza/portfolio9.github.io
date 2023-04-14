{/* <script src="https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js"></script>

var typed = new Typed(".input", {
    strings: ["Web Developer", "UX Designer", "Photo Gharapher"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
}); */}

let title = document.querySelector('.input');
let name = "Web Developer|"
let index = 1;

const typeWriter = () => {
    let new_title = name.slice(0,index);
    title.innerText = new_title;

    index > name.length ? index = 1 : index++;
    // index++;

    setTimeout(() => typeWriter(), 200)
}

typeWriter();












.experiance {
    width: 100%;
    height: 80vh;
    background: black;
    /* outline: 2px solid red; */
    /* padding-bottom: 50px; */
    /* box-shadow: 0px 14px 48px #FC427B; */
}

.exp-contant {
    position: relative;
    width: 100%;
    height: 60%;
    margin: auto;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border: 2px solid red; */

}

.exp-contant .item {
    position: relative;
    width: 40%;
    height: 80%;
    background: transparent;
    border-radius: 25px;
    border: 2px solid #0ef;
    transition: 0.5s ease;
    overflow: hidden;
}

.exp-contant .item:hover {
    border-color: lightseagreen;
}

.exp-contant .item:hover h1 {
    background: lightseagreen;
}

.item h1 {
    padding-top: 10px;
    color: #003333;
    background: #0ef;
    font-weight: 700;
    transition: 0.5s ease;
}

/* .item:hover {
    background: transparent;
    border-color: #FC427B;
} */

.exp-list {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    justify-content: space-around;
    padding-top: 30px;
}

.exp-list li {
    list-style: none;
    color: lightseagreen;
    padding: 20px;
}

.exp-list li h3 {
    color: white;
}

.icon {
    color: lightseagreen;
}