import "./style.css";
import {
    isValid
} from "./utils";

const form = document.getElementById('form')
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit')

form.addEventListener('submit', submitFormHandler)

function submitFormHandler(event) {
    event.preventDefault();

    if (isValid(input.value)) {
        let question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        };
        submitBtn.disabled = true;
        // Async requested to server to save question in db
        console.log('Question ', question)

        input.value = ''
        input.className = ''
        submitBtn.disabled = false;
    }


}
console.log("app.js...");