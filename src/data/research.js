/**
 * Research & Laboratory page content.
 * Sources: CV (Oct 2026), the "Research_role_and_projects", "Publication"
 * and "Conferences" Docs, the two published PDFs, and sciforum.net/paper/28743.
 *
 * SELF is matched in author lists and shown in bold.
 */

export const SELF = 'Md. Ataur Rahman Sikdar';

const driveFile = (id) => `https://drive.google.com/file/d/${id}/view`;

const BBGL = 'Bacteriophage Biology and Genomics Lab, Islamic University';
const GENEPATH = 'GenePath, Centre for Genetic Counselling, Education and Research';
const BISWAS = 'Dr. Sudhangshu Kumar Biswas';
const AIUB = 'Dr. Mustak Ibn Aiub';

/* ------------------------------------------------------------------ */
/* A. Laboratory works                                                 */
/* ------------------------------------------------------------------ */

export const labWorkTypes = {
  research: 'Research Experience',
  professional: 'Professional / Internship',
  independent: 'Independent Project',
  academic: 'Academic Practical',
};

export const labCategories = [
  'Microbiology & Phage Biology',
  'Molecular Biology',
  'Plant Biotechnology',
  'Bioinformatics',
];

export const labWorks = [
  {
    id: 'phage-isolation',
    title: 'Isolation and characterisation of lytic bacteriophages',
    category: 'Microbiology & Phage Biology',
    type: 'research',
    setting: BBGL,
    period: '2026',
    objective:
      'Isolate lytic phages from environmental samples and test their activity and stability against drug-resistant clinical bacteria.',
    methods: [
      'Phage isolation from sewage',
      'Spot assay',
      'Double agar overlay (plaque) assay',
      'Phage purification',
      'pH & thermal stability testing',
      'One-step growth curve assay',
    ],
    tools: [],
    findings: [
      'Five lytic phages produced clear lytic zones and distinct plaques on E. coli and P. aeruginosa hosts.',
      'Phages stayed active from −20 °C to 50 °C and from pH 5 to 9; activity dropped at the extremes.',
    ],
    image: {
      src: 'images/gallery/lab-biosafety-cabinet-sm.jpg',
      alt: 'Gloved hands working with culture plates inside a biological safety cabinet',
    },
    related: [{ label: 'XDR uropathogens paper', href: 'papers/Sheikh-2026-XDR-Uropathogens-IBN.pdf' }],
  },
  {
    id: 'isolate-id-ast',
    title: 'Identification and resistance profiling of clinical isolates',
    category: 'Microbiology & Phage Biology',
    type: 'research',
    setting: BBGL,
    period: '2026',
    objective:
      'Identify uropathogenic bacteria from clinical urine samples and profile how resistant they are to commonly used antibiotics.',
    methods: [
      'Gram staining',
      'Biochemical tests',
      '16S rRNA gene sequencing',
      'Antibiotic susceptibility testing (14 antibiotics)',
    ],
    tools: ['NCBI BLAST'],
    findings: [
      'Isolates identified as Escherichia coli and Pseudomonas aeruginosa.',
      'One P. aeruginosa isolate was pandrug-resistant; the others resisted 7–12 antibiotics.',
    ],
    image: {
      src: 'images/gallery/lab-bench-instrument-sm.jpg',
      alt: 'Researcher wearing a face mask beside a benchtop instrument and sample racks',
    },
    related: [{ label: 'XDR uropathogens paper', href: 'papers/Sheikh-2026-XDR-Uropathogens-IBN.pdf' }],
  },
  {
    id: 'nucleic-acids',
    title: 'Nucleic acid extraction, quantification and PCR',
    category: 'Molecular Biology',
    type: 'research',
    setting: BBGL,
    period: '2026',
    objective:
      'Prepare and check bacterial DNA for downstream identification and sequencing.',
    methods: [
      'DNA extraction & purification',
      'DNA quantification',
      'PCR',
      'Gel electrophoresis',
      'UV spectrophotometry',
    ],
    tools: [],
    findings: [],
    image: null,
    related: [],
  },
  {
    id: 'gerbera-tissue-culture',
    title: 'In-vitro shoot induction in Gerbera jamesonii',
    category: 'Plant Biotechnology',
    type: 'research',
    setting: null,
    period: 'Presented Sep 2026',
    objective:
      'Optimise in-vitro shoot induction and multiple shoot regeneration in Gerbera jamesonii.',
    methods: [
      'Plant tissue culture',
      'Capitulum explants',
      'Shoot-tip explants',
      'BAP, IAA and NAA growth-regulator comparison',
    ],
    tools: [],
    findings: [],
    note: 'Poster at Future Harvest Summit 2026, awarded Runner-Up.',
    image: {
      src: 'images/gallery/future-harvest-2026-poster-sm.jpg',
      alt: 'Poster discussion at the Future Harvest Summit 2026',
    },
    related: [],
  },
  {
    id: 'bactoflow',
    title: 'BactoFlow: automated bacterial whole-genome analysis',
    category: 'Bioinformatics',
    type: 'research',
    setting: BBGL,
    period: '2026',
    objective:
      'Build a modular, reproducible pipeline that takes bacterial sequencing reads all the way to an annotated, profiled genome.',
    methods: [
      'Read QC & trimming',
      'Reference mapping',
      'Variant calling',
      'De novo assembly',
      'Genome annotation',
      'MLST typing',
      'AMR, virulence & defence-system screening',
    ],
    tools: ['Trimmomatic', 'BWA-MEM', 'FreeBayes', 'SPAdes', 'Prokka', 'CARD', 'VFDB', 'PADLOC', 'Conda', 'Linux'],
    findings: [
      'Clinical P. aeruginosa isolate (SRR33893847) typed as the high-risk clone ST308.',
      '6.92 Mb draft genome in 73 contigs (N50 412 kb, GC 66.11%).',
      '51 resistance genes, 290 virulence factors, 12 antiviral defence systems and 3 prophage regions detected.',
    ],
    image: {
      src: 'images/gallery/dry-lab-workstation-sm.jpg',
      alt: 'Researcher at a desktop workstation running analyses',
    },
    related: [
      { label: 'Paper (PDF)', href: 'papers/Sikdar-2026-BactoFlow-IBN.pdf' },
      { label: 'Code on GitHub', href: 'https://github.com/mdarsikdar/BactoFlow' },
    ],
  },
  {
    id: 'phage-structural',
    title: 'Computational analysis of phage tail fibres and phage-resistance islands',
    category: 'Bioinformatics',
    type: 'research',
    setting: BBGL,
    period: '2025 – Present',
    objective:
      'Study His-box motifs in phage tail fibres and phage-resistance islands (PLEs) in Vibrio cholerae to understand host specificity and phage–host co-evolution.',
    methods: [
      'Protein structure prediction',
      'Molecular docking',
      'Conserved-domain analysis',
      'Comparative genomics',
    ],
    tools: [],
    findings: [],
    note: "Presented at the ISCB RSG Bangladesh CompBio Symposium 2025 (People's Choice Award), LifeTech 2026 (oral) and IYBC 2026.",
    image: null,
    related: [],
  },
  {
    id: 't2dm-transcriptomics',
    title: 'Host transcriptomics and gut-microbe depletion in type 2 diabetes',
    category: 'Bioinformatics',
    type: 'professional',
    setting: GENEPATH,
    period: 'Mar 2026 – Present',
    objective:
      'Link host metabolic stress to the depletion of butyrate-producing gut bacteria in Type 2 Diabetes Mellitus using integrated genomic and transcriptomic data.',
    methods: ['Integrative genomic & transcriptomic analysis', 'Differential gene expression analysis'],
    tools: [],
    findings: [],
    image: null,
    related: [],
  },
];

