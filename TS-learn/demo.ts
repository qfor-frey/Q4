

interface Person {
    name: string;
    sayName():void;
}


class Employee implements Person{
    name:string;
    sayName():void{
        console.log('im '+this.name);
    }
}
                        