// register.js

let participants = {
    count: 0
}

function addParticipant() {
    participants.count++;
    participantTemplate(participants.count);
}

function participantTemplate(count) {
    const html = `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}"> First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
                </select>
            </div>
        </section>
    `
    document.querySelector("button#add").insertAdjacentHTML("beforebegin", html);
}

const info = {
    
}

function successTemplate(info) {
    const html = `
        <p>
    `
}

function submitForm(event) {
    // On submit we need to keep the form from doing what it normally would...which is to reload the page.
    event.preventDefault();
    // Then we need to find all of the fee inputs. There will be one for each participant that has been added. The totals from those fields need to be summed up.
    const fees = sumFees();
    // Get the adult name from the form.
    const adultName = document.querySelector("#adult_name");
    // Hide the Form, and show the summary element. Insert the following message into the summary element: "Thank you NAME for registering. You have registered N participants and owe $N in Fees."
    document.querySelector("form").classList.add("hide");


}

function sumFees() {
    let sum = 0;
    
    document.querySelectorAll('[name^="fee"]').forEach(fee => {
        const value = fee.value;
        const numberValue = parseFloat(value);
        sum += numberValue;
    });

    return sum;
}

window.addEventListener("load", () => {participants.count = 1});

document.querySelector("button#add").addEventListener("click",addParticipant);

document.querySelector("form").addEventListener("submit", submitForm);