/* ------------------------------------------------------------------ */
/* B. Research projects                                                */
/* ------------------------------------------------------------------ */

/** Status keys used across projects, publications and manuscripts. */
export const statusLabels = {
  ongoing: 'Ongoing',
  completed: 'Completed',
  presented: 'Presented',
  review: 'Under Review',
  accepted: 'Accepted',
  preprint: 'Preprint',
  published: 'Published',
  preparation: 'In Preparation',
};

export const projects = [
  {
    id: 'phage-antibiotic-ecoli',
    title: 'Restoring Antibiotic Susceptibility in Resistant Escherichia coli via Bacteriophage Intervention',
    status: 'ongoing',
    lab: BBGL,
    supervisor: BISWAS,
    objective: 'Test whether phage intervention can make antibiotic-resistant E. coli susceptible to antibiotics again.',
    methodology: null,
    findings: null,
    outputs: ['Poster, International Scientific Symposium 2026 (co-author)'],
    links: [],
  },
  {
    id: 'ple-vibrio',
    title: 'Phage-Resistance Islands (PLEs) in Vibrio cholerae: Conserved Domains Underlying Functional Mimicry and Co-evolution with ICP1 Phage Lineages',
    status: 'ongoing',
    lab: BBGL,
    supervisor: BISWAS,
    objective: 'Identify the conserved domains that let PLEs in V. cholerae mimic phage functions and co-evolve with ICP1 phage lineages.',
    methodology: 'Computational, conserved-domain analysis.',
    findings: null,
    outputs: ['Poster, 6th International Young Biotechnologist Congress 2026 (presenting author)'],
    links: [],
  },
  {
    id: 'his-box',
    title: 'Exploring His-Box Dynamics in Bacteriophage Tail Fibers: Insights into Host Specificity and Evolutionary Flexibility',
    status: 'ongoing',
    lab: BBGL,
    supervisor: BISWAS,
    objective: 'Understand how His-box motifs in phage tail fibres relate to host specificity, and how they spread between lineages by horizontal gene transfer.',
    methodology: 'Computational approach combining protein structure prediction with receptor docking.',
    findings: null,
    outputs: [
      "Poster, 2nd ISCB RSG Bangladesh CompBio Symposium 2025, People's Choice Award",
      'Oral presentation, LifeTech 2026',
      'Manuscript in preparation',
    ],
    links: [],
  },
  {
    id: 'acinetobacter-phage',
    title: 'Genomic Characterization of Acinetobacter baumannii Phage BBGL-P002 Reveals a Lytic Phage with an Accessory-Dominated Pangenome',
    status: 'ongoing',
    lab: BBGL,
    supervisor: BISWAS,
    objective: 'Characterise the genome of the A. baumannii phage BBGL-P002.',
    methodology: null,
    findings: null,
    outputs: [],
    links: [],
  },
  {
    id: 'pseudomonas-icu-uti',
    title: 'Genomic Characterization of Multidrug-Resistant Pseudomonas aeruginosa Isolates from ICU-Acquired Urinary Tract Infections',
    status: 'ongoing',
    lab: BBGL,
    supervisor: BISWAS,
    objective: 'Characterise the genomes of multidrug-resistant P. aeruginosa isolated from ICU-acquired urinary tract infections.',
    methodology: null,
    findings: null,
    outputs: [],
    links: [],
  },
  {
    id: 't2dm',
    title: 'Integrative Genomic and Transcriptomic Analysis Linking Host Metabolic Stress to Butyrate-Producer Bacterial Depletion in Type 2 Diabetes Mellitus',
    status: 'ongoing',
    lab: GENEPATH,
    supervisor: AIUB,
    objective: 'Connect host metabolic-stress signatures with the loss of butyrate-producing gut bacteria in type 2 diabetes.',
    methodology: 'Integrated genomic and transcriptomic analysis.',
    findings: null,
    outputs: ['Manuscript in preparation'],
    links: [],
  },
  {
    id: 'gerbera',
    title: 'Optimizing In-Vitro Shoot Induction and Multiple Shoot Regeneration in Gerbera jamesonii: A Comparative Study of BAP, IAA, and NAA in Capitulum and Shoot Tip Explants',
    status: 'presented',
    lab: null,
    supervisor: null,
    objective: 'Find the growth-regulator treatment that best induces shoots from capitulum and shoot-tip explants of Gerbera jamesonii.',
    methodology: 'Plant tissue culture comparing BAP, IAA and NAA.',
    findings: null,
    outputs: ['Poster, Future Harvest Summit 2026, Runner-Up'],
    links: [],
  },
  {
    id: 'lysinibacillus',
    title: 'Revealing Lysinibacillus sphaericus BBGL-01, a Human Gut–Derived Isolate, as a Promising Probiotic Candidate',
    status: 'review',
    lab: BBGL,
    supervisor: BISWAS,
    objective: 'Evaluate a Lysinibacillus sphaericus strain isolated from the human gut, a first for Bangladesh, as a probiotic candidate.',
    methodology: 'Genomic analysis of the isolate.',
    findings: null,
    outputs: [
      'Manuscript under review, Journal of Genetic Engineering and Biotechnology (Elsevier)',
      'Poster, ICBHA 2025 (co-author)',
    ],
    links: [],
  },
  {
    id: 'icu-pathogens',
    title: 'Molecular Identification and Antibiotic Resistance of ICU Pathogens with Rare Clinical Detection of Enterobacter hormaechei in Bangladesh',
    status: 'review',
    lab: BBGL,
    supervisor: BISWAS,
    objective: 'Identify bacterial pathogens from intensive-care patients at the molecular level and profile their antibiotic resistance.',
    methodology: null,
    findings: 'Includes a rare clinical detection of Enterobacter hormaechei in Bangladesh.',
    outputs: ['Manuscript under review, New Microbes and New Infections (Elsevier)'],
    links: [],
  },
  {
    id: 'bactoflow',
    title: 'BactoFlow: An Automated and Reproducible Pipeline for High-Resolution Bacterial Genomics',
    status: 'published',
    lab: BBGL,
    supervisor: BISWAS,
    objective: 'Make high-resolution bacterial genomics accessible without assembling and managing separate tools.',
    methodology: 'Conda-managed, checkpointed pipeline covering QC, mapping, variant calling, assembly, annotation and AMR/virulence/defence screening, demonstrated on a clinical P. aeruginosa isolate.',
    findings: 'Assigned the isolate to high-risk clone ST308 and recovered 51 AMR genes, 290 virulence factors and 12 antiviral defence systems.',
    outputs: ['Integrative Bioscience Nexus 1(2), 2026 (first author)'],
    links: [
      { label: 'Read paper', href: 'papers/Sikdar-2026-BactoFlow-IBN.pdf' },
      { label: 'GitHub', href: 'https://github.com/mdarsikdar/BactoFlow' },
    ],
  },
  {
    id: 'xdr-uropathogens',
    title: 'Bacteriophage-Mediated Control of Extensively Drug-Resistant (XDR) Uropathogens',
    status: 'published',
    lab: BBGL,
    supervisor: BISWAS,
    objective: 'Identify uropathogens from suspected UTI patients and test bacteriophages as an alternative antimicrobial strategy.',
    methodology: 'Biochemical tests, 16S rRNA sequencing, susceptibility testing against 14 antibiotics, phage isolation from sewage, and spot, double-agar and stability assays.',
    findings: 'Five lytic phages were active against XDR E. coli and P. aeruginosa and stable from −20 °C to 50 °C and pH 5–9.',
    outputs: ['Integrative Bioscience Nexus 1(2), 2026 (co-author)'],
    links: [{ label: 'Read paper', href: 'papers/Sheikh-2026-XDR-Uropathogens-IBN.pdf' }],
  },
];

