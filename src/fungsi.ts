function sapaan(input: String | Number) : string{
    if (typeof input === "string"){
        return `Halo, ${input}`;
    }
    else {
        return `Umur : ${input} tahun`;
    }
}

console.log(sapaan("Rizma"));
console.log(sapaan(18));