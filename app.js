"use strict";
var _a;
(_a = document.getElementById('createPersonalBookLibrary')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchElement = document.getElementById('search');
    const contactElement = document.getElementById('contact');
    const categoryElement = document.getElementById('category');
    if (searchElement && contactElement && categoryElement) {
        const search = searchElement.value;
        const contact = contactElement.value;
        const category = categoryElement.value;
        const BorrowBookHistoryOutput = `
<h2>Borrow Book History</h2>
<p><strong>Search:</strong><span id="edit-name" class="editable"> ${search} </span></p>
<p><strong>Contact:</strong><span id="edit-name" class="editable"> ${contact} </span></p>

<h2>Category</h2>
<p><strong>Choose a category:</strong><span id=""edit-name" class="editable"> ${category}</span></p>
`;
        const BorrowBookHistoryOutputElement = document.getElementById('BorrowBookHistoryOutput');
        if (BorrowBookHistoryOutputElement) {
            BorrowBookHistoryOutputElement.innerHTML = BorrowBookHistoryOutput;
            makeEditable();
        }
    }
    else {
        console.error(`one or more outputs are missing`);
    }
});
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            var _a;
            const currentElement = element;
            const currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                const input = document.createElement('input');
                input.type = "text";
                input.value = currentValue;
                input.classList.add('editing-input');
                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
