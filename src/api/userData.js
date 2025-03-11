import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getUsers = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users`, {
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

const getSingleUser = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${id}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createUser = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users.json`, {
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

const updateUser = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${payload.id}`, {
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

const deleteUser = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.status === 204 ? resolve({}) : response.json().then(resolve);
        }
        return reject(new Error(`Failed to delete user: ${response.status}`));
      })
      .catch(reject);
  });

export { getUsers, createUser, updateUser, getSingleUser, deleteUser };

// api calls