/* ------------------------------------------------------------------ */
/* C. Publications                                                     */
/* ------------------------------------------------------------------ */

export const journalArticles = [
  {
    id: 'bactoflow-2026',
    title: 'BactoFlow: An Automated and Reproducible Pipeline for High-Resolution Bacterial Genomics',
    authors: [SELF, 'Md. Abidur Rahman', 'Umma Habiba Hafsa', 'Hossain Md. Faruquee', 'Sudhangshu Kumar Biswas'],
    year: 2026,
    venue: 'Integrative Bioscience Nexus',
    details: 'Vol. 1, Issue 2, pp. 39–46',
    publisher: 'BiologicaAid, Bangladesh',
    date: 'Published 5 July 2026',
    status: 'published',
    doi: null, // DOI not yet issued: add e.g. '10.xxxx/ibn.2026.11.0004' when live
    url: null,
    pdf: 'papers/Sikdar-2026-BactoFlow-IBN.pdf',
    code: 'https://github.com/mdarsikdar/BactoFlow',
    summary:
      'BactoFlow is a modular, Conda-managed pipeline that runs bacterial whole-genome analysis end to end, from quality control, mapping and variant calling through assembly, annotation, resistance, virulence and anti-phage defence screening, with checkpointed, reproducible execution. On a clinical Pseudomonas aeruginosa isolate it identified the high-risk clone ST308 and a 6.92 Mb draft genome carrying 51 AMR genes, 290 virulence factors and 12 antiviral defence systems.',
    keywords: ['Whole-genome sequencing', 'Bacterial genomics', 'Bioinformatic workflow', 'Pipeline automation'],
  },
  {
    id: 'xdr-2026',
    title: 'Bacteriophage-Mediated Control of Extensively Drug-Resistant (XDR) Uropathogens',
    authors: [
      'Md. Kamrul Sheikh',
      'Md. Abidur Rahman',
      SELF,
      'Md Rasheduzzaman',
      'Sumaya Shahin',
      'Umma Habiba Hafsa',
      'N M Yousuf Ivn Ashraf',
      'Hossain Md. Faruquee',
      'Sudhangshu Kumar Biswas',
    ],
    year: 2026,
    venue: 'Integrative Bioscience Nexus',
    details: 'Vol. 1, Issue 2, pp. 47–55',
    publisher: 'BiologicaAid, Bangladesh',
    date: 'Published 6 July 2026',
    status: 'published',
    doi: null, // DOI not yet issued
    url: null,
    pdf: 'papers/Sheikh-2026-XDR-Uropathogens-IBN.pdf',
    code: null,
    summary:
      'Four uropathogens from suspected UTI patients were identified as E. coli and P. aeruginosa; testing against 14 antibiotics revealed extensive multidrug resistance, including one pandrug-resistant isolate. Five lytic phages isolated from sewage lysed these hosts and remained active from −20 °C to 50 °C and pH 5–9, supporting phage therapy as an alternative or adjunct treatment for XDR urinary infections.',
    keywords: ['Multidrug-resistant', 'Uropathogens', 'Bacteriophage therapy', 'E. coli', 'P. aeruginosa'],
  },
];

