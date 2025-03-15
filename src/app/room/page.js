'use client';

import React, { useEffect, useState } from 'react';
import { getRooms } from '@/api/roomData';
import RoomCard from '@/components/form/RoomCard';

export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  const loadRooms = () => {
    getRooms().then((data) => {
      const formattedRooms = data.map((room) => ({
        id: room.pk,
        name: room.fields.name,
        description: room.fields.description,
        uid: room.fields.uid,
      }));
      setRooms(formattedRooms);
    });
  };

  useEffect(() => {
    loadRooms();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {rooms.map((room) => (
        <RoomCard key={room.id} roomObj={room} onUpdate={loadRooms} />
      ))}
    </div>
  );
}
