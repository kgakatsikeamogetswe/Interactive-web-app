/**
 * A pre-defined list of tables IDs to be used in the app. This can be
 * configured before the app is started, and allows the app to be used in
 * different environments.
 */
export const TABLES = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13'
]

/**
 * The different states that an order can be in. This can not be configured
 * before-hand just yet since the app doesn't yet create the HTML dynamically.
 * However there is room to build this functionality out at the future point.
 */
export const COLUMNS = [
    'ordered',
    'preparing',
    'served',
]

/**
 * The active state of the app expressed as an object literal. This should serve
 * as the single source of truth for the state that the app is in. While it
 * would be easier to save this state in the DOM, it would be much harder to
 * maintain, update and extends since the DOM itself can not be persisted or
 * saved in storage (either local or remote).
 */
export const state = {
    orders: {},
    dragging: {
        source: null,
        over: null,
    }
}

/**
 * Given that an order can have the exact same title, table and column, a way is
 * required to uniquely identify an order. This function creates a unique ID by
 * combining a random number, a timestamp and another random number. While in
 * theory it is unlikely for two orders to have the exact same timestamp up to
 * the millisecond, it is still possible with edge cases like different
 * timezones. Therefore two additional random numbers are added to the ID to
 * ensure additional uniqueness.
 */
const createUniqueId = () => {
    const random1 = Math.floor(Math.random() * 10000000000000000)
    const random2 = Math.floor(Math.random() * 10000000000000000)
    const timestamp = new Date().getTime()
    return `${random1}-${timestamp}-${random2}`
}

/**
 * A factory function that creates an order object literal representing an
 * actual order in the app state. It is wrapped in a factory function instead of
 * just being created directly since several values are created automatically
 * such as a unique ID and the creation date of the order.
 *
 * @param {object} props 
 * @returns {object}
 */
export const createOrderData = (props) => {
    const { title, table, column } = props

    return {
        title,
        table,
        column,
        id: createUniqueId(),
        created: new Date(),
    }
}

/**
 * A function that updates the state of the app to reflect current order that is
 * being dragged around the screen by a user, and also which column (if any) it
 * is currently being dragged over. This functionality is wrapped in a factory
 * function in order to ensure that the state is not updated if attempting to
 * update to the same exact values again (since the DOM event would fire each
 * time a new HTML element is dragged over, regardless whether it part of the
 * same column or not)
 *
 * @param {object} newDragging 
 */
export const updateDragging = (newDragging) => {
    const { source = state.dragging.source, over = state.dragging.over } = newDragging
    if (over === state.dragging.over) return

    state.dragging = {
        source,
        over,
    }
}


import { TABLES, COLUMNS, state, createOrderData, updateDragging } from './constants.js';

const addButton = document.getElementById('add-order-button');
const helpButton = document.getElementById('help-button');
const closeButton = document.getElementById('close-button');
const helpOverlay = document.getElementById('help-overlay');
const addOverlay = document.getElementById('add-order-overlay');
const addCancelButton = document.getElementById('add-order-cancel-button');
const addSubmitButton = document.getElementById('add-order-submit-button');
const orders = document.getElementById('orders');

let draggingOrder;

// Add event listeners

addButton.addEventListener('click', openAddOverlay);
helpButton.addEventListener('click', openHelpOverlay);
closeButton.addEventListener('click', closeOverlay);
addCancelButton.addEventListener('click', closeOverlay);
addSubmitButton.addEventListener('click', addOrder);
orders.addEventListener('mousedown', startDragging);
orders.addEventListener('mousemove', handleDragging);
orders.addEventListener('mouseup', endDragging);

// Helper functions

function openAddOverlay() {
  // Clear previous input values
  addOverlay.querySelector('#add-order-title-input').value = '';
  addOverlay.querySelector('#add-order-table-input').value = TABLES[0];
  addOverlay.querySelector('#add-order-column-input').value = COLUMNS[0];

  // Show the overlay
  addOverlay.classList.remove('hidden');
  addOverlay.querySelector('#add-order-title-input').focus();
}

function openHelpOverlay() {
  // Show the overlay
  helpOverlay.classList.remove('hidden');
}

function closeOverlay() {
  // Hide the current overlay and reset the focus to the add button
  const activeOverlay = document.querySelector('.overlay:not(.hidden)');
  if (activeOverlay) {
    activeOverlay.classList.add('hidden');
    addButton.focus();
  }
}

function addOrder() {
  // Get the input values and create a new order object
  const titleInput = addOverlay.querySelector('#add-order-title-input');
  const tableInput = addOverlay.querySelector('#add-order-table-input');
  const columnInput = addOverlay.querySelector('#add-order-column-input');
  const title = titleInput.value.trim();
  const table = tableInput.value;
  const column = columnInput.value;
  if (!title) {
    titleInput.focus();
    return;
  }
  const order = createOrderData({ title, table, column });

  // Add the order to the state and the DOM
  state.orders[order.id] = order;
  renderOrder(order);

  // Close the overlay and reset the focus to the add button
  closeOverlay();
}

function renderOrder(order) {
  const orderEl = document.createElement('div');
  orderEl.className = 'order';
  orderEl.dataset.id = order.id;
  orderEl.dataset.column = order.column;
  orderEl.draggable = true;
  orderEl.addEventListener('dragstart', () => {
    draggingOrder = order;
  });
  orderEl.addEventListener('dragend', () => {
    draggingOrder = null;
    updateDragging({});
  });
  orderEl.innerHTML = `
    <div class="order-title">${order.title}</div>
    <div class="order-table">Table ${order.table}</div>
  `;
  orders.querySelector(`#${order.column}-column`).appendChild(orderEl);
}

function startDragging(e) {
  if (!e.target.matches('.order')) return;
  e.preventDefault();
  updateDragging({ source: e.target.dataset.id });
}

function handleDragging(e) {
  if (!draggingOrder) return;
}