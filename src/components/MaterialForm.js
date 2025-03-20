'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function MaterialForm({ initialData, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        description: initialData.description || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" rows="4" required />
      </div>

      <div>
        <button type="submit" className="mt-4 bg-[#5C350C] text-white py-2 px-4 rounded-md hover:bg-opacity-90">
          Save Changes
        </button>
      </div>
    </form>
  );
}

MaterialForm.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

MaterialForm.defaultProps = {
  initialData: {
    name: '',
    description: '',
  },
};
