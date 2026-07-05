export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Hentry Fryzen. All rights reserved.</p>
      <p>Built with React, Motion, and production-focused backend mindset.</p>
      <button type="button" onClick={scrollToTop} data-cursor="link">
        Top ↑
      </button>
    </footer>
  );
}
