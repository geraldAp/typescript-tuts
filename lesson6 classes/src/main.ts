class Coder {
    // basic structure of a class
    // name: string 
    // music: string
    // age: number
    // lang: string 

    // constructor(

    //     name: string,
    //      music: string, 
    //      age: number, 
    //      lang: string
    //      ) {
    //     this.name = name
    //     this.music = music
    //     this.age = age
    //     this.lang = lang
    // }  


    secondLang!: string
    // telling ts we wont instantiate this or do it right away
    constructor(
        // using visibility modifiers 
        // meaning once name is assigned it can't be changed 
        public readonly name: string,
        public music: string,
        // can only be accessed within the class
        private age: number,
        // protected can be accessed within the class and any class that extends it 
        protected lang: string = 'TypeScript' // making it optional by giving it a default value 
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }


    public getAge() {
        return `Hello, I'm  ${this.age}`
    }

}

console.log('chris')

const Dave = new Coder('Dave', 'Jazz', 20)
console.log(Dave.getAge())
// can't be accessed because its private 
// console.log(Dave.age)
// console.log(Dave.lang)

// extending a class
class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,

    ) {
        super(name, music, age)
        this.computer = computer

    }
    public getLang() {
        return `I write ${this.lang}`
    }

}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(Sara.getLang())
console.log(Sara.name)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implementation of an interface to a class  
interface Musician {
    name: string,
    instrument: string
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string;
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }
    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const page = new Guitarist('Jimmy', 'Ak-47')
console.log(page.play('booms'))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STatic class members

class Peeps {

    // independent of the obj created from the class its in thats for the static meth or var
    static count: number = 0
// as seen here using peeps.count instead of this.count
    static getCount(): number {
        return Peeps.count
    }

    public id: number

    // incrementing the count from class peeps for every obj instantiated from it 

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steeve = new Peeps('Steeve')
const Amy = new Peeps('Amy')

console.log(Steeve.id)
console.log(Peeps.count)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Getters and setters 

class Bands {
    private dataSate: string[]= []

    constructor(){
        this.dataSate = []
    }

    // way to get the data from the private data state in the constructor
    public get data(): string[]{
        return this.dataSate
    }

// using the setter to set the data to the private data state
    public set data(value: string[]) {
        if (Array.isArray(value) && value.every( el => typeof el === 'string')) {
            this.dataSate = value
            return
        } else throw new Error('Invalid data')
    }
    
}

// creating a new instance of the class Bands and setting the data to it
const MyBAnds = new Bands()
MyBAnds.data = ['The Beatles', 'The Rolling Stones']
MyBAnds.data = [...MyBAnds.data,'ZZ Top']
console.log(MyBAnds.data)

  
