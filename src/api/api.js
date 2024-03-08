/**
 * Fetches gadgets from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of gadgets.
 */
const fetchGadgets = async () => {
    const response = await fetch('http://localhost:3001/gadgets');
    if (!response.ok) {
      throw new Error('Network repsonse was not ok.');
    }
    return response.json();
  };

/**
 * Saves a gadget to the server.
 * @param {Object} gadget to be saved.
 * @example
 * const gadget = { name: 'Foo' };
 * @returns {void}
 */
function saveGadget(gadget) {
    return fetch('http://localhost:3001/gadgets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gadget)
    });
}

export { fetchGadgets, saveGadget };