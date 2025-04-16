import { createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    const handleToggleTheme = () => {
        return setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    }
    return (
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}


// creating a component

export const DarkLight = () => {
    const { theme, handleToggleTheme } = use(ThemeContext)
    return (
        <div className={`min-h-screen flex flex-col items-center justify-center p-8 ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
            <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
                Dark Light Mode Website
            </h1>
            <p className="text-xl mb-8">Welcome to React</p>
            <button className={`rounded-md mt-4 p-4 text-white font-bold transition-colors duration-300 ${theme === 'dark' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-green-500 hover:bg-green-700'
                }`}
                onClick={handleToggleTheme}
            >
                {theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    )
}