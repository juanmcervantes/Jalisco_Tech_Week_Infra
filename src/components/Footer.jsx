import * as React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <h2 className="text-xl font-bold">Jalisco Tech Week 2025</h2>
        <p className="text-sm">Del 17 al 23 de Noviembre</p>
      </div>

      <div className="flex gap-6">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/jaliscotechweek/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zM16 11.37a4 4 0 11-7.999.001A4 4 0 0116 11.37zm1.75-4.62a.75.75 0 10.001 1.5.75.75 0 00-.001-1.5z"
            />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/jalisco-tech-week/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V9h3v10zM6.5 7.6c-1 0-1.7-.7-1.7-1.6S5.5 4.4 6.5 4.4s1.7.7 1.7 1.6S7.5 7.6 6.5 7.6zM20 19h-3v-5.2c0-1.2-.4-2-1.5-2s-1.7.8-1.7 2V19h-3V9h3v1.4c.5-.7 1.2-1.4 2.5-1.4 1.9 0 3.2 1.3 3.2 3.9V19z" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/jaliscotechweek"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.492V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
