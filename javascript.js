$(document).ready(function(){
    $(".card, .btn-square, .imgtentangkami").hover(function(){ // Ketika mouse diarahkan ke gambar dan card
      $(this).addClass("zoomed"); // Tambahkan class zoomed
    }, function(){ // Ketika mouse keluar dari gambar dan card
      $(this).removeClass("zoomed"); // Hapus class zoomed
    });

    // Fungsi untuk memeriksa apakah elemen berada dalam viewport saat digulir
function isElementInViewport(el) { // Parameter merupakan elemen HTML yang ingin diperiksa apakah berada dalam viewport atau tidak.
    var rect = el.getBoundingClientRect(); // mendapatkan koordinat relatif elemen terhadap viewport menggunakan metode getBoundingClientRect(). Metode ini mengembalikan objek DOMRect yang berisi informasi tentang ukuran dan posisi relatif dari elemen terhadap viewport.
    return ( //  mengembalikan hasil dari pengecekan apakah elemen berada dalam viewport atau tidak.
        rect.top >= 0 && // memastikan bahwa bagian atas elemen berada di atas atau setidaknya di bagian atas viewport.
        rect.left >= 0 && // memastikan bahwa bagian kiri elemen berada di sebelah kiri atau setidaknya di bagian kiri viewport.
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && // memastikan bahwa bagian bawah elemen berada di bawah atau setidaknya di bagian bawah viewport.
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) // memastikan bahwa bagian kanan elemen berada di sebelah kanan atau setidaknya di bagian kanan viewport.
    );
}

  // Fungsi untuk memeriksa setiap elemen <p> saat digulir
function checkFadeIn() { // memeriksa apakah elemen-elemen tertentu telah masuk ke dalam viewport dan memberikan efek fadeIn kepada elemen-elemen tersebut.
    $('p, h1, h2, h3, h4, h5, form, iframe, a').each(function() { // pilih elemen apa saja dan mengulangi setiap elemen yang dipilih
    if (isElementInViewport(this)) { //memeriksa apakah elemen saat ini berada dalam viewport
        $(this).css('opacity', '1'); // Efek fadeIn saat elemen masuk dalam viewport
    }
    });
}

  // Panggil fungsi saat halaman dimuat dan saat digulir
$(window).on('load scroll', checkFadeIn);
});  

// API Email
function SendMail() {
    var params = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        subjek: document.getElementById("subjek").value,
        pesan: document.getElementById("pesan").value
    };
    
    emailjs.send("service_39ypiqi", "template_fl0vfit", params)
        .then(function(response) {
            console.log("Email terkirim:", response);
            document.getElementById("modalMessage").innerText = "Pesan Anda telah berhasil dikirim!";
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();
        }, function(error) {
            console.error("Error saat mengirim email:", error);
            document.getElementById("modalMessage").innerText = "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.";
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();
        });
}