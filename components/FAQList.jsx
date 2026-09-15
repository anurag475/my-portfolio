"use client";

import { useState } from "react";
import { Plus } from "./Icons";

/** Single-open accordion. `items` is [{ q, a }]. */
export default function FAQList({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className="faq-item" data-open={isOpen} key={item.q}>
            <button
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <span className="icon">
                <Plus />
              </span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
