import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta.js';
import { affiliations } from '../data/profile.js';
import {
  conferencePapers,
  journalArticles,
  labCategories,
  labWorks,
  labWorkTypes,
  manuscripts,
  presentations,
  projects,
  statusLabels,
} from '../data/research.js';
import PageHero from '../components/hero/PageHero.jsx';
import OnThisPage from '../components/common/OnThisPage.jsx';
import Reveal from '../components/common/Reveal.jsx';
import SmartLink from '../components/common/SmartLink.jsx';
import { FilterTabs, Section } from '../components/common/ui.jsx';
import LabWorkCard from '../components/research/LabWorkCard.jsx';
import ProjectCard from '../components/research/ProjectCard.jsx';
import PublicationCard from '../components/research/PublicationCard.jsx';
import { ManuscriptList, PresentationList } from '../components/research/Presentations.jsx';
import ProfileLinkGrid from '../components/research/ProfileLinkGrid.jsx';

const sections = [
  { id: 'lab-works', label: 'Laboratory works' },
  { id: 'projects', label: 'Research projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'presentations', label: 'Conference presentations' },
  { id: 'manuscripts', label: 'Manuscripts in progress' },
  { id: 'profiles', label: 'Academic profiles' },
];

const STATUS_ORDER = ['ongoing', 'review', 'accepted', 'preprint', 'presented', 'completed', 'published'];

function withCounts(values, items, key) {
  return [
    { value: 'all', label: 'All', count: items.length },
    ...values.map((v) => ({
      value: v,
      label: statusLabels[v] ?? v,
      count: items.filter((i) => i[key] === v).length,
    })),
  ].filter((o) => o.count > 0);
}

export default function ResearchPage() {
  usePageMeta({
    title: 'Research & Laboratory',
    description:
      'Laboratory work, research projects, journal articles, conference papers and presentations by Md. Ataur Rahman Sikdar in bacteriophage biology and bacterial genomics.',
  });

  const [labFilter, setLabFilter] = useState('all');
  const [projectFilter, setProjectFilter] = useState('all');

  const labOptions = useMemo(() => withCounts(labCategories, labWorks, 'category'), []);
  const projectOptions = useMemo(
    () => withCounts(STATUS_ORDER.filter((s) => projects.some((p) => p.status === s)), projects, 'status'),
    [],
  );

  // Only list the work types that appear in the data (see labWorkTypes for all four).
  const usedTypes = Object.keys(labWorkTypes).filter((t) => labWorks.some((w) => w.type === t));

  const shownLab = labFilter === 'all' ? labWorks : labWorks.filter((w) => w.category === labFilter);
  const shownProjects = (projectFilter === 'all' ? projects : projects.filter((p) => p.status === projectFilter))
    .slice()
    .sort((a, b) => STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status));

  const underReview = manuscripts.filter((m) => m.status === 'review');
  const inPrep = manuscripts.filter((m) => m.status === 'preparation');

  return (
    <>
      <PageHero
        eyebrow="Research & Laboratory"
        title="From the bench to the genome"
        intro="Wet-lab phage biology and microbiology alongside bacterial genomics and bioinformatics. Laboratory work, research projects and formal publications are listed separately below."
      />

      <div className="container page-grid">
        <OnThisPage items={sections} />
        <div className="page-main">
          <Section
            id="lab-works"
            index="01"
            eyebrow="Laboratory works"
            title="Practical laboratory and computational work"
            lede="Each card shows the techniques, tools and observations from a strand of practical work. The label above the title shows what kind of work it is."
          >
            <div className="toolbar">
              <FilterTabs label="Filter laboratory works by field" options={labOptions} value={labFilter} onChange={setLabFilter} />
              <div className="legend">
                <span className="legend__label" id="work-type-label">
                  Work type
                </span>
                <ul aria-labelledby="work-type-label">
                  {usedTypes.map((key) => (
                    <li key={key} className={`type-badge type-badge--${key}`}>
                      {labWorkTypes[key]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid--2 lab-grid" aria-live="polite">
              {shownLab.map((w) => (
                <LabWorkCard key={w.id} work={w} />
              ))}
            </div>
          </Section>

          <Section
            id="projects"
            index="02"
            eyebrow="Research projects"
            title="Ongoing and completed research"
            lede="Research questions and their current status. Formal outputs are listed under Publications."
          >
            <div className="toolbar">
              <FilterTabs label="Filter projects by status" options={projectOptions} value={projectFilter} onChange={setProjectFilter} />
            </div>
            <div className="grid grid--2" aria-live="polite">
              {shownProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </Section>

          <Section
            id="publications"
            index="03"
            eyebrow="Publications"
            title="Peer-reviewed and published work"
            lede="Published journal articles and conference proceedings. Work under review is listed separately below."
          >
            <h3 className="sub-heading">
              Journal articles <span className="sub-heading__count">{journalArticles.length}</span>
            </h3>
            <div className="stack">
              {journalArticles.map((p) => (
                <Reveal key={p.id}>
                  <PublicationCard pub={p} kind="journal" />
                </Reveal>
              ))}
            </div>

            <h3 className="sub-heading">
              Conference papers &amp; proceedings <span className="sub-heading__count">{conferencePapers.length}</span>
            </h3>
            <div className="stack">
              {conferencePapers.map((p) => (
                <Reveal key={p.id}>
                  <PublicationCard pub={p} kind="conference" />
                </Reveal>
              ))}
            </div>
          </Section>

          <Section
            id="presentations"
            index="04"
            eyebrow="Conference presentations"
            title="Posters and talks"
            lede="Poster and oral presentations at national and international meetings, most recent first."
          >
            <PresentationList items={presentations} />
          </Section>

          <Section
            id="manuscripts"
            index="05"
            eyebrow="Manuscripts in progress"
            title="Under review and in preparation"
            lede="Not yet published. Listed for transparency and shown separately from the publication record."
          >
            {underReview.length > 0 && (
              <>
                <h3 className="sub-heading">
                  Under review <span className="sub-heading__count">{underReview.length}</span>
                </h3>
                <ManuscriptList items={underReview} />
              </>
            )}
            {inPrep.length > 0 && (
              <>
                <h3 className="sub-heading">
                  In preparation <span className="sub-heading__count">{inPrep.length}</span>
                </h3>
                <ManuscriptList items={inPrep} />
              </>
            )}
          </Section>

          <Section
            id="profiles"
            index="06"
            eyebrow="Academic profiles"
            title="Research links"
            lede="Publication records, code and professional profiles."
          >
            <ProfileLinkGrid />
            <h3 className="sub-heading">Research groups</h3>
            <ul className="grid grid--2">
              {affiliations.map((a) => (
                <li key={a.name} className="card affil">
                  <p className="affil__name">{a.name}</p>
                  <p className="meta">{a.host}</p>
                  <p className="link-row">
                    {a.links.map((l) => (
                      <SmartLink key={l.href} href={l.href} className="text-link text-link--sm">
                        {l.label}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </SmartLink>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </>
  );
}
