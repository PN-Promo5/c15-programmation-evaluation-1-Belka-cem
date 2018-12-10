/* exercice 1 */

function createElement() {
  /* create a main container */
  let mainContainer = document.createElement("div")
  document.body.appendChild(mainContainer)
  /* creer label prenom */
  let containerFirst = document.createElement("p")
  mainContainer.appendChild(containerFirst)
  let firstNameLabel = document.createElement("label")
  firstNameLabel.textContent = "Quel est votre prénom ?  "
  containerFirst.appendChild(firstNameLabel)
  let textFirstName = document.createElement("input")
  containerFirst.appendChild(textFirstName)


  /* create label name */
  let containerSecond = document.createElement("p")
  mainContainer.appendChild(containerSecond)
  let nameLabel = document.createElement("label")
  nameLabel.textContent = "Quel est votre nom ?  "
  containerSecond.appendChild(nameLabel)
  let textName = document.createElement("input")
  containerSecond.appendChild(textName)

  /* create  button */
  let buttonOk = document.createElement("input")
  mainContainer.appendChild(buttonOk)
  buttonOk.type = "button"
  buttonOk.value = "ok"

  /* message error*/
  let messageError = document.createElement("label")
  messageError.textContent = "Veuillez remplir tous les champs"
  mainContainer.appendChild(messageError)
  messageError.style.display = "none"


  /* Message welcome */
  let containerHidden = document.createElement("div")
  document.body.appendChild(containerHidden)
  let welcomeMessage = document.createElement("label")

  containerHidden.appendChild(welcomeMessage)
  containerHidden.style.display = "none"


  /* addEventListener for buton ok */
  buttonOk.addEventListener("click", functionContinu, false)

  /* function for boutton ok */
  function functionContinu() {
    if ((textFirstName.value == "") || (textName.value == "")) {
      messageError.style.display = "inherit"

    } else {
      mainContainer.style.display = "none"
      containerHidden.style.display = "inherit"
      welcomeMessage.textContent = "Bienvenue " + textName.value + " " + textFirstName.value + " !"
    }
  }




}






/* exercice 2 */

function createElement2() {
  let mainContainer = document.createElement("div")
  document.body.appendChild(mainContainer)
  /* create label gross monthly salary */
  let containerFirst = document.createElement("p")
  mainContainer.appendChild(containerFirst)
  let grossSalaryLabel = document.createElement("label")
  grossSalaryLabel.textContent = "Salaire mensuel brut  "
  containerFirst.appendChild(grossSalaryLabel)
  let inputGrossSalary = document.createElement("input")
  inputGrossSalary.type = "number"
  containerFirst.appendChild(inputGrossSalary)


  /* create label net monthly salary*/
  let containerSecond = document.createElement("p")
  mainContainer.appendChild(containerSecond)
  let netSalaryLabel = document.createElement("label")
  netSalaryLabel.textContent = "Salaire mensuel net  "
  containerSecond.appendChild(netSalaryLabel)
  let inputNetSalary = document.createElement("input")
  inputNetSalary.type = "number"
  containerSecond.appendChild(inputNetSalary)


  /* create label gross annual salary*/
  let containerThree = document.createElement("p")
  mainContainer.appendChild(containerThree)
  let grossSalaryLabelYear = document.createElement("label")
  grossSalaryLabelYear.textContent = "Salaire annuel brut  "
  containerThree.appendChild(grossSalaryLabelYear)
  let inputGrossSalaryYear = document.createElement("input")
  inputGrossSalaryYear.type = "number"
  containerThree.appendChild(inputGrossSalaryYear)


  /* creer label net annual salary*/
  let containerFour = document.createElement("p")
  mainContainer.appendChild(containerFour)
  let netSalaryLabelYear = document.createElement("label")
  netSalaryLabelYear.textContent = "Salaire annuel net  "
  containerFour.appendChild(netSalaryLabelYear)
  let inputNetSalaryYear = document.createElement("input")
  inputNetSalaryYear.type = "number"
  containerFour.appendChild(inputNetSalaryYear)


  /* addEventListener fot input */
  inputGrossSalary.addEventListener("keypress", calculSalary1, false)
  inputNetSalary.addEventListener("keypress", calculSalary2, false)
  inputGrossSalaryYear.addEventListener("keypress", calculSalary3, false)
  inputNetSalaryYear.addEventListener("keypress", calculSalary4, false)


  /* function calculate different type salaries*/
  function calculSalary1() {
    if (inputGrossSalary.value) {
      inputNetSalary.value = inputGrossSalary.value / 1.298
      inputGrossSalaryYear.value = inputGrossSalary.value * 12
      inputNetSalaryYear.value = inputGrossSalary.value * 12 / 1.298

    }


  }

  function calculSalary2() {
    if (inputNetSalary) {
      inputGrossSalary.value = inputNetSalary.value * 1.98
      inputGrossSalaryYear.value = inputNetSalary.value * 12 / 1.298
      inputNetSalaryYear.value = inputNetSalary.value * 12
    }
  }

  function calculSalary3() {
    if (inputGrossSalaryYear) {
      inputGrossSalary.value = inputGrossSalaryYear.value / 12
      inputNetSalaryYear.value = inputGrossSalaryYear.value / 1.298
      inputNetSalary.value = inputGrossSalaryYear.value / 1.298 / 12

    }
  }

  function calculSalary4() {
    if (inputNetSalaryYear) {
      inputGrossSalary.value = inputNetSalaryYear.value * 1.298 * 12
      inputNetSalary.value = inputNetSalaryYear.value / 12
      inputGrossSalaryYear.value = inputNetSalaryYear.value * 1.298
    }


  }






}

createElement2()





/* exercice 3 */

function functionEvenNumber(tab) {
  let i = 0;
  let currentElement;

  while (i <= number.length) {
    currentElement = number[i];
    i = i + 1
    if (currentElement % 2 == 0) {
      console.log(currentElement)


    }

  }

}


/* exercice 4 */


/* exercice 5 */

function numberRandom(tab) {
  let i = 0;
  let currentElement;
  let numberR = Math.floor(Math.random() * 100)
  let number = []

  while (i <= number.length) {
    currentElement = number[i];
    i = i + 1
    number.push(numberR)


  }

  return number[128]
}


let number = []

let alleatoire = numberRandom(number)
console.log(alleatoire)
