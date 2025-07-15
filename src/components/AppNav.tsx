import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import NavList from './NavList';

export default function AppNav() {
  const hamburger = [1, 2, 3].map((i) => {
    return (
      <span
        aria-label="Open navbar"
        className="block w-7 h-0.5 m-1 rounded-full bg-current"
        key={i}
      />
    );
  });

  return (
    <div className="fixed md:absolute inset-x-0 top-0 w-full z-40">
      <Popover className="md:hidden relative">
        {({ open, close }) => (
          <div className={`${open ? 'bg-indigo-50' : ''} p-2`}>
            <PopoverButton className="cursor-pointer text-gray-800 hover:text-black hover:bg-gray-200 transition-colors rounded-full p-0.5 aspect-square">
              {open && (
                <svg
                  aria-label="Close navbar"
                  className="block w-8 m-0.5 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
              {!open && hamburger}
            </PopoverButton>
            <PopoverPanel
              transition
              className="transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 absolute inset-x-0 top-full w-full pb-5 z-30 bg-indigo-50">
              <NavList styleClass="text-center" clicked={close} />
            </PopoverPanel>
          </div>
        )}
      </Popover>
      <nav className="hidden md:block pt-8">
        <NavList styleClass="flex justify-center" />
      </nav>
    </div>
  );
}
