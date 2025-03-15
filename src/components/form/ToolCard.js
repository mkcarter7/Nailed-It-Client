'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteTool } from '@/api/toolsData';

export default function ToolCard({ toolObj, onUpdate }) {
  const handleDelete = () => {
    if (window.confirm(`Delete ${toolObj.name}?`)) {
      deleteTool(toolObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{toolObj.name}</Card.Title>

        <Card.Text>{toolObj.description || 'No description available'}</Card.Text>

        <div>
          <Link href={`/tool/${toolObj.id}`} passHref>
            <Button variant="primary" className="m-1">
              View
            </Button>
          </Link>

          <Link href={`/tool/edit/${toolObj.id}`} passHref>
            <Button variant="info" className="m-1">
              Edit
            </Button>
          </Link>

          <Button variant="danger" onClick={handleDelete} className="m-1">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

ToolCard.propTypes = {
  toolObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    uid: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
