import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/ui/PageTransition";
import SectionHeading from "../components/ui/SectionHeading";
import SkillBar from "../components/about/SkillBar";
import ExperienceCard from "../components/about/ExperienceCard";
import EducationCard from "../components/about/EducationCard";
import Button from "../components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { skills, experiences, education } from "../data/skillsData";

const About: React.FC = () => {
  // Categorize skills
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const otherSkills = skills.filter((skill) => skill.category === "other");

  return (
    <PageTransition>
      {/* Header */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              I'm a full-stack developer with a passion for creating elegant,
              high-performance web and mobile applications that deliver
              exceptional user experiences.
            </p>
            <Button
              href="/Trevor-Resume.pdf"
              variant="outline"
              icon={<Download size={18} />}
              iconPosition="left"
            >
              Download Resume
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* About Me Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Image */}
              <motion.div
                className="lg:col-span-2 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative z-10 overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="../../myPic.jpg"
                    alt="Trevor Mugo"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary-200 dark:bg-primary-800 rounded-full -z-10" />
              </motion.div>

              {/* Content */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl font-bold mb-6">Hi, I'm Trevor Mugo</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    I'm a full-stack and mobile app developer with over 5 years
                    of experience building both web and mobile applications that
                    are not only functional but also deliver exceptional user
                    experiences. My journey in software development began in
                    Kenya, inspired by a passion for technology and solving
                    real-world problems through code.
                  </p>
                  <p>
                    I specialize in creating scalable, high-performance
                    applications by aligning user needs with business goals.
                    Whether it's a sleek mobile app or a complex web platform, I
                    focus on clean, maintainable code and industry best
                    practices. I'm always learning and exploring new
                    technologies to stay ahead in both web and app development.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring
                    Nairobi&apos;s outdoors, trying out new coffee spots, or
                    contributing to open-source projects. I'm open to exciting
                    collaborations and opportunities, feel free to reach out!
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    to="/contact"
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                  >
                    Get In Touch
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <SectionHeading
              title="My Skills"
              subtitle="I've developed expertise in various technologies across the full stack, focusing on creating robust, scalable, and user-friendly applications."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Frontend Skills */}
              <div>
                <motion.h3
                  className="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  Frontend Development
                </motion.h3>
                <div>
                  {frontendSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <motion.h3
                  className="text-xl font-bold mb-6 text-secondary-600 dark:text-secondary-400"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  Backend Development
                </motion.h3>
                <div>
                  {backendSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              {/* Other Skills */}
              <div>
                <motion.h3
                  className="text-xl font-bold mb-6 text-accent-600 dark:text-accent-400"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  Other Skills
                </motion.h3>
                <div>
                  {otherSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <SectionHeading
              title="Work Experience"
              subtitle="My professional journey includes working with innovative companies on challenging projects that have honed my skills as a developer."
            />

            <div className="max-w-3xl mx-auto mt-12">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <SectionHeading
              title="Education"
              subtitle="My educational background has provided me with a strong foundation in computer science and software development principles."
            />

            <div className="max-w-3xl mx-auto mt-12">
              {education.map((item, index) => (
                <EducationCard key={index} education={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;
