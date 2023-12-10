// 1. Створити клас Людина.

// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.
class Person{
    name;
    male;
    constructor(name, male){
        this.name = name
        this.male = male
    }
}

// function Person(name, male){
//     this.name = name
//     this.male = male
// }

//2. Створити клас Квартира.

// Властивості:
    // конструктор не потрібен;
    // масив жителів, який при створенні пустий.
// Методи:
    // додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
class Apartments{
    residents = []

    addResident(person){
        this.residents.push(person)
    }
}

// 3. Створити клас Будинок.

// Властивості:
    // масив квартир, який при створенні пустий;
    // максимальна кількість квартир.
// Методи:
    // конструктор, який приймає один параметр: максимальну кількість квартир;
    // додати квартиру - метод повинен приймати екземпляр класу Квартира, 
    // перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, 
    //і якщо це так, додати квартиру, 
    //в іншому випадку виводить у консоль відповідне повідомлення.

    class House{
        flats = [];
        maxFlats = 0;

        constructor(max){
            this.maxFlats = max;
        }

        addFlat(flat){
            if(this.maxFlats > this.flats.length){
                this.flats.push(flat)
            }else {
                console.log('кількість перевищує максимальну кількість квартир')
            }

        }

    }

const personTania = new Person('Tania', 'female');
const personLiza = new Person('Liza', 'female');
const personIvan = new Person('Ivan', 'male');
const personStepan = new Person('Stepan', 'male');
const personGrigorii = new Person('Grigorii', 'male');
const flat1 = new Apartments();
const flat2 = new Apartments();
const flat3 = new Apartments();
const flat4 = new Apartments();
flat1.addResident(personTania);
flat1.addResident(personLiza);
flat2.addResident(personIvan);
flat3.addResident(personStepan);
flat4.addResident(personGrigorii)
const house = new House(3);
house.addFlat(flat1)
house.addFlat(flat2)
house.addFlat(flat3)
house.addFlat(flat4)