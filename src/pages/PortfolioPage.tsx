import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { projects } from '@/data/projects';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const PortfolioPage = () => {
  if (!projects || projects.length === 0) {
    return (
      <div className="min-h-screen" style={{ background: '#EBEBEB' }}>
        <Header />
        <main className="pt-20">
          <section className="py-20 px-6 md:px-16 bg-[#1a2235] text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-[#1a2235]" style={{ background: '#EBEBEB' }}>
      <Header />
      <main className="pt-20">
        <section className="px-6 py-8 md:px-12 md:py-10">
          <div className="mx-auto max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10"
            >
              {projects.map((project) => {
                const hasMock = Boolean(project.screenshot);
                const imgSrc = hasMock ? project.screenshot : project.image;
                const mockupPosition = project.mockupStyle?.position ?? 'center';

                return (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="group h-full"
                  >
                    <Link to={`/portfolio/${project.id}`} className="block">
                      <div
                        className="relative aspect-[16/11] w-full overflow-hidden"
                      >
                        <img
                          src={imgSrc as string}
                          alt={project.title}
                          className={`absolute inset-0 h-full w-full ${
                            hasMock
                              ? 'object-contain p-2 md:p-3'
                              : 'object-cover'
                          }`}
                          style={{
                            objectPosition: mockupPosition,
                          }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
