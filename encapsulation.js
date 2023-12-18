class Encapsulation {
    constructor() {
        this.fname;
        this.age;
        this.city;
    }

    getFname() {
        return this.fname;
    }

    setFname(fname) {
        this.fname = fname;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getCity() {
        return this.city;
    }

    setCity(city) {
        this.city = city;
    }
}

const encap = new Encapsulation();
encap.setFname("Jenith");
encap.setAge(23);
encap.setCity("Theni");

console.log(encap.getFname());
console.log(encap.getAge());
console.log(encap.getCity());
