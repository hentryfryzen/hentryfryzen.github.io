const labels = {
  php: "php",
  laravel: "L",
  symfony: "Sf",
  postgres: "Pg",
  mysql: "my",
  docker: "Dk",
  code: "</>",
  azure: "Az",
  nginx: "Nx",
  apache: "Ap",
  git: "git",
  postman: "pm",
  swagger: "Sw",
};

export default function TechIcon({ icon, name }) {
  return (
    <span className={`app-icon app-icon--${icon}`} title={name}>
      {labels[icon] || name.slice(0, 2)}
    </span>
  );
}
