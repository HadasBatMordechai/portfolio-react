import type { MouseEventHandler } from 'react';

type Props = {
  styleClass?: string;
  clicked?: MouseEventHandler<HTMLAnchorElement>;
};

export default function NavList({ styleClass, clicked }: Props) {
  const links = [
    { link: 'about' },
    { link: 'hobbies' },
    { link: 'projects' },
    { link: 'why', txt: 'why me' },
    { link: 'contact' },
  ];

  const linksList = links.map((l) => {
    return (
      <li key={l.link} className="py-1 px-3">
        <a
          onClick={clicked}
          className="block hover:text-indigo-800 transition-colors p-2"
          href={'#' + l.link}>
          {l.txt || l.link}
        </a>
      </li>
    );
  });

  return <ul className={`${styleClass} capitalize font-light`}>{linksList}</ul>;
}
