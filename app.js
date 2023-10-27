const data = [
    {
        "id": 1,
        "name": "John Mugabo",
        "type": "doctor",
        "specialty": "Family Medicine",
        "insurance": ["RAMA"],
        "address": "KN 3 Ave, Kigali",
        "phone": "0781234567"
    },
    {
        "id": 2,
        "name": "Kibagabaga Hospital",
        "type": "hospital",
        "services": ["emergency", "surgery"],
        "insurance": ["RAMA", "MMI"],
        "address": "KN 67 St, Gasabo, Kigali",
        "phone": "0788765432"
    },
    {
        "id": 3,
        "name": "Mary Johnson",
        "type": "doctor",
        "specialty": "Pediatrics",
        "insurance": ["RAMA"],
        "address": "KN 5 Rd, Nyarugenge, Kigali",
        "phone": "0788554321"
    }
];

const searchInput = document.getElementById("searchInput");
const providerType = document.getElementById("providerType");
const insurance = document.getElementById("insurance");
const resultsList = document.getElementById("results");

function filterProviders() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedProviderType = providerType.value;
    const selectedInsurance = insurance.value;

    const filteredProviders = data.filter(provider => {
        const nameMatch = provider.name.toLowerCase().includes(searchTerm);
        const typeMatch = selectedProviderType === "" || provider.type === selectedProviderType;
        const insuranceMatch = selectedInsurance === "" || provider.insurance.includes(selectedInsurance);
        return nameMatch && typeMatch && insuranceMatch;
    });

    displayResults(filteredProviders);
}

function displayResults(providers) {
    resultsList.innerHTML = "";

    if (providers.length === 0) {
        resultsList.innerHTML = "<li class='list-group-item'>No providers found.</li>";
        return;
    }

    providers.forEach(provider => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.innerHTML = `
            <h3>${provider.name}</h3>
            <p>Type: ${provider.type}</p>
            <p>Specialty: ${provider.specialty || "N/A"}</p>
            <p>Address: ${provider.address}</p>
            <p>Insurance: ${provider.insurance.join(", ")}</p>
        `;
        resultsList.appendChild(listItem);
    });
}

searchInput.addEventListener("input", filterProviders);
providerType.addEventListener("change", filterProviders);
insurance.addEventListener("change", filterProviders);

// Initial display of all providers
filterProviders();
