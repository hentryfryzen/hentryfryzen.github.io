export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Hentry Fryzen. All rights reserved.</p>
      <p>Built with React, Motion, and production-focused backend mindset.</p>
      <a href="#top" data-cursor="link">Top ↑</a>
    </footer>
  );
}
