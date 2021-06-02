import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('usingDarkMode', true)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return [darkMode, toggleDarkMode]

}