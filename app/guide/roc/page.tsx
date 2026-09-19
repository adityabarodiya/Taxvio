const sampleItems = [
  {
    title: 'Overview',
    description: 'Understand the key goals, scope, and expected outcomes of the ROC process.',
  },
  {
    title: 'Checklist',
    description: 'Track important tasks, required documents, and review milestones in one place.',
  },
  {
    title: 'Next Steps',
    description: 'Prepare actions for approval, validation, and final handoff to stakeholders.',
  },
];

export default function Page() {
  return (
    <main style={{ padding: '32px 24px', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <header style={{ marginBottom: '32px' }}>
          <p
            style={{
              margin: 0,
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#2563eb',
            }}
          >
            Guide
          </p>
          <h1 style={{ margin: '12px 0 8px', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f172a' }}>
            ROC Sample Page
          </h1>
          <p style={{ margin: 0, maxWidth: '720px', color: '#475569', lineHeight: 1.7 }}>
            This is a sample page for the ROC guide section. It includes a simple layout,
            content blocks, and a clean structure that can be expanded into a full guide.
          </p>
        </header>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '32px',
          }}
        >
          {sampleItems.map((item) => (
            <article
              key={item.title}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: '#dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: '#1d4ed8',
                  marginBottom: '16px',
                }}
              >
                {item.title.charAt(0)}
              </div>
              <h2 style={{ margin: '0 0 10px', fontSize: '1.2rem', color: '#0f172a' }}>{item.title}</h2>
              <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>{item.description}</p>
            </article>
          ))}
        </section>

        <section
          style={{
            background: '#0f172a',
            borderRadius: '20px',
            padding: '28px',
            color: '#f8fafc',
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: '14px', fontSize: '1.6rem' }}>Important Note</h2>
          <p style={{ margin: 0, color: '#cbd5e1', lineHeight: 1.8 }}>
            This section can be customized with your ROC process details, company rules, approval flow,
            and any regulatory or policy instructions relevant to your team.
          </p>
        </section>
      </div>
    </main>
  );
}
