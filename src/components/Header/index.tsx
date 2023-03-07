import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-600">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Home <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="flex lg:hidden"></div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="text-sm font-semibold leading-6 text-white"
          >
            Login <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
