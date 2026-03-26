function hello(nama: string, umur: number, UmurTahunDepan: number): string{
    return 'Halo '+nama+ ', tahun depan umurmu '+UmurTahunDepan+ ' tahun ';
}
let nama: string ="Kharizma";
let umur: number = 15;
let UmurTahunDepan: number = umur + 1; 

console.log(hello(nama, umur, UmurTahunDepan));
