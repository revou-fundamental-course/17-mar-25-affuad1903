
// Deklarasi Untuk Get id button
const persegi = document.getElementById("buttonPersegi");
const persegiPanjang = document.getElementById("buttonPersegiPanjang");
// Deklarasi Untuk Get id display
const checkPersegiDisplay = document.getElementById('persegiDisplay');
const checkPersegiPanjangDisplay = document.getElementById('persegiPanjangDisplay');

// function Menampilkan Display Persegi 
persegi.addEventListener("click", function(){

    // Kondisi untuk mengganti class agar berubah warna buttonnya
    if(persegi.classList.contains("nav-fiture-non-active") && persegiPanjang.classList.contains("nav-fiture-non-active"))
        {
            persegi.classList.replace("nav-fiture-non-active","nav-fiture-active");
            // untuk memunculkan efek visible dengan menggunakan scrollheight sesuai tinggi element
            checkPersegiDisplay.style.maxHeight = checkPersegiDisplay.scrollHeight + "px";
            checkPersegiDisplay.style.opacity="1";
            checkPersegiDisplay.classList.add('visible');
            checkPersegiDisplay.classList.remove('unvisible');
        }else if(persegiPanjang.classList.contains("nav-fiture-non-active")==false && persegi.classList.contains("nav-fiture-non-active")==true && checkPersegiPanjangDisplay.classList.contains('visible')==true){
            persegiPanjang.classList.replace("nav-fiture-active","nav-fiture-non-active");
            persegi.classList.replace("nav-fiture-non-active","nav-fiture-active");
            checkPersegiDisplay.classList.remove('unvisible');
            checkPersegiDisplay.classList.add('visible');
            checkPersegiPanjangDisplay.classList.remove('visible');
            checkPersegiPanjangDisplay.classList.add('unvisible');
            checkPersegiPanjangDisplay.style.maxHeight ="0px";
            checkPersegiPanjangDisplay.style.opacity="0";
            checkPersegiDisplay.style.maxHeight = checkPersegiDisplay.scrollHeight + "px";
            checkPersegiDisplay.style.opacity="1";
    }
});

// function  Menampilkan Display Persegi Panjang
persegiPanjang.addEventListener("click", function(){

    // Kondisi untuk mengganti class agar berubah warna buttonnya
    if(persegi.classList.contains("nav-fiture-non-active") && persegiPanjang.classList.contains("nav-fiture-non-active"))
        {
            persegiPanjang.classList.replace("nav-fiture-non-active","nav-fiture-active");
            // untuk memunculkan efek visible dengan menggunakan scrollheight sesuai tinggi element
            checkPersegiPanjangDisplay.style.maxHeight = checkPersegiPanjangDisplay.scrollHeight + "px";
            checkPersegiPanjangDisplay.style.opacity="1";
            checkPersegiPanjangDisplay.classList.add('visible');
            checkPersegiPanjangDisplay.classList.remove('unvisible');
        }else if(persegiPanjang.classList.contains("nav-fiture-non-active")==true && persegi.classList.contains("nav-fiture-non-active")==false && checkPersegiDisplay.classList.contains('visible')==true){
            persegi.classList.replace("nav-fiture-active","nav-fiture-non-active");
            persegiPanjang.classList.replace("nav-fiture-non-active","nav-fiture-active");
            checkPersegiDisplay.classList.remove('visible');
            checkPersegiDisplay.classList.add('unvisible');
            checkPersegiPanjangDisplay.classList.remove('unvisible');
            checkPersegiPanjangDisplay.classList.add('visible');
            checkPersegiDisplay.style.maxHeight ="0px";
            checkPersegiDisplay.style.opacity="0";
            checkPersegiPanjangDisplay.style.maxHeight = checkPersegiPanjangDisplay.scrollHeight + "px";
            checkPersegiPanjangDisplay.style.opacity="1";
    }
});


