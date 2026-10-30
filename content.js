/* =====================================================================
   EDIT YOUR WEBSITE TEXT HERE
   ---------------------------------------------------------------------
   Change any words between the quote marks "like this", then commit.
   Keep the quotes, commas and brackets as they are.
   Skill levels go from 1 to 3 (number of filled dots).
   A "|" in a detail line shows as a small divider.
   ===================================================================== */

window.SITE = {

  /* ---------- About you ---------- */
  name: "Keerthana",
  email: "Keerthanack00@gmail.com",
  phone: "+1 206 902 0825",
  city: "Seattle, Washington",
  linkedin: "https://www.linkedin.com/in/keerthanack/",
  resume: "PDF coming soon",
  updated: "Oct 2026",

  /* ---------- Hello section ---------- */
  info: [
    { title: "Interior designer → Construction PM", detail: "Residential | Cafés | Restaurants" },
    { title: "Seeking internships",                 detail: "Construction PM | Pre-construction" }
  ],

  education: [
    { title: "Interior Design and Management",   detail: "Mount Carmel College | 2019" },
    { title: "Project Management, Construction", detail: "Northeastern University | In progress" }
  ],

  certifications: [
    { title: "Procore",  detail: "Certification | In progress" },
    { title: "Bluebeam", detail: "Certification | Planned" },
    { title: "OSHA 10",  detail: "Safety training | Planned" }
  ],

  /* [ "Tool name", level 1-3 ]  — shown in three columns, top to bottom */
  skills: [
    ["AutoCAD", 3], ["Photoshop", 2], ["Procore", 1],
    ["SketchUp", 3], ["Illustrator", 2], ["Bluebeam", 1],
    ["Revit", 2], ["Figma", 2], ["MS Project", 1]
  ],

  /* ---------- Project index ---------- */
  categories: {
    C: "Design – Construction",
    D: "UI/UX – Graphic",
    P: "Painting – Sketches"
  },

  /* The first 4 projects fill the left column of the index, the next 4 the right.
     id    = the page's web address (lowercase, hyphens, no spaces)
     cat   = C, D or P (see categories above)
     art   = placeholder drawing: cafe, restaurant, house, gantt, wire, graphic, paint, sketch
     tpl   = page layout: case (construction case study), cpm (construction package),
             ux (UI/UX case study), gallery (images) */
  projects: [
    { id: "cafe-fit-out",           code: "C-01", cat: "C", title: "Café fit-out",           sub: "A café interior followed from design through to opening day", art: "cafe",       tpl: "case" },
    { id: "restaurant-build",       code: "C-02", cat: "C", title: "Restaurant build",       sub: "Commercial interior and trade coordination",                  art: "restaurant", tpl: "case" },
    { id: "residential-renovation", code: "C-03", cat: "C", title: "Residential renovation", sub: "Selections, changes and closeout for a family home",           art: "house",      tpl: "case" },
    { id: "construction-package",   code: "C-04", cat: "C", title: "The café, built twice",  sub: "Takeoff, estimate and CPM schedule for project 1",             art: "gantt",      tpl: "cpm" },
    { id: "ui-ux",                  code: "D-01", cat: "D", title: "UI/UX project",          sub: "An app or web design case study",                             art: "wire",       tpl: "ux" },
    { id: "graphic-design",         code: "D-02", cat: "D", title: "Graphic design",         sub: "Branding and visual systems",                                 art: "graphic",    tpl: "gallery" },
    { id: "paintings",              code: "P-01", cat: "P", title: "Paintings",              sub: "Hand painting, studies in colour",                            art: "paint",      tpl: "gallery" },
    { id: "sketchbook",             code: "P-02", cat: "P", title: "Sketchbook",             sub: "Sketches, drawn on site and in the studio",                   art: "sketch",     tpl: "gallery" }
  ]
};
