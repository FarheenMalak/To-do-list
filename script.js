function tasktoAdd() {
    var taskName = document.querySelector("#taskName").value;

    if (taskName == '') {
        alert("ERROR! Write task please ");
    } else {
        // First create li element
        var addedTask = document.createElement("li");
        // Second a text node 
        var newaddedContent = document.createTextNode(taskName);
        // Making the text node child of li 
        addedTask.appendChild(newaddedContent);
        // Getting the task ul element with id
        var Listtask = document.querySelector("#myTasks");
        // Making the li element child of ul
        Listtask.appendChild(addedTask);
        // clearing input field
        document.querySelector("#taskName").value = '';

        // Creating a close button
        var closeBtn = document.createElement("SPAN");
        var closeIcon = document.createTextNode("\u00D7");
        closeBtn.className = "close";
        closeBtn.appendChild(closeIcon);
        addedTask.appendChild(closeBtn);
    }

    // Adding event to each close button
    var closeButtons = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function () {
            // Get the parent <li> element and hide it
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Adding an event to ul
var list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        // Toggle the 'completed' class for the clicked <li> element
        e.target.classList.toggle('completed');
    }
});
//END