// function hitung luas persegi
function hitungLuasPersegi(){
    let checkSisi = document.getElementById('sisiLuas');
    let tampung = document.getElementById("hasilTampungLuas");
    // memanggil children element
    childTampung = tampung.children;
    if(checkSisi.value){
        let valueSisi = document.getElementById('sisiLuas').value;
        let hitungLuas = valueSisi*valueSisi;
        // mengubah teks sesuai dengan input user dan hasil jawaban
        childTampung[0].innerHTML = "L = S X S";
        childTampung[1].innerHTML = "L = " + valueSisi + " X " + valueSisi;
        childTampung[2].innerHTML =  "L = " + hitungLuas;
        // mengubah opacity dengan mengganti class
        tampung.classList.add('visible');
        tampung.classList.remove('unvisible');
        
    }else if(checkSisi.value==0 && tampung.classList.contains('unvisible')===true){
        childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai";
        childTampung[0].innerHTML= "<br>"
        childTampung[2].innerHTML= "<br>"
        tampung.classList.add('visible');
    }else if(checkSisi.value==0 && tampung.classList.contains('visible')===true){
        childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai";
        childTampung[0].innerHTML= "<br>"
        childTampung[2].innerHTML= "<br>"
    }
}
// function reset form luas persegi
function resetFormLuasPersegi(){
    document.getElementById('sisiLuas').value ="";
    let tampung = document.getElementById("hasilTampungLuas");
    tampung.classList.add('unvisible');
    tampung.classList.remove('visible');
}

// function hitung keliling persegi
function hitungKelilingPersegi(){
    let checkSisi = document.getElementById('sisiKeliling');
    let tampung = document.getElementById("hasilTampungKeliling");
    // memanggil children element
    childTampung = tampung.children;

    if(checkSisi.value){
        let valueSisi = document.getElementById('sisiKeliling').value;
        let hitungKeliling = 4 *valueSisi;
        // mengubah teks sesuai dengan input user dan hasil jawaban
        childTampung[0].innerHTML = "K = 4 X S";
        childTampung[1].innerHTML = "K = 4 X " + valueSisi;
        childTampung[2].innerHTML =  "K = " + hitungKeliling;
        // mengubah opacity dengan mengganti class
        tampung.classList.add('visible');
        tampung.classList.remove('unvisible');
    }else if(checkSisi.value==0 && tampung.classList.contains('unvisible')===true){
        childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai";
        childTampung[0].innerHTML= "<br>"
        childTampung[2].innerHTML= "<br>"
        tampung.classList.add('visible');
    }else if(checkSisi.value==0 && tampung.classList.contains('visible')===true){
        childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai";
        childTampung[0].innerHTML= "<br>"
        childTampung[2].innerHTML= "<br>"
    }
}
// function form reset keliling persegi
function resetFormKelilingPersegi(){
    document.getElementById('sisiKeliling').value ="";
    let tampung = document.getElementById("hasilTampungKeliling");
    tampung.classList.add('unvisible');
    tampung.classList.remove('visible');
}

// function hitung luas persegi panjang
function hitungLuasPP(){
    let checkPanjang = document.getElementById('panjangPPLuas');
    let checkLebar = document.getElementById('lebarPPLuas');
    let tampung = document.getElementById("hasilTampungLuasPP");
    // memanggil children element
    childTampung = tampung.children;
    // memanggil value element
    let valuePanjang = checkPanjang.value;
    let valueLebar = checkLebar.value;

    if(valuePanjang > valueLebar && valuePanjang !='' && valueLebar!=''){
        if(tampung.classList.contains('unvisible')==true){
            let hitungLuas =valuePanjang * valueLebar;
            // mengubah teks sesuai dengan input user dan hasil jawaban
            childTampung[0].innerHTML = "L = P X l";
            childTampung[1].innerHTML = "L = " + valuePanjang + " X " + valueLebar;
            childTampung[2].innerHTML =  "L = " + hitungLuas;
            // mengubah opacity dengan mengganti class
            tampung.classList.add('visible');
            tampung.classList.remove('unvisible');
        }else{
            let hitungLuas =valuePanjang * valueLebar;
            // mengubah teks sesuai dengan input user dan hasil jawaban
            childTampung[0].innerHTML = "L = P X l";
            childTampung[1].innerHTML = "L = " + valuePanjang + " X " + valueLebar;
            childTampung[2].innerHTML =  "L = " + hitungLuas;
        }
    }else if(valuePanjang==0 && valueLebar==0){
        if(tampung.classList.contains('unvisible')==true){
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
            tampung.classList.add('visible');
            tampung.classList.remove('unvisible');
        }else{
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
        }
    }else if(valuePanjang==0 && valueLebar){
        if(tampung.classList.contains('unvisible')==true){
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai Panjang";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
            tampung.classList.add('visible');
            tampung.classList.remove('unvisible');
        }else{
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai Panjang";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
        }

    }else if(valuePanjang && valueLebar==0){
        if(tampung.classList.contains('unvisible')==true){
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai Lebar";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
            tampung.classList.add('visible');
            tampung.classList.remove('unvisible');
        }else{
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai Lebar";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
        }
    }else if (valuePanjang <= valueLebar && valuePanjang !='' && valueLebar!=''){
        if(tampung.classList.contains('unvisible')==true){
            childTampung[1].innerHTML = "Nilai Lebar Tidak Boleh Lebih Atau Sama Dari Panjang";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
            tampung.classList.add('visible');
            tampung.classList.remove('unvisible');
        }else{
            childTampung[1].innerHTML = "Nilai Lebar Tidak Boleh Lebih Atau Sama Dari Panjang";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
        }
    }
}
//function reset form luas persegi panjang
function resetFormLuasPP(){
    document.getElementById('panjangPPLuas').value ="";
    document.getElementById('lebarPPLuas').value ="";
    let tampung = document.getElementById("hasilTampungLuasPP");
    tampung.classList.add('unvisible');
    tampung.classList.remove('visible');
}

