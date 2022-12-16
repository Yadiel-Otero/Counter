 //Modal sample implementation (pending implementation)
        let modal = document.getElementById('modal');
        let isEditing = false;

        let editButton = document.getElementById('edit-button');
       

        function toggleEdit(){
            if (isEditing){
                isEditing = false;
                modal.style = 'display: none';
                editButton.style = 'animation: none';
            }

            else{
                isEditing = true;
                modal.style = 'display: flex';   
                editButton.style = 'animation: float 1s ease-in-out infinite';
            }
        }

        function submit() {
            //getting the value from the title input
            let titleModal = document.getElementById('title-modal');
            let title = titleModal.value;

            //getting the value from the value input
            let valueModal = document.getElementById('value-modal')
            let value = valueModal.value;

            //assigning the title from the title input
            let counterName = document.getElementById('counter-name');
            counterName.innerText = title;
            
            //assigning the value from the value input
            let number = document.getElementById('number');
            number.innerText = value;

            toggleEdit();
            isEditing = false; 
        }
