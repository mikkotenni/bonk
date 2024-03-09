const BASE_URL = "http://localhost:3001/gadgets";

/**
 * @returns {Promise<Object>} A promise that resolves to server response.
 */
const fetchGadgets = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch gadgets: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

/**
 * @param {Object} gadget to be added.
 * @example
 * const gadget = {
 *   id: '2024-03-09T12:45:46.158Z',
 *   name: 'Gadget 2024-03-09T12:45:46.158Z',
 * };
 * @returns {Promise<Object>} A promise that resolves to server response.
 */
const addGadget = async (gadget) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gadget),
  });
  if (!response.ok) {
    throw new Error(
      `Failed to add gadget: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

/**
 * @param {string} id of the gadget to be deleted.
 * @returns {Promise<Object>} A promise that resolves to server response.
 */
const deleteGadget = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(
      `Failed to delete the gadget: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

export { fetchGadgets, addGadget, deleteGadget };
