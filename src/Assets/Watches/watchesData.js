import bluewatch from "./blue-watch.jpg"
import blackwatch from "./black-watch.jpg"
import silverwatch from "./silver-watch.jpg"
import leatherwatch from "./leather-strap-watch.jpg"

const brands = ["Rolex", "Cartier", "Tag-Heuer"]

const watches = [
    {
        id: "blue-watch",
        name: "Blue Watch",
        images : [bluewatch,bluewatch,bluewatch,bluewatch],
        price : "€1000",
        featured : true,
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        materials : {
            cadru : "Aluminiu A413",
            bratara : "Piele"
        },
        brand : brands[0]
    },
    {
        id: "black-watch",
        name: "Black Watch",
        images : [blackwatch,blackwatch,blackwatch,blackwatch,blackwatch],
        price : "€2000",
        featured : true,
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        materials : {
            cadru : "Aluminiu A413",
            bratara : "Piele"
        },
        brand : brands[0]
    },
    {
        id: "silver-watch",
        name: "Silver Watch",
        images : [silverwatch,silverwatch,silverwatch,silverwatch],
        price : "€1500",
        featured : false,
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        materials : {
            cadru : "Aluminiu A413",
            bratara : "Piele"
        },
        brand : brands[1]
    },
    {
        id: "leather-strap-watch",
        name : "Leather Strap Watch",
        images : [leatherwatch, leatherwatch, leatherwatch, leatherwatch, leatherwatch, leatherwatch],
        price : "€12000",
        featured : true,
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        materials : {
            cadru : "Aluminiu A413",
            bratara : "Piele"
        },
        brand : brands[2]
    }
]

export {watches, brands}