export const conferencePapers = [
  {
    id: 'iocb-2026',
    title: 'Comprehensive Workflow for Bacterial Genome Analysis: From SRA Raw Reads to Reference Mapping and Annotation',
    authors: [SELF, 'Md. Abidur Rahman', 'Md. Bakibillah'],
    year: 2026,
    venue: 'Proceedings of The 1st International Online Conference on Biology',
    details: 'Session S4, Infection Biology · 10–12 February 2026',
    publisher: 'MDPI, Basel, Switzerland',
    date: 'Published 5 February 2026',
    status: 'published',
    doi: null,
    url: 'https://sciforum.net/paper/28743',
    conferenceUrl: 'https://sciforum.net/event/IOCBI2026',
    pdf: null,
    code: 'https://github.com/mdarsikdar/bacterial-upstream-analysis',
    certificate: driveFile('1s8Xmmh46WEDozMsCnQfBXV71nuXk3E0l'),
    summary:
      'An automated, Conda-based workflow for Illumina bacterial genomes that chains SRA download, QC and trimming, reference mapping, variant calling, de novo assembly and annotation. Applied to P. aeruginosa SRR33893847, it produced a ~6.93 Mb draft genome (N50 ≈ 298 kb) with 6,379 coding sequences. The same work earned 6th position at the Rufaida BioMeds Poster Competition 2025.',
    keywords: ['NGS', 'Genomics', 'Workflow', 'Bacteria'],
  },
];

