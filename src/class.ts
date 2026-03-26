class Lingkaran {
    jariJari: number;  

    constructor(jariJari: number){
        this.jariJari =jariJari;
    }

    hitungLuas() : number{
        return Math.PI * this.jariJari * this.jariJari;
    }
}
const lingkaran1 = new Lingkaran(7);
console.log(" Luas Lingkaran =", lingkaran1.hitungLuas());