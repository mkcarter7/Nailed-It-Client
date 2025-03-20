'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteMaterial } from '@/api/materialData';

export default function MaterialCard({ materialObj, onUpdate }) {
  const handleDelete = () => {
    if (window.confirm(`Delete ${materialObj.name}?`)) {
      deleteMaterial(materialObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{materialObj.name}</Card.Title>

        <Card.Text>{materialObj.description || 'No description available'}</Card.Text>

        <div>
          <Link href={`/material/${materialObj.id}`} passHref>
            <Button variant="primary" className="m-1">
              View
            </Button>
          </Link>

          <Link href={`/material/edit/${materialObj.id}`} passHref>
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

MaterialCard.propTypes = {
  materialObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    uid: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
