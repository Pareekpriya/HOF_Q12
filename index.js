let student = [{name:"Alice",marks:58},{name:"Bob",marks:85},{name:"Charlie",marks:92},{name:"David",marks:45}];
 
let processStudent = student.filter(item => item.marks>60);

processStudent.sort((a,b) => b.marks - a.marks);

let studentNames = processStudent.map(learner => learner.name)

console.log(studentNames);
