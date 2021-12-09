export const getRegistrationForm = async (data) => {
    try {
        const res = await fetch("http://localhost:5000/registr/", { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await res.json();

        alert(result.message);
    } catch (error) {
        alert(error.message)
    }
}