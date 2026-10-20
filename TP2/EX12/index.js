let container = document.getElementById("container");

function adapterLayout() {

    if (window.innerWidth < 500) {
        container.style.flexFlow = "row wrap";
    }
    else {
        container.style.flexFlow = "row";
    }

}

window.addEventListener("resize", adapterLayout);
