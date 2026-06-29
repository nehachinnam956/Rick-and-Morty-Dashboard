async function spoki() {

    const pokemon = document.getElementById("pokiname").value.toLowerCase().trim();

    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (!response.ok) {
            throw new Error("Pokemon not found!");
        }

        const data = await response.json();

        document.getElementById("pokien").textContent =
            data.name;

        document.getElementById("pokimg").src =
            data.sprites.other["official-artwork"].front_default;

        document.getElementById("poktype").textContent =
            "Type : " + data.types[0].type.name;

        document.getElementById("pokheight").textContent =
            "Height : " + data.height;

        document.getElementById("pokweight").textContent =
            "Weight : " + data.weight;

    }
    catch(err){

        document.getElementById("pokien").textContent = err.message;
        document.getElementById("pokimg").src = "";
        document.getElementById("poktype").textContent = "";
        document.getElementById("pokheight").textContent = "";
        document.getElementById("pokweight").textContent = "";

    }

}