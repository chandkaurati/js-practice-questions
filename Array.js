let employees_data = [
  {
    employee_id: 1,
    employee_name: "Aman",
},
{
    employee_id: 2,
    employee_name: "Bhargava",
},
{
    employee_id: 3,
    employee_name: "Chaitanya",
},
]

const updatedEmployees = employees_data.map((employee)=>{
   if(employee.employee_id == 3){
     return {...employee, employee_name : "aman"}
   }
   return employee
})
// console.log(updatedEmployees)

// sort array by Date

const data = [
  { name: 'Event 1', date: new Date('2023-01-15') },
  { name: 'Event 2', date: new Date('2022-12-20') },
  { name: 'Event 3', date: new Date('2023-03-05') }
];


data.sort((a, b) => a.date > b.date)
// console.log(data)

// count the occurance 

let arr = [
  'geeks', 2, 'geeks', 2, 'Javascript', 4,
  'Javascript', 5, 'for', 6, 'Javascript', 1,
  'for', 5, 7, 8, 'for'
];
let res = {}
arr.forEach((el)=>{
  if(res[el]){
    res[el] += 1
  }else{
  res[el] = 1
  }
})
// console.log(res)

// converting array into object

""
let arrsObj = {}
arr.forEach((el, i)=>{
if(arrsObj) arrsObj[i] = el
})

let arrsObj2 = {...arr}
console.log(arrsObj2)

