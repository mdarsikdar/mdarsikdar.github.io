import {
  Activity,
  Atom,
  Dna,
  FlaskConical,
  Languages,
  Layers,
  Mail,
  Network,
  Pill,
  ShieldCheck,
  Terminal,
  Waypoints,
  Wrench,
} from 'lucide-react';

/* Lucide no longer ships brand marks, so the academic-profile icons are drawn here. */

function Svg({ size = 20, children, fill = 'none', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const OrcidIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8.4 10.2v6.3" />
    <circle cx="8.4" cy="7.6" r=".6" fill="currentColor" />
    <path d="M11.6 16.5v-6.3h2.2c1.9 0 3.2 1.3 3.2 3.15s-1.3 3.15-3.2 3.15z" />
  </Svg>
);

export const ScholarIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3 2 9.6l3.9 2.6" />
    <path d="M12 3l10 6.6-3.9 2.6" />
    <circle cx="12" cy="15.5" r="5" />
  </Svg>
);

export const ResearchGateIcon = (p) => (
  <Svg {...p}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="4" />
    <text
      x="12"
      y="15.6"
      textAnchor="middle"
      fontSize="9"
      fontWeight="700"
      fontFamily="Arial, Helvetica, sans-serif"
      fill="currentColor"
      stroke="none"
    >
      RG
    </text>
  </Svg>
);

export const GithubIcon = (p) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="M12 .8C5.8.8.8 5.9.8 12.2c0 5 3.2 9.3 7.7 10.8.6.1.8-.2.8-.6v-2c-3.1.7-3.8-1.4-3.8-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3.1 1.2a10.6 10.6 0 0 1 5.6 0c2.1-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.7.1 3 .7.8 1.2 1.8 1.2 3 0 4.3-2.6 5.3-5.1 5.6.4.4.8 1 .8 2.1v3.1c0 .3.2.7.8.6a11.4 11.4 0 0 0 7.6-10.8C23.2 5.9 18.2.8 12 .8Z" />
  </Svg>
);

export const LinkedinIcon = (p) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="M5.2 3.3a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9.2h3.6v11.5H3.4V9.2Zm5.9 0h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.7 0 4.4 2.4 4.4 5.6v6.2h-3.6v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6H9.3V9.2Z" />
  </Svg>
);

/** Bacteriophage: icosahedral head, tail and tail fibres. */
export const PhageIcon = (p) => (
  <Svg {...p}>
    <path d="M12 2.2 16.2 4.6v4.8L12 11.8 7.8 9.4V4.6Z" />
    <path d="M12 11.8v5.4M10.4 13.4h3.2M10.4 15.4h3.2" />
    <path d="M9.8 17.2h4.4M10.2 17.2 7.4 21.6M13.8 17.2l2.8 4.4M11.2 17.2l-1 4.6M12.8 17.2l1 4.6" />
  </Svg>
);

/** Rod-shaped bacterium with a flagellum. */
export const MicrobeIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="8.2" width="13.5" height="7.6" rx="3.8" transform="rotate(-24 9.75 12)" />
    <path d="M15.9 7.3c1.2-.8 2.1-.2 3-1s.7-1.9 1.9-2.6" />
    <circle cx="8.4" cy="12.8" r=".7" fill="currentColor" />
    <circle cx="11.4" cy="11.2" r=".7" fill="currentColor" />
  </Svg>
);

export const linkIcons = {
  orcid: OrcidIcon,
  scholar: ScholarIcon,
  researchgate: ResearchGateIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
};

/** Keys used by `icon` fields in src/data. */
export const topicIcons = {
  microbe: MicrobeIcon,
  phage: PhageIcon,
  flask: FlaskConical,
  dna: Dna,
  network: Network,
  atom: Atom,
  terminal: Terminal,
  wrench: Wrench,
  languages: Languages,
  shield: ShieldCheck,
  pill: Pill,
  link: Waypoints,
  layers: Layers,
  activity: Activity,
};

export function TopicIcon({ name, ...props }) {
  const Icon = topicIcons[name] ?? Dna;
  return <Icon aria-hidden="true" {...props} />;
}
