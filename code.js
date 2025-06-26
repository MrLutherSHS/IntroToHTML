function showAll() {
    // Set the given element to display
    var elements = document.querySelectorAll('tr');
    for (var i = 0; i < elements.length; i++) {
        show(elements[i]);
    }
}

function show(element) {
    // Set the given element to display
    element.style.display = 'table-row';
    console.log('Showing ' + element.id);
}

function hide(element) {
    // Set the given element to hide - using display removes it from space
    element.style.display = 'none';
    console.log('Hiding ' + element.id);
}

function showSpecific(value){
    // Iterate through the elements and look for a specific value. Hide the others.
    var elements = document.querySelectorAll('tr');
    for (var i = 0; i < elements.length; i++)
    {
        // Skip the header row
        if (elements[i].id === 'headerRow')
        {
            show(elements[i]);
        }

        else if (elements[i].id === value)
        {
            show(elements[i]);
        }
        else
        {
            hide(elements[i]);
        }
    }
}

document.querySelector('select').onchange = function() {
    // Can use 'this' to get the object that triggered the event. Can then read its value.
    console.log(this.value);
    showSpecific(this.value);
}

document.querySelector('#showAll').onclick = function(){
    showAll();
}

window.onload = function() {
    // Hides the table on load
    showSpecific(null);
}

let favForm = document.getElementById("favForm");
favForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let favFood = document.getElementById("favFood").value;
    let favColour = document.getElementById("favColour").value
    alert(`You like ${favFood} and ${favColour}`)
})
