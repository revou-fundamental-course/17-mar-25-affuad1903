// Javascript External
// function persegiPanjang(persegiPanjang)
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

// function persegi(persegi)
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

// function hitung luas persegi
function hitungLuas(){
    let checkSisi = document.getElementById('sisiLuas');
    if(checkSisi.value){
        let valueSisi = document.getElementById('sisiLuas').value;
        let hitungLuas = valueSisi*valueSisi;
        document.getElementById("hasilTampungLuas").innerHTML = 
            `<p>L = S x S</p>
             <p>L = ${valueSisi} x ${valueSisi}</p>
             <p>L = ${hitungLuas}</p>`;
    }else{
        document.getElementById("hasilTampungLuas").innerHTML = 
       ` <p>Anda harus memasukkan nilai</p>`
    }
}
function resetFormLuas(){
    document.getElementById('sisiLuas').value ="";
    document.getElementById('hasilTampungLuas').innerHTML ="";
}

// functiong hitung keliling persegi
function hitungKeliling(){
    let checkSisi = document.getElementById('sisiKeliling');
    if(checkSisi.value){
        let valueSisi = document.getElementById('sisiKeliling').value;
        let hitungKeliling = 4*valueSisi;
        document.getElementById("hasilTampungKeliling").innerHTML = 
            `<p>K = 4 x S</p>
             <p>K = 4 x ${valueSisi}</p>
             <p>K = ${hitungKeliling}</p>`;
    }else{
        document.getElementById("hasilTampungKeliling").innerHTML = 
       ` <p>Anda harus memasukkan nilai</p>`
    }
}
function resetFormKeliling(){
    document.getElementById('sisiKeliling').value ="";
    document.getElementById('hasilTampungKeliling').innerHTML ="";
}

// Tahun akan berganti terus
document.getElementById("year").textContent = new Date().getFullYear();

