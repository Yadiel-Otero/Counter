let counter = 0;

function increaseNumber() {  // Be able to increment the counter by 1
    let number = document.getElementById("number");
    number.innerText = counter += 1;
}

function decreaseNumber() {  // Be able to decrease the counter by 1
    if (counter > 0) {
        let number = document.getElementById("number");
        number.innerText = counter -= 1;
    }
}


function clearnumber() { // clear counter number
    counter = 0;
    let number = document.getElementById("number");
    number.innerText = counter;
}

function editCount() {
    if (document.getElementById("inputbox").value != "") {
        let inputbox = document.getElementById("inputbox").value;
        let number = document.getElementById("number");
        document.getElementById("inputbox").value = '';
        number.innerText = inputbox;
        counter = parseInt(inputbox);
        console.log(inputbox);
    }
    else {
        let number = document.getElementById("number");
        number.innerText = counter;
    }
}

//this is the modal
let modal = document.getElementById('modal');

//this is the edit button (pencil at the top)
let editButton = document.getElementById('edit-button');

//this variable controls the editing state (false by default)
let isEditing = false;

//------------------------- PENDING IMPLEMENTATION ----------------------------//

function toggleEdit() {
    /*************************************************************************************

    Note: this function is applied to the #edit-button button as onClick = "toggleEdit()"

    Description: this function will make the modal visible 
                 IF it is not ALREADY visible. It will also
                 make the modal invisible IF it is ALREADY
                 visible.

    -o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-

    General logic:

    If NOT editing:

    1. make the modal visible X
    2. set the editButton animation property to: float 1s ease-in-out infinite
    3. make isEditing true

    else if editing:

    1. make the modal invisible
    2. set the editButton animation property to: none
    3. make isEditing false   
    
    ************************************************************************************/
    if (isEditing == false) {
        modal.style = "display:flex";
        editButton.style = "animation:float 1s ease-in-out infinite";
        isEditing = true;
    }
    else {
        modal.style = "display:none";
        editButton.style = "animation:none";
        isEditing = false;
    }

}


function submit() {
    /***********************************************************************************
    
    Note: this function is applied to the #submit-modal button as onClick="submit()"

    Description: this function will take the values entered in the 
                 title-modal and value-modal input boxes and update 
                 the #counter-name div and #number div respectively.
                 additionally, when the submit button is clicked
                 the modal should close automatically.
                 
    ***********************************************************************************/
    let title = document.getElementById("title-modal").value;
    document.getElementById("title-modal").value = "";

    let Name = document.getElementById("counter-name");
    Name.innerText = title;

    let value = document.getElementById("value-modal").value;
    document.getElementById("value-modal").value = "";

    let number = document.getElementById("number");
    number.innerText = value;
    counter = parseInt(value);

    toggleEdit();
}