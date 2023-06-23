const Logo = () => {
  return (
    <>
      <span className="sr-only">Logo</span>
      <span className="flex text-4xl text-white !font-black leading-none items-center !font-mono">
        <span className="aspect-square object-fill image-full  pointer-events-none">
          <svg
            width="60"
            height="60"
            viewBox="0 0 32 32"
            fill="#fff"
            xmlns="http://www.w3.org/2fff/svg"
          >
            <g>
              <mask
                id="mask0_7_92"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <path d="M32 0H0V32H32V0Z" fill="#fff" />
              </mask>
              <g mask="url(#mask0_7_92)">
                <path
                  d="M1.86512 16.6951C1.4502 8.62025 7.89859 1.84616 16.0002 1.84616C23.8171 1.84616 30.1539 8.17041 30.1539 15.9718V18.375C26.1539 27.6923 24.3077 26.7692 16.6154 30.7692C16.0386 30.7692 15.6094 30.9907 15.0769 30.7692L9.71798 29.5424C9.02025 29.2523 8.26216 29.1363 7.50936 29.2046L2.26419 29.6805V24.4615L1.86512 16.6951Z"
                  fill="#66CC8A"
                />
                <path
                  d="M4.61539 30.7692L23.0769 11.6923V8.61539H10.1539V11.6923H17.5385L1.84616 28L4.61539 30.7692Z"
                  fill="white"
                />
                <path
                  d="M23.0769 20.2154H16.532L13.4154 23.3846H23.0769V20.2154Z"
                  fill="white"
                />
                <path
                  d="M15.9901 29.047H15.9847C13.6199 29.0461 11.3002 28.4108 9.27668 27.2099L8.79545 26.9242L3.80723 28.2327L5.13863 23.3693L4.8253 22.8706C3.50599 20.7722 2.80923 18.3471 2.81022 15.8567C2.81311 8.59003 8.72554 2.67808 15.9953 2.67808C19.5156 2.67929 22.8247 4.05206 25.3131 6.54326C27.8014 9.03434 29.171 12.3458 29.1697 15.8673C29.1668 23.1346 23.2543 29.047 15.9901 29.047ZM27.207 4.65027C24.2132 1.65302 20.2318 0.00167271 15.9899 0C7.24979 0 0.136402 7.11286 0.132904 15.8556C0.131764 18.6505 0.861902 21.3783 2.24956 23.7831L0 32L8.40597 29.7949C10.722 31.0582 13.3297 31.7241 15.9836 31.725H15.9901C24.7293 31.725 31.8434 24.6114 31.847 15.8684C31.8486 11.6314 30.2007 7.64745 27.207 4.65027Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_7_92">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="h-fit">ap</span>
        <span className="text-secondary h-fit first-letter:!font-bold ">
          <span className="h-fit">T</span>o
        </span>
      </span>
    </>
  );
};

export default Logo;
