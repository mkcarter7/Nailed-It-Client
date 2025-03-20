import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getProjects = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/projects/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch(reject);
  });

const getSingleProject = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/projects/${id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch project: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch(reject);
  });

const createProject = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/projects/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to create project: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateProject = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/projects/${payload.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to update project: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteProject = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/projects/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          resolve({});
        } else {
          reject(new Error(`Failed to delete project: ${response.status}`));
        }
      })
      .catch(reject);
  });

export { getProjects, createProject, updateProject, getSingleProject, deleteProject };
