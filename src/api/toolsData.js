import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTools = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/tools`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          console.log('No data');
          resolve([]);
        }
      })
      .catch(reject);
  });

const getSingleTool = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/tools/${id}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createTool = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/bookings.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch(reject);
  });

const updateTool = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/tools/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response)
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteTool = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/tools/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.status === 204 ? resolve({}) : response.json().then(resolve);
        }
        return reject(new Error(`Failed to delete tool: ${response.status}`));
      })
      .catch(reject);
  });

export { getTools, createTool, updateTool, getSingleTool, deleteTool };

// api calls
