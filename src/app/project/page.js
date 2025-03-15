import React, { useEffect, useState } from 'react';
import { getProjects } from '@/api/projectData';
import ProjectCard from '@/components/form/ProjectCard';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    getProjects().then((data) => {
      const formattedProjects = data.map((project) => ({
        id: project.pk, // Map pk to id if needed
        name: project.fields.name,
        description: project.fields.description,
        roomId: project.fields.room_id,
        uid: project.fields.uid,
      }));
      setProjects(formattedProjects);
    });
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} projectObj={project} onUpdate={loadProjects} />
      ))}
    </div>
  );
}
