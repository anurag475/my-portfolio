import LeadForm from "./LeadForm";

export default function AuditForm() {
  return (
    <LeadForm
      formName="audit-request"
      action="/audit-request"
      submitLabel="Get My Free Audit →"
      footNote="Your information is only used to prepare your audit — never shared or sold."
      successTitle="Request received!"
      successBody="Thanks — I'll review your website and send your free audit within 48 hours. In the meantime, feel free to"
    >
      <div className="field">
        <label htmlFor="audit-name">Name</label>
        <input id="audit-name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="audit-business">Business name</label>
        <input id="audit-business" name="business" type="text" required autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="audit-url">Website URL</label>
        <input id="audit-url" name="website_url" type="url" placeholder="https://" required />
      </div>
      <div className="field">
        <label htmlFor="audit-whatsapp">WhatsApp number</label>
        <input id="audit-whatsapp" name="whatsapp" type="tel" required autoComplete="tel" />
      </div>
    </LeadForm>
  );
}
