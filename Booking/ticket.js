let totalTime = 5 * 60;

function createDigits(id, max) {
    let container = document.getElementById(id);
    let inner = document.createElement("div");
    inner.className = "digit-inner";

    for (let i = 0; i <= max; i++) {
        let div = document.createElement("div");
        div.className = "num";
        div.innerText = i.toString().padStart(2, '0');
        inner.appendChild(div);
    }

    container.appendChild(inner);
}

createDigits("min", 59);
createDigits("sec", 59);

/* ✅ set correct start */
move("min", 5);
move("sec", 0);

function updateTimer() {
    if (totalTime <= 0) {
        move("min", 0);
        move("sec", 0);
        clearInterval(timerInterval);
        return;
    }

    let min = Math.floor(totalTime / 60);
    let sec = totalTime % 60;

    move("min", min);
    move("sec", sec);

    totalTime--;
}

function move(id, value) {
    let inner = document.querySelector(`#${id} .digit-inner`);
    let offset = value * 55; // ✅ correct direction
    inner.style.transform = `translateY(-${offset}px)`;
}

updateTimer();
let timerInterval = setInterval(updateTimer, 1000);