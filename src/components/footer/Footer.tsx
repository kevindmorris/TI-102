import "./Footer.style.css";

export default function Footer() {
  return (
    <footer>
      <p>
        Made with 💖 by <a href="https://kevindmorris.vercel.app/">kevin</a>{" "}
        using <a href="https://react.dev/">React</a> and{" "}
        <a href="https://webpack.js.org/">Webpack</a>. Hosted with{" "}
        <a href="https://pages.github.com/">GitHub Pages</a>. Version{" "}
        {__APP_VERSION__}.
      </p>
    </footer>
  );
}
