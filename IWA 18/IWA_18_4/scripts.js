/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {}
const handleDragEnd = (event) => {}
const handleHelpToggle = (event) => {}
const handleAddToggle = (event) => {}
const handleAddSubmit = (event) => {}
const handleEditToggle = (event) => {}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)


//function
html.other.help.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', () => {
    html.help.overlay.classList.add('visible');
    html.help.cancel.focus();
});
html.help.cancel.addEventListener('click', () => {
    html.help.overlay.classList.remove('visible');
    html.other.add.focus();
});

html.other.add.addEventListener('click', () => {
    html.add.overlay.classList.add('visible');
    html.add.textInput.focus();
});

html.add.cancel.addEventListener('click', () => {
    html.add.overlay.classList.remove('visible');
    html.add.textInput.value = '';
    html.add.tableInput.value = '';
    html.other.add.focus();
});

html.other.add.addEventListener('click', () => {
    html.add.overlay.classList.add('visible');
    html.add.textInput.focus();
});

html.add.cancel.addEventListener('click', () => {
    html.add.overlay.classList.remove('visible');
    html.add.textInput.value = '';
    html.add.tableInput.value = '';
    html.other.add.focus();
});

// html.add.form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // Get the input values and add the new order to the "Ordered" column
//     const text = html.add.textInput.value.trim();
//     const table = html.add.tableInput.value.trim();
//     if (text && table) {
//         const order = { id: generateOrderId(), text, table, status: 'ordered' };
//         addOrder(order);
//         html.add.textInput.value = '';
//         html.add.tableInput.value = '';
//     }
// }

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}