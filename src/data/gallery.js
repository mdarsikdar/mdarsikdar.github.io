/**
 * Gallery photos. To add one:
 *   1. Put the original in images-src/gallery/<name>.jpg
 *   2. Run `npm run images` (creates <name>.jpg and <name>-sm.jpg in public/images/gallery)
 *   3. Add an entry below. `focus` is the CSS object-position used for the square-ish
 *      grid crop; the lightbox always shows the full photo.
 *
 * An entry with `src: null` renders as a labelled placeholder slot.
 * Captions describe the event, not the people in the photo.
 */

export const galleryCategories = [
  'Laboratory',
  'Teamwork',
  'Conferences',
  'Presentations',
  'Awards',
  'Leadership',
];

const photo = (name, width, height) => ({
  src: `images/gallery/${name}.jpg`,
  thumb: `images/gallery/${name}-sm.jpg`,
  width,
  height,
});

export const gallery = [
  {
    id: 'lab-biosafety-cabinet',
    ...photo('lab-biosafety-cabinet', 1600, 900),
    category: 'Laboratory',
    caption: 'Aseptic culture work in a biological safety cabinet',
    date: null,
    place: null,
    alt: 'A researcher in gloves handling culture plates and a pipette inside a biological safety cabinet.',
    focus: 'center',
  },
  {
    id: 'lab-bench-instrument',
    ...photo('lab-bench-instrument', 1600, 1200),
    category: 'Laboratory',
    caption: 'At the laboratory bench',
    date: null,
    place: null,
    alt: 'A researcher wearing a face mask stands beside a benchtop instrument and racks of sample tubes.',
    focus: 'center 40%',
  },
  {
    id: 'dry-lab-workstation',
    ...photo('dry-lab-workstation', 1200, 1600),
    category: 'Laboratory',
    caption: 'Dry-lab analysis at the workstation',
    date: null,
    place: null,
    alt: 'A researcher seated at a desktop computer workstation, looking at data on the monitor.',
    focus: 'center 45%',
  },
  {
    id: 'research-team',
    ...photo('research-team', 1280, 960),
    category: 'Teamwork',
    caption: 'With fellow researchers in the laboratory',
    date: null,
    place: null,
    alt: 'A group of researchers, most in white lab coats, standing together in a laboratory.',
    focus: 'center 35%',
  },
  {
    id: 'lifetech-2026-oral-session',
    ...photo('lifetech-2026-oral-session', 1600, 1200),
    category: 'Presentations',
    caption: 'Oral session, LifeTech 2026',
    date: 'Jan 2026',
    place: 'Jashore University of Science and Technology',
    alt: 'A presenter at the lectern with slides projected on a screen, in front of a seated audience.',
    focus: 'center',
  },
  {
    id: 'iybc-2026-poster',
    ...photo('iybc-2026-poster', 1200, 1600),
    category: 'Conferences',
    caption: 'Poster session, 6th International Young Biotechnologist Congress',
    date: 'Apr 2026',
    place: 'University of Dhaka',
    alt: 'Two people standing in front of a research poster at a conference poster session.',
    focus: 'center 38%',
  },
  {
    id: 'icbha-2025-poster',
    ...photo('icbha-2025-poster', 1200, 1600),
    category: 'Conferences',
    caption: 'Poster session, ICBHA 2025',
    date: 'Sep 2025',
    place: 'Sher-e-Bangla Agricultural University, Dhaka',
    alt: 'A presenter with a conference lanyard standing beside a scientific poster.',
    focus: 'center 35%',
  },
  {
    id: 'future-harvest-2026-poster',
    ...photo('future-harvest-2026-poster', 1600, 1200),
    category: 'Conferences',
    caption: 'Poster presentation, Future Harvest Summit 2026 (Runner-Up)',
    date: 'Sep 2026',
    place: 'Islamic University Bangladesh',
    alt: 'A presenter explaining a research poster to a visitor at a poster session.',
    focus: 'center 40%',
  },
  {
    id: 'metagenomics-quiz-2026',
    ...photo('metagenomics-quiz-2026', 1600, 1200),
    category: 'Awards',
    caption: 'Quiz champion medal, Workshop on Metagenomics',
    date: 'May 2026',
    place: 'ASM Student Chapter IU, Islamic University Bangladesh',
    alt: 'A participant bows to receive a medal from a speaker at a workshop award ceremony.',
    focus: 'center 30%',
  },
  {
    id: 'student-event-2026',
    ...photo('student-event-2026', 1600, 1200),
    category: 'Leadership',
    caption: 'Speaking at a student-organised event',
    date: '16 May 2026',
    place: null,
    alt: 'A speaker addressing an audience from a wooden podium with a microphone.',
    focus: 'center 35%',
  },
];
