import { useEffect, useState } from "react"

export function App() {
  const [theme, setTheme] = useState("")

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
    console.log("running updateTheme...")

    let newTheme;
    if ("theme" in localStorage)
      newTheme = "manual-" + localStorage.theme
    else
      newTheme = "auto-" + (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

    console.log("newTheme = " + newTheme)

    if (!(newTheme === theme)) {
      setTheme(newTheme)
      document.documentElement.setAttribute("data-bs-theme", newTheme.split("-")[1])
    }
  }

  useEffect(() => {
    console.log("running onUseEffect...")

    updateTheme()

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateTheme)
    return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", updateTheme)
  }, [theme])

  return (
    <div className="container text-center">

      <h1 className="my-4">
        Marcell Biemann
      </h1>

      <p className="mb-4">
        Welcome to my website.
      </p>

      <button className={`btn me-2 ${theme === "manual-light"?"active":""}`} onClick={onLightClick}><i className={`bi bi-sun${theme.includes("-light")?"-fill":""}`}/> Light</button>
      <button className={`btn me-2 ${theme === "manual-dark"?"active":""}`} onClick={onDarkClick}><i className={`bi bi-moon${theme.includes("-dark")?"-fill":""}`}/> Dark</button>
      <button className={`btn ${theme.includes("auto-")?"active":""}`} onClick={onAutoClick}><i className={`bi bi-gear${theme.includes("auto-")?"-fill":""}`}/> Auto</button>

    </div>
  )
}