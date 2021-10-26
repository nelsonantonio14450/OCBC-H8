
// ### Menerapkan TypeScript

// #### Deklarasi Variable

// ```ts
// // [let | const] [namaVariable]: [tipeData | tipeDataLain | ...] = [value]
// const message: string = "Hello FSD OCBC 1"

// let students: any[] = [
//   [ 'Gusti', true, [ 'FSD', 'OCBC' ] ],
//   [ 'Ricky', true ],
//   ''
// ]
// ```

// #### Deklarasi Function

// ```ts
// function greetParticipant (name: string, age?: number) {
//   console.log(`Hello ${name}! Your age is ${age}.`)
// }

// greetParticipant('Ricky')
// ```

// #### Deklarasi Object

// ##### cara 1: declare type langsung

// ```ts
// let student: {
//   name: string
//   age: number | string
//   score: number
//   address?: string
// } = {
//   name: 'Budi',
//   age: 71,
//   score: 100,
//   address: "Jl. Merdeka 1234",
// }
// ```

// ##### cara 1: declare type melalui Interface

// ```ts
// // kita bisa define interface seperti ini...

// interface StudentObject {
//   name: string
//   age: number | string
//   score: number
//   address?: string
// }

// // kemudian kita bisa declare seperti ini...

// let anotherStudent: StudentObject = {
//   name: "Rara",
//   age: "infinite",
//   score: 100,
// }

// // atau kita bisa declare sebagai array...

// let employees: StudentObject[] = [
//   // kemudian kita input object secara langsung di sini...

//   {
//     name: "Bayu",
//     age: 21,
//     score: 100
//   },

//   // atau pass sebuah variable di sini,
//   // selama object memiliki tipe data yang sama

//   anotherStudent
// ]
// ```

// #### Deklarasi Class

// ```ts
// class Person {
//   // name: string;
//   // private age: number;

//   constructor (protected name: string, private age: number) {
//     this.name = name
//     this.age = age
//   }

//   get personAge(): number {
//     return this.age
//   }
// }

// class Student extends Person {
//   score: number;
//   mentors: string[] = [];

//   constructor (name: string, age: number, score: number, firstMentor: string) {
//     // pakai super()
//     super(name, age)
//     this.score = score
//     this.mentors.push(firstMentor)
//   }

//   changeScore (newScore: number) {
//     this.score = newScore
//   }

//   addMentor (mentorName: string) {
//     this.mentors.push(mentorName)
//   }

//   get studentName () {
//     return this.name
//   }
// }

// const riyan = new Student('Riyan', 22, 100, 'Arif')

// console.log(riyan)

// riyan.changeScore(105)
// riyan.addMentor('Eas')

// console.log(riyan.studentName)
// ```