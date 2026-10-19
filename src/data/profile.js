/**
 * Personal identity, bio and profile links.
 * Paths without a leading slash are relative to /public and are resolved
 * with asset() so they keep working when the site is served from a sub-folder.
 */

export const profile = {
  name: 'Md. Ataur Rahman Sikdar',
  role: 'Research Assistant, Bacteriophage Biology and Genomics Lab',
  affiliation: 'Islamic University, Bangladesh',
  location: 'Kushtia, Bangladesh',

  photo: {
    src: 'images/profile/profile.jpg',
    alt: 'Portrait of Md. Ataur Rahman Sikdar wearing glasses, a light blue shirt and a dark tie',
  },

  // One line, used in the compact identity panel and the footer.
  shortBio:
    'Undergraduate researcher working on bacteriophage biology, phage therapy and bacterial genomics.',

  // 2–4 sentences, used on the home page cover.
  bio: [
    'I am an undergraduate in Biotechnology and Genetic Engineering at Islamic University, Bangladesh, working where wet-lab bacteriophage biology meets bacterial genomics.',
    'As a Research Assistant in the Bacteriophage Biology and Genomics Lab, I study how phages can restore antibiotic susceptibility in drug-resistant uropathogens and how phage-resistance islands in Vibrio cholerae co-evolve with ICP1 phages.',
    'I also build reproducible genomics workflows, including the BactoFlow pipeline.',
  ],

  researchFocus: [
    'Bacteriophage biology & genomics',
    'Phage therapy',
    'Phage–antibiotic synergy',
    'Host–phage interactions',
    'Comparative & pan-genomics',
    'Gut microbiota in metabolic disease',
  ],

  // EDIT ME: written from the research interests in the CV. Please confirm or reword.
  careerGoal:
    'To pursue graduate research in bacteriophage biology and microbial genomics, with a focus on phage-based answers to antimicrobial resistance.',

  cv: {
    href: 'cv/CV_Md_Ataur_Rahman_Sikdar.pdf',
    fileName: 'CV_Md_Ataur_Rahman_Sikdar.pdf',
    label: 'Download CV',
  },

  email: 'arsikdarbtge@std.iu.ac.bd',
};

/** Academic and professional profiles. Order here is the order shown. */
export const academicLinks = [
  {
    id: 'orcid',
    label: 'ORCID',
    href: 'https://orcid.org/0009-0006-6514-9529',
    detail: '0009-0006-6514-9529',
  },
  {
    id: 'scholar',
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=BzFvT8QAAAAJ&hl=en',
    detail: 'Citations & publications',
  },
  {
    id: 'researchgate',
    label: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Md-Sikdar-4',
    detail: 'Md-Sikdar-4',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/mdarsikdar',
    detail: '@mdarsikdar',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ataurrahmansikdar/',
    detail: 'in/ataurrahmansikdar',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${profile.email}`,
    detail: profile.email,
  },
];

/** Research groups the student works with, shown on the Research page. */
export const affiliations = [
  {
    name: 'Bacteriophage Biology and Genomics Lab (BBGL)',
    host: 'Islamic University, Bangladesh',
    links: [
      { label: 'Website', href: 'https://phage-bbgl.com/' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/bacteriophage-biology-and-genomics-lab-bbgl/',
      },
    ],
  },
  {
    name: 'Centre for Genetic Counselling, Education and Research (GenePath)',
    host: 'Dhanmondi, Dhaka',
    links: [
      { label: 'Website', href: 'https://www.genepath.net/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/mygenepath' },
    ],
  },
];
