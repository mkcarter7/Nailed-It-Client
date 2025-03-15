'use client';

import { useEffect, useState } from 'react';

export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await fetch('/api/rooms');
      const data = await res.json();
      setRooms(data);
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Rooms</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <a href={`/room/${room.id}`}>{room.name}</a>
          </li>
        ))}
      </ul>
      <a href="/room/new" className="btn">
        + Add Room
      </a>
    </div>
  );
}
