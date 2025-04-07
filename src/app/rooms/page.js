import Link from 'next/link';
import Image from 'next/image';

const rooms = [
  { id: 1, name: 'Kitchen', image: '/images/kitchen.png' },
  { id: 2, name: 'Bedroom', image: '/images/bedroom.png' },
  { id: 3, name: 'Bathroom', image: '/images/bathroom.png' },
  { id: 4, name: 'Living Room', image: '/images/livingroom.png' },
];

export default function RoomsPage() {
  return (
    <div className="container mt-4">
      <div className="row">
        {rooms.map((room) => (
          <div key={room.id} className="col-6 col-md-3 mb-4">
            <Link href={`/rooms/${room.id}`}>
              <div className="card">
                <Image
                  src={room.image}
                  alt={room.name}
                  width={300} // Set width
                  height={200} // Set height (both width and height are set)
                  className="card-img-top"
                  style={{ objectFit: 'cover', cursor: 'pointer', width: '100%', height: 'auto' }} // Maintain aspect ratio
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{room.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
