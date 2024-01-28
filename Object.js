let lecture = 10;
let section = 3;
let title = 'Javascript';

// const course = {
//     lecture: 10,
//     section: 3,
//     title: 'Javascript',
//     notes: {
//         introduction: "Welcome to JS course"
//     },
//     enroll() {
//         console.log('You ar sucessfully enrolled');
//     }
// }

// Factory Function

function createcourse(){
    return {
        title: title,
        enroll() {
            console.log('You ar sucessfully enrolled');
        }
    }
}

const course = createcourse('Javascript');

course.enroll()
console.log(course)

// Contructor Function

function Course(title){
    this.title = title,
    this.enroll = function(){
        console.log('you are sucssfully enrolled');
    }
}

const coursE = new Course('Javascript');
delete course.tetle;
course.checkEnrollment = function(){
    console.log('30 users are enrolled');
}
course.enroll()


let number = 10;
let number_2 = number
number = 15;
console.log(number);
console.log(number_2);

let obj = {number : 10};
let obj2 = obj;

obj.number = 15;

console.log(obj)
console.log(obj2)

const cOurse = {
    title: 'javascript',
    enroll() {
        console.log('You are sucessfully enrolled');
    }
}

const course_1 = { ...Course }
course_1.title = "C++"

const courSe= {
    title: 'javascript',
    enroll() {
        console.log('You are sucessfully enrolled');
    }
}

for (let key of Object.keys(courSe)){
    courSe[key]= courSe[key]
}