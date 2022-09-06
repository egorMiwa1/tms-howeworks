/*Создать объект, где ключ, это первая буква фамилии, а значение -
массив из фамилий пользователей начинающихся на эту букву. Объект
должен состоять только из ключей существующих фамилий в этом
массиве. Например в этом массиве нет фамилии с букву Y, а значит и
такого поля не должно быть в объекте. Пример того, что надо получить,
когда пользователи имеют следующие фамилии Snow, Felton , Ford,
Ferdinand:
{ s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }*/

type User = {
    "id": number,
    "email": string,
    "first_name": string,
    "last_name": string,
    "avatar": string,
    "age": number
}

const users: User[] = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
        "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
        "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
        "age": 70
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
        "age": 45
    }
];

let objLastName: Record<string, Array<string>> = {};

users.forEach((element) => objLastName[element.last_name[0].toLowerCase() as string] = []);

Object.keys(objLastName).forEach((key) => {
    users.forEach((element) => {
        if (key === element.last_name[0].toLowerCase()) {
            objLastName[key].push(element.last_name as string);
        }
    })
});

const srtObj: string = JSON.stringify(objLastName);

console.log(srtObj);
