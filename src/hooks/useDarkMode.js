import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('usingDarkMode', true)
    return [darkMode, setDarkMode]

}

export default useDarkMode;