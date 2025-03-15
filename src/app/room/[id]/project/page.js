'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function RoomDetailPage() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      const res = await fetch(`/api/rooms/${id}`);
      const data = await res.json();
      setRoom(data);
    };

    if (id) fetchRoom();
  }, [id]);

  if (!room) return <p>Loading...</p>;

  return (
    <div>
      <h1>{room.name}</h1>
      <a href={`/room/${id}/edit`} className="btn">
        Edit
      </a>
    </div>
  );
}
