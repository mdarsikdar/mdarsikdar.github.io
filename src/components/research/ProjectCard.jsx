import { ArrowUpRight, Building2, UserRound } from 'lucide-react';
import SmartLink from '../common/SmartLink.jsx';
import { StatusBadge } from '../common/ui.jsx';

function Field({ label, children }) {
  if (!children) return null;
  return (
    <div className="field">
      <dt className="mini-heading">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className={`card project project--${project.status}`}>
      <header className="project__head">
        <StatusBadge status={project.status} />
      </header>
      <h3 className="project__title">{project.title}</h3>

      <div className="meta-row">
        {project.lab && (
          <span className="meta meta--icon">
            <Building2 size={14} aria-hidden="true" />
            {project.lab}
          </span>
        )}
        {project.supervisor && (
          <span className="meta meta--icon">
            <UserRound size={14} aria-hidden="true" />
            Supervisor: {project.supervisor}
          </span>
        )}
      </div>

      <dl className="fields">
        <Field label="Objective">{project.objective}</Field>
        <Field label="Methodology">{project.methodology}</Field>
        <Field label="Main findings">{project.findings}</Field>
      </dl>

      {project.outputs?.length > 0 && (
        <ul className="outputs" aria-label="Outputs">
          {project.outputs.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      )}

      {project.links?.length > 0 && (
        <p className="link-row">
          {project.links.map((l) => (
            <SmartLink key={l.href} href={l.href} className="text-link text-link--sm">
              {l.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </SmartLink>
          ))}
        </p>
      )}
    </article>
  );
}
