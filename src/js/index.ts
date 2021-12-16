import axios from "../../node_modules/axios/index";
import "../styles.css";
require("babel-core/register");
require("babel-polyfill");

import { validationName,validationSurname,validationEmail,validationPhone} from "./helper"

const submite = <HTMLInputElement>document.getElementById("sign-up-button");

const firstName = <HTMLInputElement>document.querySelector('#signup__firstname');
const lastName = <HTMLInputElement>document.querySelector('#signup__lastname');
const email = <HTMLInputElement>document.querySelector('#signup__login');
const phone = <HTMLInputElement>document.querySelector('#signup__password');
const adress = <HTMLInputElement>document.querySelector('#agress_area');
const congratulation = <HTMLInputElement>document.querySelector('.congratulation');

submite.addEventListener('click', (event) => {
    event.preventDefault();
    submitForm((firstName).value,(lastName).value,(email).value,(<HTMLInputElement>phone).value,(<HTMLInputElement>adress).value);

})


async function submitForm(name:string,surname:string,email:string,phone:string,adress:string) {
    try {
        const response = await axios.post('http://localhost:5000/create-user', {
            "name" : name,
            "surname": surname,
            "email": email,
            "phone": phone,
            "adress": adress
    })
        if(response.status === 201) congratulation.classList.remove('hidden')
    } catch (error) {
        alert('user not created');
    }
}
 
firstName.addEventListener('blur',() => {
  const {validErr} = validationName((<HTMLInputElement>firstName).value)
  if(validErr) {
    firstName.classList.add('err')
    submite.disabled = true;
  } else {
    firstName.classList.remove('err');
    submite.disabled = false;
  }
})

lastName.addEventListener('blur',() => {
    const {validErr} = validationSurname((<HTMLInputElement>lastName).value)
    if(validErr) {
        lastName.classList.add('err');
        submite.disabled = true;
    } else{
        lastName.classList.remove('err');
        submite.disabled = false;
    }
  })

  email.addEventListener('blur',() => {
    const {validErr} = validationEmail((<HTMLInputElement>email).value)
    if(validErr) {
        email.classList.add('err');
        submite.disabled = true;
    } else{
        email.classList.remove('err');
        submite.disabled = false;
    }
  })

  phone.addEventListener('blur',() => {
    const {validErr} = validationPhone((<HTMLInputElement>phone).value)
    if(validErr) {
        phone.classList.add('err')
        submite.disabled = true;
    } else{
        phone.classList.remove('err')
        submite.disabled = false;
    }
  })


  

    


