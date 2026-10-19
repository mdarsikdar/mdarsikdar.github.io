/**
 * Home page content: education, experience, volunteering, skills,
 * interests, awards and training. Sources: CV (Oct 2026) and the
 * "Awards", "Organaizations" and "Workshops_and_Training_details" Docs.
 * Lists are shown in the order written here (newest first).
 */

const driveFile = (id) => `https://drive.google.com/file/d/${id}/view`;

// Logos are generated from images-src/logos/ by `npm run images`.
export const education = [
  {
    degree: 'B.Sc. in Biotechnology and Genetic Engineering',
    institution: 'Islamic University, Bangladesh',
    logo: { src: 'images/logos/islamic-university.png', alt: 'Islamic University, Bangladesh logo' },
    department: 'Department of Biotechnology and Genetic Engineering',
    faculty: 'Faculty of Biological Sciences',
    location: 'Kushtia-7003, Bangladesh',
    period: 'Expected graduation: August 2027',
    result: { label: 'CGPA', value: '3.75', scale: '4.00', note: 'averaged over 6 completed semesters' },
    honors: ['University Merit Scholarship, awarded for 2 consecutive years (Feb 2024 – Feb 2026)'],
    coursework: [
      'Microbiology',
      'Biochemistry',
      'Molecular Biology',
      'Genetics',
      'Immunology',
      'Genetic Engineering and Bio-economics',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Dhaka College',
    logo: { src: 'images/logos/dhaka-college.png', alt: 'Dhaka College seal' },
    department: null,
    faculty: null,
    location: 'Dhaka, Bangladesh',
    period: 'Passing year: 2021',
    result: { label: 'GPA', value: '5.00', scale: '5.00', note: null },
    honors: [],
    coursework: [],
  },
  // EDIT ME: add the secondary (SSC) entry here using the same shape.
];

export const experience = [
  {
    role: 'Research Assistant',
    organization: 'Bacteriophage Biology and Genomics Lab (BBGL)',
    host: 'Islamic University, Bangladesh',
    location: 'Kushtia-7003, Bangladesh',
    period: 'Jan 2026 – Present',
    current: true,
    supervisor: 'Supervised by Dr. Sudhangshu Kumar Biswas, Professor',
    summary:
      'Contributed to nine lab projects so far: two published, two under review, three being prepared for submission and two in progress.',
    points: [
      'Investigating bacteriophage-mediated restoration of antibiotic susceptibility in drug-resistant uropathogens.',
      'Studying phage-resistance islands (PLEs) in Vibrio cholerae linked to co-evolution with ICP1 phage lineages.',
      'Preparing a manuscript, "Lineage-Associated His-box Motifs Reveal Receptor-Specific Docking in Bacteriophage Tail Fibers: A Computational Approach."',
      'First author of the BactoFlow bacterial-genomics pipeline paper and co-author of a study on phages against XDR uropathogens (Integrative Bioscience Nexus, 2026).',
    ],
    skills: [
      'Phage isolation & purification',
      'Antibiotic susceptibility testing',
      'NGS data analysis',
      'Bacteriophage genomics',
      'Molecular docking',
    ],
    links: [
      { label: 'Lab website', href: 'https://phage-bbgl.com/' },
      { label: 'Lab on LinkedIn', href: 'https://www.linkedin.com/company/bacteriophage-biology-and-genomics-lab-bbgl/' },
    ],
  },
  {
    role: 'Research Intern',
    organization: 'Centre for Genetic Counselling, Education and Research (GenePath)',
    host: null,
    location: 'Dhanmondi, Dhaka-1205, Bangladesh',
    period: 'Mar 2026 – Present',
    current: true,
    supervisor: 'Supervised by Dr. Mustak Ibn Aiub, Associate Professor',
    summary: null,
    points: [
      'Conducting integrative genomic and transcriptomic analysis linking host metabolic stress to the depletion of butyrate-producing bacteria in Type 2 Diabetes Mellitus.',
      'Preparing a manuscript from this work.',
    ],
    skills: ['Transcriptomic analysis', 'Differential gene expression analysis', 'Genomic analysis'],
    links: [{ label: 'GenePath website', href: 'https://www.genepath.net/' }],
  },
];

export const volunteering = [
  {
    organization: 'Network of Young Biotechnologists of Bangladesh (NYBB)',
    unit: 'NYBB Student Chapter, Islamic University Bangladesh',
    monogram: 'NYBB',
    logo: null, // e.g. 'images/logos/nybb.png'
    role: 'Executive Member',
    period: 'Feb 2024 – Jun 2026',
    contributions: [],
    certificate: driveFile('1VGVS6m-s-jwr01rVD9cVZbLcc5hPw24f'),
  },
  {
    organization: 'International Association of Students in Agricultural and Related Sciences (IAAS)',
    unit: 'IAAS Bangladesh, Islamic University Chapter',
    monogram: 'IAAS',
    logo: null,
    role: 'Vice Director of Finance',
    period: 'May 2024 – Dec 2025',
    contributions: [],
    certificate: driveFile('1vBYPdjCGGMoXOkFkCzgnU5cq_AZfqOsE'),
  },
  {
    organization: 'Dawn of Bioinformatics Limited',
    unit: null,
    monogram: 'DoB',
    logo: null,
    role: 'Campus Coordinator',
    period: 'May 2024 – May 2025',
    contributions: [],
    certificate: null,
  },
  {
    organization: 'American Society for Microbiology (ASM) Student Chapter',
    unit: 'Islamic University (ASMIU)',
    monogram: 'ASM',
    logo: null,
    role: 'Founding Joint Secretary',
    period: 'Mar 2024 – Feb 2025',
    contributions: [],
    certificate: driveFile('1Jg1NuAvwfTv7uryIAih3NxZ9ywwEenB8'),
  },
  {
    organization: 'Islamic University Science Club (IUSC)',
    unit: null,
    monogram: 'IUSC',
    logo: null,
    role: 'General Member',
    period: 'Aug 2023 – Dec 2024',
    contributions: [],
    certificate: null,
  },
  {
    organization: 'Cancer Awareness Program for Woman',
    unit: null,
    monogram: 'CAP',
    logo: null,
    role: 'Volunteer Coordinator',
    period: 'May 2023 – Oct 2024',
    contributions: [],
    certificate: null,
  },
];

/** Only skills listed in the CV. `icon` is a key from components/common/icons.jsx. */
export const skillGroups = [
  {
    title: 'Microbiology & Phage Biology',
    icon: 'microbe',
    kind: 'Wet lab',
    items: [
      'Bacteriophage isolation & purification',
      'pH & thermal stability testing',
      'One-step growth curve assay',
      'Bacterial culture',
      'Biochemical assays',
      'Antibiotic susceptibility testing',
    ],
  },
  {
    title: 'Molecular Biology Techniques',
    icon: 'flask',
    kind: 'Wet lab',
    items: [
      'DNA extraction, purification & quantification',
      'PCR',
      'Gel electrophoresis',
      'UV spectrophotometry',
    ],
  },
  {
    title: 'Genetics & Genomics',
    icon: 'dna',
    kind: 'Dry lab',
    items: [
      'NGS & Sanger data analysis',
      'Phage host prediction',
      'Prophage identification',
      'Genome annotation',
      'Lifestyle & taxonomy classification',
      'Comparative genomics',
      'Phylogenetics',
    ],
  },
  {
    title: 'Bacterial Genomics',
    icon: 'network',
    kind: 'Dry lab',
    items: ['AMR & virulence profiling', 'MLST', 'Pangenomics'],
  },
  {
    title: 'Transcriptomics & Structural Bioinformatics',
    icon: 'atom',
    kind: 'Dry lab',
    items: [
      'Differential gene expression analysis',
      'Protein structure prediction',
      'Molecular docking',
    ],
  },
  {
    title: 'Programming',
    icon: 'terminal',
    kind: 'Computational',
    items: ['Python', 'R', 'Bash scripting'],
    note: 'Beginner level',
  },
  {
    title: 'Scientific Software & Writing Tools',
    icon: 'wrench',
    kind: 'Tools',
    items: ['Linux (Ubuntu)', 'RStudio', 'UGENE', 'Chromas', 'PyMOL', 'EndNote', 'Zotero', 'Canva'],
  },
  {
    title: 'Languages',
    icon: 'languages',
    kind: 'Communication',
    items: ['Bengali (Native)', 'English (Fluent)'],
  },
];

/** EDIT ME: add, remove or reorder freely. `icon` is a key from components/common/icons.jsx. */
export const interests = [
  {
    title: 'Bacteriophage Biology & Genomics',
    icon: 'phage',
    text: 'Isolating phages and reading their genomes: annotation, host prediction, lifestyle and taxonomy.',
  },
  {
    title: 'Phage Therapy',
    icon: 'shield',
    text: 'Lytic phages as alternative or adjunct treatments for extensively drug-resistant infections.',
  },
  {
    title: 'Phage–Antibiotic Synergy',
    icon: 'pill',
    text: 'Using phage intervention to restore antibiotic susceptibility in resistant bacteria.',
  },
  {
    title: 'Host–Phage Interactions',
    icon: 'link',
    text: 'Tail-fibre motifs, receptor docking and phage-defence islands that shape co-evolution.',
  },
  {
    title: 'Comparative & Pan-Genomics',
    icon: 'layers',
    text: 'Pangenome structure, resistance and virulence profiles of clinical bacterial isolates.',
  },
  {
    title: 'Gut Microbiota in Metabolic Disease',
    icon: 'activity',
    text: 'How host metabolic stress relates to the loss of butyrate-producing gut bacteria in type 2 diabetes.',
  },
];

export const awards = [
  {
    title: 'Runner-Up, Poster Presentation',
    event: 'Future Harvest Summit 2026',
    organizer: 'Qamarun Agro Farm and IAAS Bangladesh IU, Islamic University Bangladesh',
    work: 'Optimizing In-Vitro Shoot Induction and Multiple Shoot Regeneration in Gerbera jamesonii',
    date: 'Sep 2026',
    certificate: driveFile('1otWJtDaXwvw4XzOO29sID9YdMaOj_t2y'),
  },
  {
    title: 'Champion, Quiz Competition',
    event: 'Workshop on Metagenomics: Application in Public Health, Environmental and Clinical Microbiology',
    organizer: 'ASM Student Chapter IU, Islamic University Bangladesh',
    work: null,
    date: 'May 2026',
    certificate: driveFile('1VcAvG8P7g6Cuu7uJFBm1elSelQlXXiKA'),
  },
  {
    title: 'Champion, World Cancer Day Quiz Competition',
    event: 'Cancer Awareness Campaign 2026',
    organizer: 'Cancer Care and Research Trust Bangladesh (CCRTB), hosted by ASM Student Chapter IU',
    work: null,
    date: 'Jan 2026',
    certificate: driveFile('1Jede_E7llxnAtDz-W5qCR3mudjBU9qvF'),
  },
  {
    title: 'Awardee (6th Position), Poster Competition',
    event: 'Rufaida BioMeds Poster Competition 2025',
    organizer: 'Rufaida BioMeds',
    work: 'Comprehensive Workflow for Bacterial Genome Analysis: From SRA Raw Reads to Reference Mapping and Annotation',
    date: 'Aug 2025',
    certificate: driveFile('171vvbSBEEuhopA2LNlYTXK_aF4gzonYq'),
  },
  {
    title: "People's Choice Award, Poster Presentation",
    event: '2nd ISCB RSG Bangladesh CompBio Symposium 2025',
    organizer: 'ISCB-RSG Bangladesh, University of Dhaka',
    work: 'Exploring His-Box Dynamics in Bacteriophage Tail Fibers: Insights into Host Specificity and Evolutionary Flexibility',
    date: 'Feb 2025',
    certificate: driveFile('1XdpV3ecffHY7BqwoUhFkvhmFyJNpP_tx'),
  },
  {
    title: 'University Merit Scholarship',
    event: 'Awarded for 2 consecutive years',
    organizer: 'Islamic University, Bangladesh',
    work: null,
    date: 'Feb 2024 – Feb 2026',
    certificate: null,
  },
];

export const training = [
  {
    title: 'Workshop on Metagenomics: Application in Public Health, Environmental and Clinical Microbiology',
    organizer: 'ASM Student Chapter IU, Islamic University Bangladesh',
    duration: '1 day',
    date: 'May 2026',
    certificate: driveFile('19k7kO6te7OhNx6kRK65bZOhY2i7xZXJa'),
  },
  {
    title: 'Cancer Bioinformatics: From Beginning to Publication',
    organizer: 'Centre for Genetic Counselling, Education and Research (GenePath)',
    duration: '15 days',
    date: 'Feb – Mar 2026',
    certificate: driveFile('1FwWfmouPIA5TBwX4sLKqI95yp-dwjl8T'),
  },
  {
    title: 'Next-Generation Genomics and Drug Design: Hands-On Training',
    organizer: 'ASM Student Chapter, Islamic University',
    duration: '2 days',
    date: 'Nov 2024',
    certificate: driveFile('13MSHSxrFh3h5gMsWyLCVlBxROio_N--Y'),
  },
  {
    title: 'Python Programming Boot-Camp: Beginner to Intermediate',
    organizer: 'Islamic University IEEE Student Branch and Department of ICT, Islamic University',
    duration: '1 month',
    date: 'Oct – Nov 2023',
    certificate: driveFile('1T6kJMlMerSY-C6LTLCiG-4FF4mY56TLK'),
  },
];