// function hitung keliling persegi panjang
function hitungKelilingPP(){    
    let checkPanjang = document.getElementById('panjangPPKeliling');
    let checkLebar = document.getElementById('lebarPPKeliling');
    let tampung = document.getElementById("hasilTampungKelilingPP");
    // memanggil children element
    childTampung = tampung.children;
    // memanggil value element
    let valuePanjang = checkPanjang.value;
    let valueLebar = checkLebar.value;

    if(valuePanjang > valueLebar && valuePanjang !='' && valueLebar!=''){
        if(tampung.classList.contains('unvisible')==true){
            let hitungKeliling = 2*valuePanjang + 2*valueLebar;
            // mengubah teks sesuai dengan input user dan hasil jawaban
            childTampung[0].innerHTML = "K = 2P + 2L";
            childTampung[1].innerHTML = "K = 2(" + valuePanjang + ") + 2(" + valueLebar+")";
            childTampung[2].innerHTML =  "K = " + hitungKeliling;
            // mengubah opacity dengan mengganti class
            tampung.classList.add('visible');
            tampung.classList.remove('unvisible');
        }else{
            let hitungKeliling = 2*valuePanjang + 2*valueLebar;
            // mengubah teks sesuai dengan input user dan hasil jawaban
            childTampung[0].innerHTML = "K = 2P + 2L";
            childTampung[1].innerHTML = "K = 2(" + valuePanjang + ") + 2(" + valueLebar+")";
            childTampung[2].innerHTML =  "K = " + hitungKeliling;
        }
    }else if(valuePanjang==0 && valueLebar==0){
        if(tampung.classList.contains('unvisible')==true){
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
            tampung.classList.add('visible');
            tampung.classList.remove('unvisible');
        }else{
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
        }
    }else if(valuePanjang==0 && valueLebar){
        if(tampung.classList.contains('unvisible')==true){
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai Panjang";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
            tampung.classList.add('visible');
            tampung.classList.remove('unvisible');
        }else{
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai Panjang";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
        }

    }else if(valuePanjang && valueLebar==0){
        if(tampung.classList.contains('unvisible')==true){
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai Lebar";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
            tampung.classList.add('visible');
            tampung.classList.remove('unvisible');
        }else{
            childTampung[1].innerHTML = "Anda Harus Memasukkan Nilai Lebar";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
        }
    }else if (valuePanjang <= valueLebar && valuePanjang !='' && valueLebar!=''){
        if(tampung.classList.contains('unvisible')==true){
            childTampung[1].innerHTML = "Nilai Lebar Tidak Boleh Lebih Atau Sama Dari Panjang";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
            tampung.classList.add('visible');
            tampung.classList.remove('unvisible');
        }else{
            childTampung[1].innerHTML = "Nilai Lebar Tidak Boleh Lebih Atau Sama Dari Panjang";
            childTampung[0].innerHTML= "<br>";
            childTampung[2].innerHTML= "<br>";
        }
    }
}
// function reset form keliling persegi panjang
function resetFormKelilingPP(){
    document.getElementById('panjangPPKeliling').value ="";
    document.getElementById('lebarPPKeliling').value ="";
    let tampung = document.getElementById("hasilTampungKelilingPP");
    tampung.classList.add('unvisible');
    tampung.classList.remove('visible');
}

// Tahun akan berganti terus
document.getElementById("year").textContent = new Date().getFullYear();

