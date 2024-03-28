document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const box = document.querySelector('.box');
    const yes = document.querySelector('.yes');
    const no = document.querySelector('.no');
    const boxAns = document.querySelector('.boxAns');
    const text = document.querySelector('.text');
    const img1 = document.querySelector('.img1');
    const title = document.querySelector('.title');
    
    
    

    button1.addEventListener("click", () => {
        box.style.backgroundColor = "#E12E2E";
        button1.style.display = "none";
        yes.style.display = "none"
        no.style.display = "none"
        boxAns.style.margin = "16px 0px 0px 0px";
        text.innerHTML = "Anda adalah seorang Teknisi";
        img1.src = "image 2.png";
        title.innerHTML = "Anda Berbohong!";

    });
    button2.addEventListener("click", () => {
        box.style.backgroundColor = "#6FD240";
        button1.style.display = "none";
        yes.style.display = "none"
        no.style.display = "none"
        boxAns.style.margin = "16px 0px 0px 0px";
        text.innerHTML = "Anda adalah seorang Mahasiswa";
        img1.src = "image 3.png";
        title.innerHTML = "Anda Benar!";
    });
        
});
