import React from 'react';
import type { Project } from '../data/languages';
import { Clock, BookOpen, Trophy } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getDifficultyColor = (difficulty: Project['difficulty']) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
              project.difficulty
            )}`}
          >
            {project.difficulty}
          </span>
        </div>
        <p className="mt-3 text-gray-600">{project.description}</p>
        
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>{project.timeEstimate}</span>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900 flex items-center">
            <Trophy className="h-4 w-4 mr-1" />
            Skills you'll gain
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button className="mt-6 w-full btn btn-primary flex items-center justify-center">
          <BookOpen className="h-4 w-4 mr-2" />
          Start Project
        </button>
      </div>
    </div>
  );
}