
class Circle {
    constructor(r) {
        this.radius = r 
    }

    set diameter(d) {
        this.radius = d/2;
    }

    set area(a) {
        this.radius = Math.sqrt(a/Math.PI);
    }

    set circumference(c) {
        this.radius = (c/(2 * Math.PI));
    }

    get diameter() {
        return (2 * this.radius);
    }

    get circumference() {
        return (this.radius * 2 * Math.PI);
    }

    get area() {
        return ((this.radius ** 2) * Math.PI)
    }
}