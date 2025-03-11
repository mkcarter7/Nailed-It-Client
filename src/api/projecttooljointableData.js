import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getProjecttool = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projectol`, {
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

const createProjecttool = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}projecttool.json`, {
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

export { getProjecttool, createProjecttool };
