export const demoKpis = [
  { label: 'Visitors', value: '42,892', change: '+12.8%', trend: 'up', detail: 'vs. previous 30 days' },
  { label: 'Conversion rate', value: '3.42%', change: '+0.6%', trend: 'up', detail: 'vs. previous 30 days' },
  { label: 'Qualified leads', value: '1,284', change: '+8.2%', trend: 'up', detail: 'estimated from demo signals' },
  { label: 'Revenue opportunities', value: '€48.2k', change: 'Directional', trend: 'neutral', detail: 'illustrative estimate' },
];

export const demoLeads = [
  { id: 1, initials: 'JD', name: 'Jordan Davis', company: 'Acme Studio', email: 'jordan@acmestudio.example', source: 'Google', pages: 8, engagement: 'High', score: 94, status: 'Qualified', color: 'purple', visited: '2 min ago', summary: 'High-engagement visitor. Viewed pricing three times and returned within 24 hours before requesting a consultation.', events: ['Visited pricing page', 'Viewed case studies', 'Started contact form', 'Returned within 24 hours'] },
  { id: 2, initials: 'SL', name: 'Sam Lee', company: 'Nova Health', email: 'sam@novahealth.example', source: 'Direct', pages: 6, engagement: 'High', score: 82, status: 'Review', color: 'blue', visited: '18 min ago', summary: 'Repeat visitor with sustained product interest. Several product pages viewed in one session.', events: ['Visited product overview', 'Compared plans', 'Viewed customer stories'] },
  { id: 3, initials: 'MK', name: 'Morgan Kim', company: 'Orbit Labs', email: 'morgan@orbitlabs.example', source: 'LinkedIn', pages: 5, engagement: 'Medium', score: 71, status: 'New', color: 'orange', visited: '43 min ago', summary: 'Engaged visitor from a professional referral. Returned to the integrations page.', events: ['Visited integrations', 'Read implementation guide', 'Clicked demo CTA'] },
  { id: 4, initials: 'AT', name: 'Alex Taylor', company: 'Fieldnote', email: 'alex@fieldnote.example', source: 'Google Ads', pages: 4, engagement: 'Medium', score: 68, status: 'New', color: 'mint', visited: '1 hr ago', summary: 'New visitor with moderate engagement. Most time was spent on the use-cases section.', events: ['Viewed use cases', 'Visited pricing page', 'Clicked primary CTA'] },
  { id: 5, initials: 'PR', name: 'Priya Rao', company: 'Kindred Commerce', email: 'priya@kindred.example', source: 'Newsletter', pages: 11, engagement: 'High', score: 91, status: 'Qualified', color: 'rose', visited: '2 hr ago', summary: 'Frequent return visits and broad product exploration. Strong engagement signals in the demo dataset.', events: ['Returned for third session', 'Visited pricing page', 'Downloaded buyer guide', 'Started contact form'] },
  { id: 6, initials: 'NO', name: 'Noah Okafor', company: 'Summit Learning', email: 'noah@summit.example', source: 'Organic', pages: 3, engagement: 'Low', score: 42, status: 'New', color: 'slate', visited: '4 hr ago', summary: 'Early journey with a small number of page views. Not enough signals for a strong prioritisation.', events: ['Viewed homepage', 'Read learning platform page'] },
  { id: 7, initials: 'EC', name: 'Emilia Chen', company: 'Common Ground', email: 'emilia@commonground.example', source: 'Referral', pages: 7, engagement: 'High', score: 86, status: 'Review', color: 'cyan', visited: 'Yesterday', summary: 'Referral visitor with repeat activity. Explored implementation and trust content.', events: ['Visited from partner referral', 'Read security page', 'Viewed pricing page'] },
];

export const demoExperiments = [
  { id: 'EXP-024', name: 'Homepage CTA', type: 'CTA test', page: '/', status: 'Running', variantA: 'Get started', variantB: 'Increase my revenue', metric: 'Click-through rate', enrolled: 4208, lift: '+0.8%', confidence: 'Directional · not yet conclusive', updated: 'Updated 2 hours ago' },
  { id: 'EXP-023', name: 'Pricing page headline', type: 'Headline test', page: '/pricing', status: 'Draft', variantA: 'Plans that grow with you', variantB: 'Make every visit count', metric: 'Qualified lead rate', enrolled: 0, lift: '—', confidence: 'Not started', updated: 'Edited yesterday' },
  { id: 'EXP-021', name: 'Guide download placement', type: 'Landing page test', page: '/resources/guide', status: 'Completed', variantA: 'Inline form', variantB: 'Exit-intent form', metric: 'Lead conversion', enrolled: 3840, lift: '+0.4%', confidence: 'Completed · demo result', updated: 'Ended Sep 24' },
];

export const integrations = [
  { name: 'Google Analytics', group: 'Analytics', mark: 'G', style: 'ga', detail: 'Bring sessions, engagement and conversion signals into one view.' },
  { name: 'Google Ads', group: 'Acquisition', mark: 'G', style: 'ads', detail: 'Connect campaign context to downstream lead quality.' },
  { name: 'Meta Ads', group: 'Acquisition', mark: '∞', style: 'meta', detail: 'Compare paid social journeys with on-site outcomes.' },
  { name: 'Shopify', group: 'Commerce', mark: 'S', style: 'shop', detail: 'Connect product discovery, cart and checkout signals.' },
  { name: 'HubSpot', group: 'CRM', mark: 'H', style: 'hub', detail: 'Link lead activity with pipeline milestones.' },
  { name: 'Salesforce', group: 'CRM', mark: 'SF', style: 'sales', detail: 'Bring account and opportunity context into your analysis.' },
  { name: 'Stripe', group: 'Payments', mark: 'S', style: 'stripe', detail: 'Understand how paid customer journeys progress.' },
  { name: 'WhatsApp Business', group: 'Messaging', mark: 'W', style: 'whatsapp', detail: 'Include conversational lead touchpoints in the journey.' },
  { name: 'Email platforms', group: 'Messaging', mark: '✉', style: 'email', detail: 'Connect campaign engagement with on-site outcomes.' },
];

export const navItems = [
  { id: 'overview', label: 'Overview', icon: 'overview' },
  { id: 'intelligence', label: 'Revenue Intelligence', icon: 'intelligence' },
  { id: 'audit', label: 'Website Audit', icon: 'audit' },
  { id: 'leads', label: 'Lead Intelligence', icon: 'leads' },
  { id: 'experiments', label: 'Experiments', icon: 'experiments' },
  { id: 'analytics', label: 'Analytics', icon: 'analytics' },
  { id: 'copilot', label: 'Revenue Copilot', icon: 'copilot' },
  { id: 'integrations', label: 'Integrations', icon: 'integrations' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];
