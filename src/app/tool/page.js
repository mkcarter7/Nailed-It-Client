import React, { useEffect, useState } from 'react';
import ToolCard from '@/components/form/ToolCard';
import { getTools } from '@/api/toolsData';

export default function ToolsList() {
  const [tools, setTools] = useState([]);

  const loadTools = () => {
    getTools().then((data) => {
      const formattedTools = data.map((tool) => ({
        id: tool.pk,
        name: tool.fields.name,
        description: tool.fields.description,
        uid: tool.fields.uid,
      }));
      setTools(formattedTools);
    });
  };

  useEffect(() => {
    loadTools();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {tools.map((tool) => (
        <ToolCard key={tool.id} toolObj={tool} onUpdate={loadTools} />
      ))}
    </div>
  );
}
