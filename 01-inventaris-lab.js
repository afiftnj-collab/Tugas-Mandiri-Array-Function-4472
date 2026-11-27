const barangLab = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Kabel HDMI"
];

// Tahap 1: Function untuk menampilkan data
function tampilkanBarang(daftarBarang) {
    console.log("\nDaftar Barang:");

    if (daftarBarang.length === 0) {
        console.log("Daftar barang kosong.");
    } else {
        for (let i = 0; i < daftarBarang.length; i++) {
            console.log((i + 1) + ". " + daftarBarang[i]);
        }
    }

    console.log("Jumlah Barang: " + daftarBarang.length);
}

// Tahap 2: Function untuk menambahkan barang
function tambahBarang(daftarBarang, namaBarang) {
    if (namaBarang === "") {
        return false;
    }

    if (daftarBarang.includes(namaBarang)) {
        return false;
    }

    daftarBarang.push(namaBarang);
    return true;
}

// Tahap 3: Function untuk mencari barang
function cariBarang(daftarBarang, namaBarang) {
    let indeks = daftarBarang.indexOf(namaBarang);
    return indeks;
}

// Tahap 4: Function untuk menghapus barang
function hapusBarang(daftarBarang, namaBarang) {
    let indeks = daftarBarang.indexOf(namaBarang);

    if (indeks !== -1) {
        daftarBarang.splice(indeks, 1);
        return true;
    } else {
        return false;
    }
}

// Tahap 5: Integrasi seluruh Function
console.log("=== INVENTARIS LABORATORIUM ===");

console.log("\nDaftar Barang Awal:");
tampilkanBarang(barangLab);

// Menambahkan barang Webcam
console.log("\n[Tambah Barang]");
if (tambahBarang(barangLab, "Webcam")) {
    console.log("Webcam berhasil ditambahkan.");
} else {
    console.log("Penambahan barang ditolak.");
}

// Mencari barang Monitor
console.log("\n[Cari Barang]");
let hasilCari = cariBarang(barangLab, "Monitor");

if (hasilCari !== -1) {
    console.log("Monitor ditemukan pada indeks " + hasilCari + ".");
} else {
    console.log("Monitor tidak ditemukan.");
}

// Menghapus barang Mouse
console.log("\n[Hapus Barang]");
if (hapusBarang(barangLab, "Mouse")) {
    console.log("Mouse berhasil dihapus.");
} else {
    console.log("Mouse tidak ditemukan.");
}

// Menampilkan daftar barang terbaru
console.log("\nDaftar Barang Terbaru:");
tampilkanBarang(barangLab);

// Tahap 6: Pengujian Program
console.log("\n=== PENGUJIAN PROGRAM ===");

// Pengujian menambahkan Printer
console.log("\n1. Menambahkan Printer:");
console.log(tambahBarang(barangLab, "Printer")
    ? "Barang berhasil ditambahkan."
    : "Penambahan ditolak.");

// Pengujian menambahkan Monitor yang sudah tersedia
console.log("\n2. Menambahkan Monitor:");
console.log(tambahBarang(barangLab, "Monitor")
    ? "Barang berhasil ditambahkan."
    : "Penambahan ditolak.");

// Pengujian nama barang kosong
console.log("\n3. Menambahkan nama kosong:");
console.log(tambahBarang(barangLab, "")
    ? "Barang berhasil ditambahkan."
    : "Penambahan ditolak.");

// Pengujian mencari Scanner
console.log("\n4. Mencari Scanner:");
console.log("Indeks Scanner: " + cariBarang(barangLab, "Scanner"));

// Pengujian menghapus Scanner
console.log("\n5. Menghapus Scanner:");
console.log(hapusBarang(barangLab, "Scanner")
    ? "Penghapusan berhasil."
    : "Penghapusan gagal tanpa mengubah data.");

// Pengujian Array kosong
console.log("\n6. Menampilkan Array kosong:");
tampilkanBarang([]);