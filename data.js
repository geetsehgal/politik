/* ============================================================
   data.js
   Single source of truth for the dashboard.
   - BRANDS: the 13 brands and their contact numbers
   - SCENARIO_TEMPLATES: the 4 fixed email bodies (X / U / L / Z)
     Every brand shares the exact same template per scenario —
     only {{brand}} and {{contact}} are swapped in.
   - RECENT_UPDATES: newest first. index.html shows the first 5,
     updates.html shows all of them.
   - QUALITY_UPDATES: the fixed 10-point checklist.
   ============================================================ */

const BRANDS = [
  { id: "b01", name: "Brand Aster",    contact: "1800-313-0101" },
  { id: "b02", name: "Brand Solace",   contact: "1800-313-0102" },
  { id: "b03", name: "Brand Northwind",contact: "1800-313-0103" },
  { id: "b04", name: "Brand Marlowe",  contact: "1800-313-0104" },
  { id: "b05", name: "Brand Ferra",    contact: "1800-313-0105" },
  { id: "b06", name: "Brand Quillon",  contact: "1800-313-0106" },
  { id: "b07", name: "Brand Halcyon",  contact: "1800-313-0107" },
  { id: "b08", name: "Brand Vireo",    contact: "1800-313-0108" },
  { id: "b09", name: "Brand Cobalt",   contact: "1800-313-0109" },
  { id: "b10", name: "Brand Ember",    contact: "1800-313-0110" },
  { id: "b11", name: "Brand Lindow",   contact: "1800-313-0111" },
  { id: "b12", name: "Brand Osprey",   contact: "1800-313-0112" },
  { id: "b13", name: "Brand Tamarind", contact: "1800-313-0113" },
];

/*
  Fixed templates. {{brand}} and {{contact}} are the only
  variables — subject and body are identical across all 13 brands
  for a given scenario.
*/
const SCENARIO_TEMPLATES = {
  X: {
    label: "Customer says X",
    subject: "Following up on your recent query — {{brand}}",
    body:
`Dear Customer,

Thank you for reaching out to {{brand}}. Lorem ipsum dolor sit amet,
consectetur adipiscing elit. We understand your concern and want to
assure you that it is being looked into with priority.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Our team will keep you
updated at each step until this is fully resolved.

If you need to reach us in the meantime, please call {{contact}}
and quote your reference number.

Warm regards,
{{brand}} Customer Care`,
  },
  U: {
    label: "Customer says U",
    subject: "We've received your request — {{brand}}",
    body:
`Dear Customer,

Thank you for writing in to {{brand}}. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur, and we appreciate you bringing this to our attention.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
officia deserunt mollit anim id est laborum. Please allow us a
short window to review the details and revert with a resolution.

For any urgent update, you may reach us on {{contact}}.

Warm regards,
{{brand}} Customer Care`,
  },
  L: {
    label: "Customer says L",
    subject: "An update on your {{brand}} request",
    body:
`Dear Customer,

We're writing to you from {{brand}} regarding your recent message.
Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam.

Eaque ipsa quae ab illo inventore veritatis et quasi architecto
beatae vitae dicta sunt explicabo. Rest assured this has been
logged and is being tracked internally for closure.

Should you have further questions, call us anytime at {{contact}}.

Warm regards,
{{brand}} Customer Care`,
  },
  Z: {
    label: "Customer says Z",
    subject: "Thank you for your patience — {{brand}}",
    body:
`Dear Customer,

On behalf of {{brand}}, thank you for your patience while we
looked into this. Neque porro quisquam est, qui dolorem ipsum quia
dolor sit amet, consectetur, adipisci velit.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. We
consider this matter closed on our end, but remain reachable.

Please don't hesitate to call {{contact}} if anything reopens.

Warm regards,
{{brand}} Customer Care`,
  },
};

/* Newest first. Shown: first 5 on the dashboard, all of them on updates.html */
const RECENT_UPDATES = [
  { date: "2026-09-04", title: "Lorem ipsum dolor sit amet consectetur." },
  { date: "2026-09-03", title: "Ut enim ad minim veniam quis nostrud." },
  { date: "2026-09-02", title: "Duis aute irure dolor in reprehenderit." },
  { date: "2026-09-01", title: "Excepteur sint occaecat cupidatat non." },
  { date: "2026-08-30", title: "Sed ut perspiciatis unde omnis iste natus." },
  { date: "2026-08-28", title: "Neque porro quisquam est qui dolorem." },
  { date: "2026-08-27", title: "At vero eos et accusamus iusto odio." },
  { date: "2026-08-25", title: "Et harum quidem rerum facilis est." },
  { date: "2026-08-24", title: "Temporibus autem quibusdam et aut officiis." },
  { date: "2026-08-22", title: "Itaque earum rerum hic tenetur a sapiente." },
  { date: "2026-08-20", title: "Nam libero tempore cum soluta nobis." },
  { date: "2026-08-18", title: "Quis autem vel eum iure reprehenderit." },
];

/* Fixed mandatory 10-point quality checklist */
const QUALITY_UPDATES = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  "Duis aute irure dolor in reprehenderit in voluptate velit.",
  "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus.",
  "Et harum quidem rerum facilis est et expedita distinctio.",
  "Nam libero tempore cum soluta nobis est eligendi optio cumque.",
];
