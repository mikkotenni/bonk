/**
 * Fetches gadgets from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of gadgets.
 */
const fetchGadgets = async () => {
    const response = await fetch('http://localhost:3001/gadgets');
    if (!response.ok) {
      throw new Error('Failed to fetch gadgets.');
    }
    return response.json();
  };

/**
 * Adds a gadget to the server.
 * @param {Object} gadget to be added.
 * @example
 * const gadget = { id: '123', name: 'Foo' };
 * @returns {Promise<Object>} A promise that resolves to the added gadget.
 */
const addGadget = async (gadget) => {
    const response = await fetch('http://localhost:3001/gadgets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gadget),
    });
    if (!response.ok) {
      throw new Error('Failed to add gadget.');
    }
    return gadget;
}

/**
 * Deletes a gadget from the server.
 * @param {string} id of the gadget to be deleted.
 * @returns {Promise<string>} A promise that resolves to the id of the deleted gadget.
 */
const deleteGadget = async (id) => {
    const response = await fetch(`http://localhost:3001/gadgets/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete the gadget.');
    }
    return id;
  };

export { fetchGadgets, addGadget, deleteGadget };