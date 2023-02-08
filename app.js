const ulList = document.getElementById('ulList')
const form = document.querySelector('form')
const submit = document.getElementById('submit')
const name = document.getElementById('name')
const grade = document.getElementById('grade')
const program = document.getElementById('program')
const homeSchool = document.getElementById('homeSchool')
const email = document.getElementById('email')
let loginsARR = []
var i = 0

class LoginTemplate{
  constructor(name, program, grade, homeSchool, email){
    this.name = name
    this.program = program
    this.grade = grade
    this.homeSchool = homeSchool
    this.email = email
  }
  addLogin() {
    let createLI = document.createElement('LI')
    createLI.innerHTML = `<h1>${this.name}</h1>
                          Program: ${this.program} <br>
                          Grade: ${this.grade} <br>
                          Home School: ${this.homeSchool} <br>
                          Email: ${this.email}`
    ulList.appendChild(createLI)
    console.log(loginsARR[i])
    i++
    reset()
    return
  }  
}

function reset(){
  name.value = ""
  grade.value = ""
  program.value = ""
  homeSchool.value = ""
  email.value = ""
}



form.addEventListener("submit", e => {
  e.preventDefault()
  let Name = name.value
  let Program = program.value
  let Grade = grade.value
  let HomeSchool = homeSchool.value
  let Email = email.value
  loginsARR[i] = new LoginTemplate(Name, Program, Grade, HomeSchool, Email)
  return loginsARR[i].addLogin()
})




