'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import RoomCard from '@/components/RoomCard';

export default function RoomDetails() {
  const { id } = useParams(); // ✅ Get the roomId from the URL
  const [room, setRoom] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (id) {
      // ✅ Fetch room details
      const fetchRoomDetails = async () => {
        try {
          const roomRes = await fetch(`/api/rooms/${id}`);
          const roomData = await roomRes.json();
          setRoom(roomData);

          // ✅ Fetch projects associated with this room
          const projectsRes = await fetch(`/api/projects?room_id=${id}`);
          const projectsData = await projectsRes.json();
          setProjects(projectsData);
        } catch (error) {
          console.error('Error fetching room or projects:', error);
        }
      };

      fetchRoomDetails();
    }
  }, [id]);

  if (!room) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <RoomCard room={room} projects={projects} />
    </div>
  );
}
