'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteProject } from '@/api/projectData';

export default function ProjectCard({ projectObj, onUpdate }) {
  const handleDelete = () => {
    if (window.confirm(`Delete ${projectObj.name}?`)) {
      deleteProject(projectObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{projectObj.name}</Card.Title>

        <Card.Text>{projectObj.description || 'No description available'}</Card.Text>

        <div>
          {/* View project */}
          <Link href={`/project/${projectObj.id}`}>
            <Button variant="primary" className="m-1">
              View
            </Button>
          </Link>

          {/* Edit project */}
          <Link href={`/project/edit/${projectObj.id}`}>
            <Button variant="info" className="m-1">
              Edit
            </Button>
          </Link>

          {/* Delete project */}
          <Button variant="danger" onClick={handleDelete} className="m-1">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  projectObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    uid: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
