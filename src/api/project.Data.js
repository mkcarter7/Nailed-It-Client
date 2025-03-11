import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getProjects = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects`, {
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

const getSingleProject = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects/${id}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createProject = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects.json`, {
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

const updateProject = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects/${payload.id}`, {
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

const deleteProject = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.status === 204 ? resolve({}) : response.json().then(resolve);
        }
        return reject(new Error(`Failed to delete project: ${response.status}`));
      })
      .catch(reject);
  });

export { getProjects, createProject, updateProject, getSingleProject, deleteProject };

// api calls