/** Posters and talks. Author lists are given only where the CV lists them. */
export const presentations = [
  {
    title: 'Optimizing In-Vitro Shoot Induction and Multiple Shoot Regeneration in Gerbera jamesonii: A Comparative Study of BAP, IAA, and NAA in Capitulum and Shoot Tip Explants',
    event: 'Future Harvest Summit 2026',
    organizer: 'Qamarun Agro Farm and IAAS Bangladesh IU',
    venue: 'Islamic University Bangladesh, Kushtia',
    date: '25 Sep 2026',
    format: 'Poster',
    role: 'Presenting author',
    authors: null,
    award: 'Runner-Up',
    certificate: driveFile('1otWJtDaXwvw4XzOO29sID9YdMaOj_t2y'),
  },
  {
    title: 'Phage-Resistance Islands (PLEs) in Vibrio cholerae: Conserved Domains Underlying Functional Mimicry and Co-evolution with ICP1 Phage Lineages',
    event: '6th International Young Biotechnologist Congress (NYBB Future Biotechnologists Summit 2026)',
    organizer: 'Network of Young Biotechnologists of Bangladesh (NYBB)',
    venue: 'Nawab Ali Chowdhury Senate Bhaban, University of Dhaka',
    date: '25 Apr 2026',
    format: 'Poster',
    role: 'Presenting author',
    authors: [SELF, 'Umma Habiba Hafsa', 'Md. Abidur Rahman', 'Md. Mehedi Hasan Sumon', 'Hossain Md. Faruquee', 'Sudhangshu Kumar Biswas'],
    award: null,
    certificate: driveFile('1NOOAtDdRCRBfemSqAbtTcrhRg7P8UOqJ'),
  },
  {
    title: 'Restoring Antibiotic Susceptibility in Resistant Escherichia coli via Bacteriophage Intervention',
    event: 'International Scientific Symposium 2026',
    organizer: 'Higher Education Acceleration and Transformation (HEAT)',
    venue: 'Islamic University Bangladesh, Kushtia',
    date: '21 Apr 2026',
    format: 'Poster',
    role: 'Co-author',
    authors: ['Md. Rasheduzzaman', 'Md. Abidur Rahman', SELF, 'Md. Mehedi Hasan Sumon', 'Sudhangshu Kumar Biswas'],
    award: null,
    certificate: driveFile('1YdUV4XfQzGVLjRDQVDp09xtVX8icXl4W'),
  },
  {
    title: 'Uncovering His-Box Motif Dynamics in Bacteriophage Tail Fibers: Insights into Host Specificity and Evolutionary Flexibility via Horizontal Gene Transfer',
    event: '1st International Conference on Life Science, Health, and Biotechnology (LifeTech 2026)',
    organizer: 'Faculty of Biological Science and Technology, JUST',
    venue: 'Jashore University of Science and Technology',
    date: '17–18 Jan 2026',
    format: 'Oral',
    role: 'Presenting author',
    authors: [
      SELF,
      'Md. Mehedi Hasan Sumon',
      'Md. Bakibillah',
      'Md. Abidur Rahman',
      'Md. Ibrahim',
      'Sabbir Ahmed',
      'Sezanur Rahman',
      'Sudhangshu Kumar Biswas',
    ],
    award: null,
    certificate: driveFile('1yRv9XaA3pxzxK1nyiiBinJXQqvcm8W6u'),
  },
  {
    title: 'Genomic Insights into the Probiotic Potential of Lysinibacillus sphaericus: First Isolation from the Human Gut in Bangladesh',
    event: '6th International Conference on Biotechnology in Health and Agriculture (ICBHA 2025)',
    organizer: 'Global Network of Young Biotechnologists of Bangladesh',
    venue: 'Sher-e-Bangla Agricultural University, Dhaka',
    date: '26–27 Sep 2025',
    format: 'Poster · PD2-19',
    role: 'Co-author',
    authors: null,
    award: null,
    certificate: null,
  },
  {
    title: 'Exploring His-Box Dynamics in Bacteriophage Tail Fibers: Insights into Host Specificity and Evolutionary Flexibility',
    event: '2nd ISCB RSG Bangladesh CompBio Symposium 2025',
    organizer: 'ISCB-RSG Bangladesh',
    venue: 'Dept. of Biochemistry and Molecular Biology, University of Dhaka',
    date: '22 Feb 2025',
    format: 'Poster',
    role: 'Presenting author',
    authors: null,
    award: "People's Choice Award",
    certificate: driveFile('1XdpV3ecffHY7BqwoUhFkvhmFyJNpP_tx'),
  },
];

