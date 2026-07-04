"use client";

import { useState } from "react";
import type { FAQ } from "@/app/faq/faqData";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <style>{`
        .faq-item {
          border-top: 1px solid var(--border);
        }
        .faq-item:last-child {
          border-bottom: 1px solid var(--border);
        }
        .faq-btn {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.75rem 0;
          text-align: left;
        }
        .faq-btn:hover .faq-question {
          color: var(--gold-light);
        }
        .faq-question {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          font-weight: 400;
          color: white;
          line-height: 1.35;
          transition: color 0.2s;
        }
        .faq-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border: 1px solid var(--border-strong);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          font-size: 1.1rem;
          line-height: 1;
          margin-top: 2px;
          transition: background 0.2s, border-color 0.2s;
        }
        .faq-icon.open {
          background: var(--blue-pale);
          border-color: var(--blue);
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.3s ease;
        }
        .faq-answer-inner {
          padding-bottom: 1.75rem;
          font-size: 0.92rem;
          line-height: 1.9;
          color: var(--muted);
          max-width: 720px;
        }
      `}</style>

      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.anchor} className="faq-item" id={faq.anchor}>
            <button
              className="faq-btn"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`answer-${faq.anchor}`}
            >
              <span className="faq-question">{faq.question}</span>
              <span className={`faq-icon${isOpen ? " open" : ""}`} aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={`answer-${faq.anchor}`}
              className="faq-answer"
              style={{
                maxHeight: isOpen ? "600px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
              role="region"
              aria-labelledby={faq.anchor}
            >
              <p className="faq-answer-inner">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
