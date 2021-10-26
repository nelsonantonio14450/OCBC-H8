const message: string = "greetings"

const anyMessage: string | number = 123 //lebih dari satu jenis datatype
const arr: (string | number)[] = [123, 'asdasd'] //array 2 datatype
console.log(message)

function greet(name: string, age: number) {
    console.log(`Herrro ${name}, mai age tis ${age}.`)
}

greet('nelson', 13)

interface StudentObj {
    name: string,
    age: number | string,
    score: number
}

let student: StudentObj = {
    name: "necosis",
    age: 71,
    score: 12
}

class Customer {
    name: string
    age: number
    money: number
    items: string[] = ['buku', 'kasd']

    constructor(name: string, age: number, money: number) {
        this.name = name,
            this.age = age,
            this.money = money
    }

    updateDataMoney(money: number) {
        this.money = money
    }

    addItem(itemName: any) {
        this.items.push(itemName)
    }


}

const rai = new Customer('rei', 12, 2000)
rai.updateDataMoney(1000000)
rai.addItem('smahone')
console.log(rai)