/* ------------------------------------------------------------------ */
/* D. Manuscripts not yet published                                    */
/* ------------------------------------------------------------------ */

export const manuscripts = [
  {
    title: 'Revealing Lysinibacillus sphaericus BBGL-01, a Human Gut–Derived Isolate, as a Promising Probiotic Candidate',
    authors: [
      'Mst. Atia Sultana',
      SELF,
      'Md. Mehedi Hasan Sumon',
      'Joytun Nahar',
      'Md. Johorul Islam',
      'Khandker Md. Faisal Alam',
      'Sezanur Rahman',
      'Mohammad Jubair',
      'Mustafizur Rahman',
      'Sudhangshu Kumar Biswas',
      'Dipak Kumar Paul',
    ],
    venue: 'Journal of Genetic Engineering and Biotechnology (Elsevier)',
    reference: 'Ms. No. JGEBIO-D-26-00264',
    status: 'review',
  },
  {
    title: 'Molecular Identification and Antibiotic Resistance of ICU Pathogens with Rare Clinical Detection of Enterobacter hormaechei in Bangladesh',
    authors: [
      'Mst. Roma Khatun',
      'Mst. Atia Sultana',
      'Sadia Farzana',
      SELF,
      'N M Yousuf Ivn Ashraf',
      'Md. Rasheduzzaman',
      'Md. Johorul Islam',
      'Md. Toufiq Elahi',
      'Khandker Md. Faisal Alam',
      'Sudhangshu Kumar Biswas',
      'Dipak Kumar Paul',
    ],
    venue: 'New Microbes and New Infections (Elsevier)',
    reference: 'Ms. No. NMNI-D-26-00425',
    status: 'review',
  },
  {
    title: 'Lineage-Associated His-box Motifs Reveal Receptor-Specific Docking in Bacteriophage Tail Fibers: A Computational Approach',
    authors: null,
    venue: BBGL,
    reference: null,
    status: 'preparation',
  },
  {
    title: 'Integrative Genomic and Transcriptomic Analysis Linking Host Metabolic Stress to Butyrate-Producer Bacterial Depletion in Type 2 Diabetes Mellitus',
    authors: null,
    venue: GENEPATH,
    reference: 'Working title',
    status: 'preparation',
  },
];
