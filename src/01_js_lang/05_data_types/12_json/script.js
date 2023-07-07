// let student = {
//     name: "John",
//     age: 20,
//     gender: "male",
//     isAdmin: false,
//     courses: ["html", "css", "js"],
//     spouse: null,
// };

// let json = JSON.stringify(student);
// console.log(typeof json);
// let und = JSON.stringify(undefined);

// let user = {
//     sayHi() {
//         console.log("Hi");
//     },

//     [Symbol("id")]: 1,
//     und: undefined,
// };
// console.log(user);

// let str = JSON.stringify(user);

// console.log(str);

// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: ["John", "Jane"],
//     },
// };

// console.log(JSON.stringify(meetup));

// let room = {
//     number: 23,
// };

// let meetup = {
//     title: "Conference",
//     participants: ["John", "Jane"],
// };

// meetup.place = room;
// room.occupiedBy = meetup;

// console.log(meetup);

// JSON.stringify(meetup);

// let room = {
//     number: 23,
// };

// let meetup = {
//     title: "Conference",
//     participants: [{ name: "John" }, { name: "Jane" }],
//     place: room,
// };

// room.occupiedBy = meetup;

// let json = JSON.stringify(meetup, [
//     "title",
//     "participants",
//     "place",
//     "name",
//     "number",
// ]);
// console.log(json);

// let json = JSON.stringify(meetup, (key, value) => {
//     return key === "occupiedBy" ? undefined : value;
// });
// console.log(json);

// let user = {
//     name: "John",
//     age: 20,
//     roles: {
//         isAdmin: false,
//         isEditor: true,
//     },
// };

// console.log(JSON.stringify(user, null, 4));

// let room = {
//     number: 23,

//     toJSON() {
//         return this.number;
//     },
// };

// let meetup = {
//     title: "Conference",
//     date: new Date(Date.UTC(2017, 0, 1)),
//     room,
// };

// console.log(JSON.stringify(room));
// console.log(JSON.stringify(meetup));

// let numbers = "[0, 1, 2, 3, 4]";

// numbers = JSON.parse(numbers);
// console.log(numbers);

// let userData =
//     '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);
// console.log(user.friends[1]);

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str, (key, value) => {
//     return key === "date" ? new Date(value) : value;
// });
// console.log(meetup.date.getDate());

// let schedule = `{
//     "meetups": [
//       {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//       {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//     ]
//   }`;

// schedule = JSON.parse(schedule, (key, value) => {
//     return key === "date" ? new Date(value) : value;
// });

// console.log(schedule);

// let user = {
//     name: "John",
//     sayHi() {
//         return 1;
//     },
// };

// let json = JSON.stringify(user, (key, value) => {
//     return typeof key === "function" ? 1 : value;
// });

// console.log(json);

// let user = {
//     name: "John Smith",
//     age: 35,
// };

// let json = JSON.stringify(user);
// user = JSON.parse(json);
// console.log(user);

let room = {
    number: 23,
};

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
    JSON.stringify(meetup, function replacer(key, value) {
        return key != "" && value == meetup ? undefined : value;
    })
);
