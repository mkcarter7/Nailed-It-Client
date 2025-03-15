'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteRoom } from '@/api/roomData';

export default function RoomCard({ roomObj, onUpdate }) {
  const handleDelete = () => {
    if (window.confirm(`Delete ${roomObj.name}?`)) {
      deleteRoom(roomObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{roomObj.name}</Card.Title>

        <Card.Text>{roomObj.description || 'No description available'}</Card.Text>

        <div>
          <Link href={`/room/${roomObj.id}`} passHref>
            <Button variant="primary" className="m-1">
              View
            </Button>
          </Link>

          <Link href={`/room/edit/${roomObj.id}`} passHref>
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

RoomCard.propTypes = {
  roomObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    uid: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
