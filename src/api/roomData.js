import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getRooms = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rooms`, {
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

const getSingleRoom = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rooms/${id}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createRoom = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rooms`, {
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

const updateRoom = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rooms/${payload.id}`, {
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

const deleteRoom = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rooms/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.status === 204 ? resolve({}) : response.json().then(resolve);
        }
        return reject(new Error(`Failed to delete room: ${response.status}`));
      })
      .catch(reject);
  });

export { getRooms, createRoom, updateRoom, getSingleRoom, deleteRoom };

// api calls
