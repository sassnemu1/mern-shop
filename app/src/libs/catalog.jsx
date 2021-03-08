export const getCatalogServer = async (url) => {
    try {
        const res = await fetch(url)

        if (!res.ok) {
            console.error('Server has error.', res.status)
            return false
        }
        
        return await res.json()
    } catch (error) {
        console.error('Server has error.', error.message)
        return false
    }
}