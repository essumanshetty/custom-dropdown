// Display the options to the user
function openOption (){
    // document.querySelector('.option-container').style.height="auto";
    let element = document.querySelector('.option-container');
    element.style.opacity=1;
      // Add Active class so that dropdown-icon can be changed using css
     let toggleActive =document.querySelector('.dropdown-selected');
     toggleActive.classList.add('active');
}

// Set selected menu value
function setSelected(option){
    // alert(option)
    let element = document.querySelector('.dropdown-selected')
    element.innerHTML =option;
    // Hide options after selection
    let hideElement = document.querySelector('.option-container');
    hideElement.style.opacity=0;
    element.classList.remove('active');
}