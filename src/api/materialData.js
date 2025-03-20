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
      .then((data) => resolve(data))
      .catch(reject);
  });

const getSingleMaterial = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/materials/${id}`, {
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
    fetch(`${endpoint}/materials`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
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
      .then((response) => response.json())
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
          resolve({});
          return null;
        }
        return response.json().then((data) => reject(new Error(data.message)));
      })
      .catch((error) => {
        reject(error);
        return null;
      });
  });
console.log('Database URL:', endpoint);

export { getMaterials, createMaterial, updateMaterial, getSingleMaterial, deleteMaterial };
