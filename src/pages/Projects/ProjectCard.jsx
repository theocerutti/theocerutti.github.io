import React from 'react';

const ProjectCard = ({ repo }) => {
  return (
    <div>
      <p>Repo: { repo.full_name }</p>
      <p>Description: { repo.description }</p>
      <p>Archived: { repo.archived }</p>
      <p>Fork: { repo.fork }</p>
    </div>
  );
};

export default ProjectCard;