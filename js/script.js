function persegiPanjang(persegiPanjang){
    const checkNonActivePP = persegiPanjang.classList;
    const checkNonActiveP = document.getElementById("buttonPersegi").classList;
    if(checkNonActivePP.contains("nav-fiture-non-active")==true && checkNonActiveP.contains("nav-fiture-non-active")==true)
    {
        checkNonActivePP.replace("nav-fiture-non-active","nav-fiture-active");
    }else if(checkNonActivePP.contains("nav-fiture-non-active")==true && checkNonActiveP.contains("nav-fiture-non-active")==false){
        checkNonActiveP.replace("nav-fiture-active","nav-fiture-non-active");
        checkNonActivePP.replace("nav-fiture-non-active","nav-fiture-active");
    }
}
function persegi(persegi){
    const checkNonActiveP = persegi.classList;
    const checkNonActivePP = document.getElementById("buttonPersegiPanjang").classList;
    if(checkNonActiveP.contains("nav-fiture-non-active")==true && checkNonActivePP.contains("nav-fiture-non-active")==true)
    {
        checkNonActiveP.replace("nav-fiture-non-active","nav-fiture-active");
    }else if(checkNonActiveP.contains("nav-fiture-non-active")==true && checkNonActivePP.contains("nav-fiture-non-active")==false){
        checkNonActivePP.replace("nav-fiture-active","nav-fiture-non-active");
        checkNonActiveP.replace("nav-fiture-non-active","nav-fiture-active");
    }
}

