// object data of page
const Spendings = [
    {
        "day": "mon",
        "amount": 17.45,
    },
    {
        "day": "tue",
        "amount": 34.91,
    },
    {
        "day": "wed",
        "amount": 52.36,
    },
    {
        "day": "thu",
        "amount": 31.07,
    },
    {
        "day": "fri",
        "amount": 23.39,
    },
    {
        "day": "sat",
        "amount": 43.28,
    },
    {
        "day": "sun",
        "amount": 25.48,
    }
]

// Draw graph and Variables
const cyan = "#76B5BC";

let container = document.getElementById("daysContainer");

Spendings.forEach(spen => {
    const column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);

    const bar = document.createElement("div");
    bar.classList.add("height-bar");
    column.appendChild(bar);

    const rate = document.createElement("div");
    rate.classList.add("bar");
    bar.appendChild(rate);
    rate.setAttribute("data-Stat", "$" + spen.amount);

    const day = document.createElement("div")
    day.classList.add("day");
    column.appendChild(day)
    day.innerText = spen.day;

    bar.style.height = "120px";
    barHeight = spen.amount * 2;
    rate.style.height = barHeight + "%";

    if (barHeight >= 100) {
        // rate.setAttribute("id", "max");
        rate.style.backgroundColor = cyan;
    }

});
// document.getElementById("max").style.backgroundColor = "lightblue";
