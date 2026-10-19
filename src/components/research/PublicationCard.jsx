import { BookOpen, Code2, ExternalLink, FileCheck, Link2 } from 'lucide-react';
import { SELF } from '../../data/research.js';
import SmartLink from '../common/SmartLink.jsx';
import { AuthorList, StatusBadge, TagList } from '../common/ui.jsx';

/** Journal article or conference paper. Buttons appear only when a link exists. */
export default function PublicationCard({ pub, kind = 'journal' }) {
  const readHref = pub.pdf || pub.url;
  const doiHref = pub.doi ? `https://doi.org/${pub.doi}` : null;

  return (
    <article className="card pub" aria-labelledby={`${pub.id}-title`}>
      <header className="pub__head">
        <StatusBadge status={pub.status} />
        <span className="pub__year">{pub.year}</span>
        <span className="pub__kind">{kind === 'journal' ? 'Journal article' : 'Conference paper'}</span>
      </header>

      <h3 id={`${pub.id}-title`} className="pub__title">
        {pub.title}
      </h3>
      <AuthorList authors={pub.authors} self={SELF} />

      <p className="pub__venue">
        <em>{pub.venue}</em>
        {pub.details && <span> · {pub.details}</span>}
      </p>
      <p className="meta">
        {[pub.publisher, pub.date].filter(Boolean).join(' · ')}
        {!pub.doi && kind === 'journal' && <span className="pub__doi-pending"> · DOI pending</span>}
      </p>

      {pub.summary && (
        <div className="pub__summary">
          <h4 className="mini-heading">Summary</h4>
          <p>{pub.summary}</p>
        </div>
      )}

      <TagList items={pub.keywords} tone="outline" label="Keywords" />

      <div className="pub__actions">
        {readHref && (
          <SmartLink href={readHref} className="btn btn--primary btn--sm">
            <BookOpen size={16} aria-hidden="true" />
            Read paper
          </SmartLink>
        )}
        {doiHref && (
          <SmartLink href={doiHref} className="btn btn--outline btn--sm">
            <Link2 size={16} aria-hidden="true" />
            View DOI
          </SmartLink>
        )}
        {pub.conferenceUrl && (
          <SmartLink href={pub.conferenceUrl} className="btn btn--outline btn--sm">
            <ExternalLink size={16} aria-hidden="true" />
            View conference
          </SmartLink>
        )}
        {pub.code && (
          <SmartLink href={pub.code} className="btn btn--outline btn--sm">
            <Code2 size={16} aria-hidden="true" />
            Code
          </SmartLink>
        )}
        {pub.certificate && (
          <SmartLink href={pub.certificate} className="btn btn--quiet btn--sm">
            <FileCheck size={16} aria-hidden="true" />
            Certificate
          </SmartLink>
        )}
      </div>
    </article>
  );
}
