/* --------------------------------------- Arms --------------------------------------- */
const leftArm = document.querySelector("#capybara-left");
const rightArm = document.querySelector("#capybara-right");

const arms = [leftArm, rightArm];
let nextArm = 0;

function tapPaws(event) {
    if (event.type === "keydown") {
        if (event.repeat || event.ctrlKey || event.altKey || event.metaKey) {
            return;
        }
        
        if (event.key.length !== 1 && event.key !== "Enter" && event.key !== "Backspace") {
            return;
        }
    }

    const arm = arms[nextArm];
    nextArm = 1 - nextArm;

    arm.animate(
        [
            { transform: "rotate(-45deg)" },
            { transform: "rotate(-90deg)" },
            { transform: "rotate(-45deg)" }
        ],
        {
            duration: 200,
            easing: "ease-in-out"
        }
    );
}

window.addEventListener("keydown", tapPaws);
window.addEventListener("click", tapPaws)

/* --------------------------------------- Iris --------------------------------------- */

const iris = document.querySelector("#capybara-iris");
const eye = document.querySelector("#capybara-eye");

function moveIris(event) {
    const eyeRect = eye.getBoundingClientRect();
    const irisRect = iris.getBoundingClientRect();

    const irisX = irisRect.left + irisRect.width / 2;
    const irisY = irisRect.top + irisRect.height / 2;

    const dx = event.clientX - irisX;
    const dy = event.clientY - irisY;

    const angle = Math.atan2(dy, dx);

    const maxX = (eyeRect.width - irisRect.width) / 2;
    const maxY = (eyeRect.height - irisRect.height) / 2;

    const moveX = Math.cos(angle) * Math.min(4, maxX);
    const moveY = Math.sin(angle) * Math.min(4, maxY);

    iris.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

document.addEventListener("mousemove", moveIris);