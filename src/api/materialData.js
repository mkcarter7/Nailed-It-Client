import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getMaterials = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/materials`, {
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

const getSingleMaterial = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/materials/${id}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createMaterial = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/materials.json`, {
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

const updateMaterial = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/materials/${payload.id}`, {
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

const deleteMaterial = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/materials/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.status === 204 ? resolve({}) : response.json().then(resolve);
        }
        return reject(new Error(`Failed to delete material: ${response.status}`));
      })
      .catch(reject);
  });

export { getMaterials, createMaterial, updateMaterial, getSingleMaterial, deleteMaterial };

// api calls
