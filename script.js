let teste = [
    "Gabriel",
    "Leandro",
    "Rafael",
    "Samuel",
    "Leandro"
]

//sem arrow
var x = teste.map(function(a){ return a.length});

//com arrow
var x2 = teste.map(a => a.length);

console.log(x, x2);