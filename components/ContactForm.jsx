import LeadForm from "./LeadForm";

export default function ContactForm() {
  return (
    <LeadForm
      formName="project-enquiry"
      action="/project-enquiry"
      submitLabel="Send Project Enquiry →"
      successTitle="Thanks — enquiry received!"
      successBody="I'll get back to you within one business day. For a faster response, feel free to"
    >
      <div className="form-grid-2">
        <div className="field">
          <label htmlFor="c-name">Name</label>
          <input id="c-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="form-grid-2">
        <div className="field">
          <label htmlFor="c-whatsapp">WhatsApp</label>
          <input id="c-whatsapp" name="whatsapp" type="tel" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="c-business">Business name</label>
          <input id="c-business" name="business" type="text" autoComplete="organization" />
        </div>
      </div>
      <div className="form-grid-2">
        <div className="field">
          <label htmlFor="c-type">Project type</label>
          <select id="c-type" name="project_type" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Business Website</option>
            <option>Landing Page</option>
            <option>E-commerce Website</option>
            <option>NGO / Organization Website</option>
            <option>Website Redesign</option>
            <option>Maintenance &amp; Support</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="c-budget">Budget</label>
          <select id="c-budget" name="budget" defaultValue="">
            <option value="">Select a range</option>
            <option>Under ₹10,000</option>
            <option>₹10,000 – ₹20,000</option>
            <option>₹20,000 – ₹35,000</option>
            <option>₹35,000+</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-message">Message</label>
        <textarea id="c-message" name="message" placeholder="Tell me a bit about your business and what you're looking for…" />
      </div>
    </LeadForm>
  );
}
