import React from "react";
import "./Footer.style.css";

const links = [
  { label: "React", href: "https://react.dev/" },
  { label: "BlueprintJs", href: "https://blueprintjs.com/docs/" },
  { label: "Axios", href: "https://axios-http.com/docs/intro" },
  {
    label: "react-json-view-lite",
    href: "https://github.com/AnyRoad/react-json-view-lite",
  },
  { label: "Vite", href: "https://vitejs.dev/" },
];

export default function Footer() {
  return (
    <footer>
      <p>
        Made with 💖 by <a href="https://kevindmorris.vercel.app/">kevin</a>{" "}
        using{" "}
        {links.map((e, i) => (
          <React.Fragment key={e.href}>
            <a href={e.href}>{e.label}</a>
            {i === links.length - 2
              ? ", and "
              : i === links.length - 1
              ? ". "
              : ", "}
          </React.Fragment>
        ))}{" "}
        Hosted with <a href="https://vercel.com/">Vercel</a>. Version{" "}
        {__APP_VERSION__}.
      </p>
    </footer>
  );
}
