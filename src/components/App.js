import { ThemeToggle } from "./ThemeToggle"

function ArrowUp({ mt }) {
  return (
    <a
      className={`position-absolute top-0 end-0 mt-${mt} btn icon-link icon-link-hover`}
      style={{
        "--bs-icon-link-transform": "translate3d(0, -.500rem, 0)",
        "--bs-btn-padding-x": "0",
        "--bs-btn-active-border-color": "transparent",
      }}
      href="#"
      tabIndex="-1"
    >
      <i className="bi bi-arrow-up text-secondary" aria-hidden="true"/>
    </a>
  )
}

function Section({id, icon, name, children}) {
  return (
    <div className="position-relative pt-5 border-top mt-5">
      <h3 id={id}>
        <i className={`bi bi-${icon} me-3`}/>
        {name}
      </h3>
      <ArrowUp mt="5"/>
      <p className="pt-3">
        {children}
      </p>
    </div>
  )
}

export function App() {
  return (
    <div className="container">

      <div className="navbar navbar-expand-sm border-bottom">
        <div className="navbar-toggler">
          <button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link d-flex fw-semibold pe-2" href="/">mbiemann.com</a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light pe-1" href="#profiles"><i className="bi bi-people"/><span className="ms-1 d-block d-sm-none d-md-block">Profiles</span></a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light pe-1" href="#certificates"><i className="bi bi-clipboard-check"/><span className="ms-1 d-block d-sm-none d-md-block">Certificates</span></a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light pe-1" href="#skills"><i className="bi bi-stars"/><span className="ms-1 d-block d-sm-none d-md-block">Skills</span></a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light pe-1" href="#apps"><i className="bi bi-code"/><span className="ms-1 d-block d-sm-none d-md-block">Apps</span></a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light pe-1" href="#portfolio"><i className="bi bi-kanban"/><span className="ms-1 d-block d-sm-none d-md-block">Portfolio</span></a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light" href="#contact"><i className="bi bi-envelope"/><span className="ms-1 d-block d-sm-none d-md-block">Contact</span></a></li>
          </ul>
        </div>
        <ThemeToggle/>
      </div>

      <div>
        <h1 className="mt-5 text-center">
          Marcell Biemann
        </h1>
        <p className="pt-3 text-center">
          Welcome to my <span className="fst-italic">(under construction!!)</span> website.
        </p>
      </div>

      <Section id="profiles" icon="people" name="Profiles">
        (wait for list of my profiles)
      </Section>

      <Section id="certificates" icon="clipboard-check" name="Certificates">
        (wait for list of certificates I took)
      </Section>

      <Section id="skills" icon="stars" name="Skills">
        (wait for list of skills I have)
      </Section>

      <Section id="apps" icon="code" name="Apps">
        (wait for list of apps I created)
      </Section>

      <Section id="portfolio" icon="kanban" name="Portfolio">
        (wait for list of projects I was envolved)
      </Section>

      <Section id="contact" icon="envelope" name="Contact">
        <ul>
          <li><a href="https://www.linkedin.com/in/mbiemann">LinkedIn</a></li>
          <li><a href="https://github.com/mbiemann">GitHub</a></li>
        </ul>
        (wait for more way to contact me)
      </Section>

      <div className="position-relative my-5 py-3 border-top">
        <ArrowUp mt="2"/>
        <p className="text-secondary">
          2023 mbiemann
        </p>
      </div>

    </div>
  )
}
