// membuat interface Buku
interface Book {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

// fungsi untuk mencetak data buku
function cetakBook(Bk: Book): void {
    console.log(`===== Data Buku =====`);
    console.log(`Judul         : ${Bk.judul}`);
    console.log(`Pengarang     : ${Bk.pengarang}`);
    console.log(`Tahun Terbit  : ${Bk.tahunTerbit}`);
    console.log(`Status        : ${Bk.tersedia ? "Tersedia" : "Tidak Tersedia"}`);
}

// membuat objek buku
const data: Book = {
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    tahunTerbit: 2005,
    tersedia: true
};

// memanggil fungsi untuk menampilkan semua properti buku   
cetakBook(data);