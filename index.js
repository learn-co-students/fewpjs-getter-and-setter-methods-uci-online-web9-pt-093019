// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * this.radius;
    }

    get circumference() {
        return pi * this.diameter;
    }

    get area() {
        return (pi * (this.radius * this.radius))
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    set circumference(circumference) {
        this.radius = circumference / (2 * pi)
    }

    set area(area) {
        // area = pi * (radius * radius)
        // radius = square root of area divided by pi
        this.radius = Math.sqrt(area / pi);

    }
    
}