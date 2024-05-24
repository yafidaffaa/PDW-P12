function kirimData() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;
    var tanggal = document.getElementById("tanggal").value;
    var angkatan = document.getElementById("angkatan").value;

    var message =
        "Nama      : " + padRight(name, 12) + "\n" +
        "NIM       : " + padRight(nim, 12) + "\n" +
        "Peminatan : " + padRight(peminatan, 12) + "\n" +
        "Alamat    : " + padRight(alamat, 12) + "\n" +
        "Tanggal   : " + padRight(tanggal, 12) + "\n" +
        "Angkatan  : " + padRight(angkatan, 12);

    alert(message);

    return false; 
}

function padRight(str, length) {
    return (str + " ".repeat(length)).slice(0, length);
}

var tanggalInput = document.getElementById('tanggal');
flatpickr(tanggalInput, {
    enableTime: false,
    dateFormat: 'd-m-Y',
});
