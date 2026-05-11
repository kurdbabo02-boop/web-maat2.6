import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { featuredCaseStudyIds, projects } from '@/data/projects';

const PortfolioSection = () => {
  const { ref, controls } = useScrollAnimation();

  // Use projects that have screenshots (case studies)
  const displayProjects = featuredCaseStudyIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project?.screenshot));

  // Build project items for the slider
  const projectItems = displayProjects.map((p) => ({
    id: p.id,
    title: p.title,
    screenshot: p.screenshot!,
    position: p.mockupStyle?.position ?? 'center',
  }));

  return (
    <section className="bg-[#E5E7EB] py-6 md:py-8">
      <div
        ref={ref}
        className="w-full overflow-hidden py-5 pb-[50px]"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        }}
      >
        <div className="flex gap-[60px] max-md:gap-10 max-sm:gap-[30px] w-max animate-[marquee-projects_80s_linear_infinite] hover:[animation-play-state:paused] items-end">
          {[...projectItems, ...projectItems].map((project, index) => (
            <Link
              key={`${project.id}-${index}`}
              to={`/portfolio/${project.id}`}
              className="block flex-shrink-0"
              aria-label={project.title}
            >
              <div className="h-[300px] w-[400px] overflow-hidden max-md:h-[230px] max-md:w-[300px] max-sm:h-[180px] max-sm:w-[240px]">
                <img
                  src={project.screenshot}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-2 md:p-3"
                  style={{ objectPosition: project.position }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
