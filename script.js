
// const iPGeolocation = async () => {
//     try {
//         const response = await fetch("https://api.ipify.org?format=json")
//         const data = await response.json()
//         console.log(data);
//         return data

//     } catch (error) {
//         console.log("error found");
//     }
// }
// iPGeolocation()

// fetch country info
async function getcountryInfo(){
    try {
        const ipAdress = document.getElementById("ipAdress").value
        const response = await fetch(`https://ipapi.co/${ipAdress}/json/`);
        const data = await response.json();
        console.log(data);
        
        const userIp = document.getElementById("userIp")
        const countryName = document.getElementById("countryName");
        const cityName = document.getElementById("cityName");
        const ISP = document.getElementById("ISP")

        userIp.textContent = `Your IPV6 : ${data.ip}`
        countryName.textContent = `Country Info: ${data.country_name}`;
        cityName.textContent = `City Info: ${data.city}`;
        ISP.textContent = `ISP : ${data.org}`
    } catch (error) {
        console.log("error (ridi)");
    }
}

getcountryInfo()