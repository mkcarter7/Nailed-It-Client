import React, { useEffect, useState } from 'react';
import { getMaterials } from '@/api/materialData';
import MaterialCard from '@/components/form/MaterialCard';

export default function MaterialsList() {
  const [materials, setMaterials] = useState([]);

  const loadMaterials = () => {
    getMaterials().then((data) => {
      const formattedMaterials = data.map((material) => ({
        id: material.pk,
        name: material.fields.name,
        description: material.fields.description,
        uid: material.fields.uid,
      }));
      setMaterials(formattedMaterials);
    });
  };

  useEffect(() => {
    loadMaterials();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {materials.map((material) => (
        <MaterialCard key={material.id} materialObj={material} onUpdate={loadMaterials} />
      ))}
    </div>
  );
}
