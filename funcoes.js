function changepic(picture, altu, largu, esquerda, topo) {
    document.getElementById("icone").src = picture;
    const icone = document.getElementById("icone");
    icone.src = picture;
    if (altu !== undefined) {
        icone.style.width = largu + "px";
        icone.style.height = altu + "px";
        icone.style.left = esquerda + "px";
        icone.style.top = topo + "px";
    }
    else {
        icone.style.width = "";
        icone.style.height = "";
        icone.style.left = "";
        icone.style.top = "";
    }
}