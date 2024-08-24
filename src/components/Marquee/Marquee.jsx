import React from "react";

const Marquee = () => {
  return (
    <div>
      <div class="notification-bar">
        <div class="coming_soon-container">
          <p class="message">
            <span>
              <strong>🎉 Exciting News !!!&nbsp;&nbsp;</strong>
              🎉 Our new branch is opening on 31<sup>st</sup> of August , 2024
              (Bhadra 15<sup>th</sup>, 2081) in Sallaghari, Bhaktapur! Stay
              tuned for the special offers. Thank you for your continued
              support! 🚀
            </span>
            <a href="/coming-soon" class="learn-more">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
