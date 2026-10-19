import usePageMeta from '../hooks/usePageMeta.js';
import {
  awards,
  education,
  experience,
  interests,
  skillGroups,
  training,
  volunteering,
} from '../data/academic.js';
import HomeHero from '../components/hero/HomeHero.jsx';
import OnThisPage from '../components/common/OnThisPage.jsx';
import { Section } from '../components/common/ui.jsx';
import Education from '../components/home/Education.jsx';
import Timeline from '../components/home/Timeline.jsx';
import Volunteering from '../components/home/Volunteering.jsx';
import Skills from '../components/home/Skills.jsx';
import Interests from '../components/home/Interests.jsx';
import { Awards, Training } from '../components/home/Honors.jsx';

const sections = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'volunteering', label: 'Volunteering & leadership' },
  { id: 'skills', label: 'Core skills' },
  { id: 'interests', label: 'Fields of interest' },
  { id: 'awards', label: 'Honours & awards' },
  { id: 'training', label: 'Workshops & training' },
];

export default function HomePage() {
  usePageMeta({
    description:
      'Md. Ataur Rahman Sikdar, Biotechnology and Genetic Engineering student at Islamic University, Bangladesh: education, research experience, leadership, skills and awards.',
  });

  return (
    <>
      <HomeHero />
      <div className="container page-grid">
        <OnThisPage items={sections} />
        <div className="page-main">
          <Section id="education" index="01" eyebrow="Education" title="Academic background">
            <Education items={education} />
          </Section>

          <Section
            id="experience"
            index="02"
            eyebrow="Experience"
            title="Research positions"
            lede="Wet-lab and computational research roles, most recent first."
          >
            <Timeline items={experience} />
          </Section>

          <Section
            id="volunteering"
            index="03"
            eyebrow="Volunteering & leadership"
            title="Service to the scientific community"
            lede="Student scientific societies, a bioinformatics campus role and community health volunteering."
          >
            <Volunteering items={volunteering} />
          </Section>

          <Section
            id="skills"
            index="04"
            eyebrow="Core skills"
            title="Laboratory and computational toolkit"
            lede="Wet-lab techniques, genomics and bioinformatics methods, and the software used day to day."
          >
            <Skills groups={skillGroups} />
          </Section>

          <Section
            id="interests"
            index="05"
            eyebrow="Fields of interest"
            title="Questions I want to work on"
          >
            <Interests items={interests} />
          </Section>

          <Section id="awards" index="06" eyebrow="Honours & awards" title="Recognition">
            <Awards items={awards} />
          </Section>

          <Section id="training" index="07" eyebrow="Workshops & training" title="Continuing training">
            <Training items={training} />
          </Section>
        </div>
      </div>
    </>
  );
}
