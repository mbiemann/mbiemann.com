import { useState, useEffect } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState("")

  function onThemeClick() {
    if (theme.includes("-light"))
      onDarkClick()
    else
      onLightClick()
  }

  function onLightClick() {
    localStorage.theme = "light"
    updateTheme()
  }

  function onDarkClick() {
    localStorage.theme = "dark"
    updateTheme()
  }

  function onAutoClick() {
    localStorage.removeItem("theme")
    updateTheme()
  }

  function updateTheme() {
    let newTheme;
    if ("theme" in localStorage)
      newTheme = "manual-" + localStorage.theme
    else
      newTheme = "auto-" + (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

    if (!(newTheme === theme)) {
      setTheme(newTheme)
      document.documentElement.setAttribute("data-bs-theme", newTheme.split("-")[1])
    }
  }

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateTheme)

    updateTheme()

    return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", updateTheme)
  }, [theme])

  return (
    <div className="btn-group position-absolute top-0 end-0 mt-2">
      <button className="btn" onClick={onThemeClick}>
        <i className={`bi bi-${theme.includes("-light") ? "sun" : "moon"}${theme.includes("manual-") ? "-fill" : ""}`} />
        <span className="ms-2 visually-hidden">Theme</span>
      </button>
      <button className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li><button className={`dropdown-item me-2 ${theme === "manual-light" ? "active" : ""}`} onClick={onLightClick}><i className={`bi bi-sun${theme.includes("-light") ? "-fill" : ""}`} /> Light</button></li>
        <li><button className={`dropdown-item me-2 ${theme === "manual-dark" ? "active" : ""}`} onClick={onDarkClick}><i className={`bi bi-moon${theme.includes("-dark") ? "-fill" : ""}`} /> Dark</button></li>
        <li><button className={`dropdown-item ${theme.includes("auto-") ? "active" : ""}`} onClick={onAutoClick}><i className={`bi bi-gear${theme.includes("auto-") ? "-fill" : ""}`} /> Auto</button></li>
      </ul>
    </div>
  )
}