const refs = {
    daysField: document.querySelector('[data-value="days"]'),
    hoursField: document.querySelector('[data-value="hours"]'),
    minsField: document.querySelector('[data-value="mins"]'),
    secsField: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    // таймер
    start() {
        let startTime = this.targetDate.getTime();
        const TIMER = 1000;

        setInterval(() => {
            if (startTime <= Date.now()) {
                return;

            } else {
                const currentTime = Date.now();
                const deltaTime = startTime - currentTime;
                const countdown = this.getTimeComponents(deltaTime);

                this.updateClockFace(countdown);
            }
        }, TIMER)
    };


    //интерфейс
    updateClockFace({ days, hours, mins, secs }) {
        refs.daysField.textContent = `${days}`;
        refs.hoursField.textContent = `${hours}`;
        refs.minsField.textContent = `${mins}`;
        refs.secsField.textContent = `${secs}`;
    }
    pad(value) {
        return String(value).padStart(2, '0')
    }

    //высчитывает сколько дней, часов, минут и секунд
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }
}

const countDownTimerNew = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Oct 30, 2021'),
});

countDownTimerNew.start();