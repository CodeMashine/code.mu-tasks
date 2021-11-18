'use strict'
//1

const square = {
    start: function () {
        return this.side = +prompt('input first side')
    },

    space_func: function () {
        return this.space = this.side ** 2;
    },

    perimetr_func: function () {
        return this.perimetr = this.side * 4;
    },
}

//2

const rectangle = {
    start: function () {
        const sides = {
            a : +prompt('input first side'),
            b : +prompt('input second side'),
             } ;
        return this.sides = sides;
    } ,

    space_func: function () {
        let space = this.sides.a * this.sides.b;
        return this.space=space;
    },

    perimetr_func: function () {
        let perimetr = (this.sides.a + this.sides.b) * 2;
        return this.perimetr = perimetr;
    },
}

//3
const circle = {
    start: function () {
        return this.rad = +prompt('input radius')
    },

    lgth: function () {
        return this.length =  (2 * Math.PI * this.rad);
    },

    space_func: function () {
        return this.space =  (Math.PI * this.rad ** 2);;
    },
}

//4
const triangle = {
    start: function () {
        const sides = {
            a: +prompt('input first side'),
            b: +prompt('input second side'),
            с: +prompt('input third side'),
        };
        return this.sides = sides;
    },

    space_func: function () {
        const perimetr = this.perimetr_func();
        const semiPr = perimetr / 2; 
        const space = semiPr * (semiPr - this.sides.a) * (semiPr - this.sides.b) * (semiPr - this.sides.с);
        return this.space = Math.round(Math.sqrt(space));
    },

    perimetr_func: function () {
        const perimetr = (this.sides.a + this.sides.b + this.sides.с);
        this.perimetr = perimetr;
        return perimetr;
    },

}