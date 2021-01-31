//declare variable
const navbar = document.getElementById('navbar')

window.onscroll = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbar.style.boxShadow = "0 2px 6px 0 rgb(0 0 0 / 20%)";
        // ayoBerteman.innerHTML = "<br>";
    } else {
        navbar.style.boxShadow = "none";
    }

}