export const COLORS = {
    primary: "#1473E6",
    secondary: "#1473E6",
    white: '#FFFFFF',
    gray: 'gray'
}

export const CONFIG = {
    baseUrl: "https://www.gov.uk/",
}

export const getAssetPath = (name) => {
    return { uri: CONFIG.baseUrl + name }
}