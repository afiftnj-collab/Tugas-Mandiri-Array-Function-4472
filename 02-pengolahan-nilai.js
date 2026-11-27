const nilaiPraktik = [80, 70, 90, 65, 75, 85];
const batasTuntas = 75;

// Tahap 1: Function untuk menampilkan nilai
function tampilkanNilai(daftarNilai) {
    console.log("\n=== NILAI PRAKTIK SISWA ===");

    for (let i = 0; i < daftarNilai.length; i++) {
        console.log("Siswa " + (i + 1) + ": " + daftarNilai[i]);
    }
}

// Tahap 2: Function untuk menghitung rata-rata
function hitungRataRata(daftarNilai) {
    if (daftarNilai.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < daftarNilai.length; i++) {
        total += daftarNilai[i];
    }

    let rataRata = total / daftarNilai.length;

    return rataRata;
}

// Tahap 3: Function untuk menghitung jumlah siswa tuntas
function hitungJumlahTuntas(daftarNilai, batas) {
    let jumlahTuntas = 0;

    for (let i = 0; i < daftarNilai.length; i++) {
        if (daftarNilai[i] >= batas) {
            jumlahTuntas++;
        }
    }

    return jumlahTuntas;
}

// Tahap 4: Menampilkan rekapitulasi
console.log("=== NILAI PRAKTIK SISWA ===");

// Menampilkan seluruh nilai
tampilkanNilai(nilaiPraktik);

// Menghitung jumlah siswa
let jumlahSiswa = nilaiPraktik.length;

// Menghitung rata-rata
let rataRata = hitungRataRata(nilaiPraktik);

// Menghitung jumlah siswa tuntas
let jumlahTuntas = hitungJumlahTuntas(nilaiPraktik, batasTuntas);

// Menghitung jumlah siswa belum tuntas
let jumlahBelumTuntas = jumlahSiswa - jumlahTuntas;

// Menampilkan rekapitulasi
console.log("\n=== REKAPITULASI ===");
console.log("Jumlah Siswa: " + jumlahSiswa);
console.log("Nilai Rata-rata: " + rataRata);
console.log("Jumlah Tuntas: " + jumlahTuntas);
console.log("Jumlah Belum Tuntas: " + jumlahBelumTuntas);

// Tahap 5: Pengujian Program
console.log("\n=== PENGUJIAN PROGRAM ===");

const nilaiPengujian = [60, 65, 70, 80, 90];

console.log("\nNilai Pengujian:");
tampilkanNilai(nilaiPengujian);

let jumlahSiswaUji = nilaiPengujian.length;
let rataRataUji = hitungRataRata(nilaiPengujian);
let jumlahTuntasUji = hitungJumlahTuntas(nilaiPengujian, batasTuntas);
let jumlahBelumTuntasUji = jumlahSiswaUji - jumlahTuntasUji;

console.log("\n=== REKAPITULASI PENGUJIAN ===");
console.log("Jumlah Siswa: " + jumlahSiswaUji);
console.log("Nilai Rata-rata: " + rataRataUji);
console.log("Jumlah Siswa Tuntas: " + jumlahTuntasUji);
console.log("Jumlah Siswa Belum Tuntas: " + jumlahBelumTuntasUji);