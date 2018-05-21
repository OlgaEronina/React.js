export const date = document.querySelector('.showDate');
date.onclick = function () {
    this.ev = document.createElement('p');
    this.ev.innerHTML = `Current date is ${new Date()}`;
    document.body.appendChild(this.ev);
};

