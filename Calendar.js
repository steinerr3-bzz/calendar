export class Calendar {
    constructor() {}
    setup () {
        this.setupTimes();
    }

    setupTimes() {
        const header = $('<div></div>').addClass('colummHeader');
        const slots = $('<div></div>').addClass('slots');
        for (let hour = 0; hour < 24; hour++) {
            $('<div></div>')
                .attr('data-hour',hour)
                .addClass('time')
                .text(`${hour}:00 - ${hour+1}:00`)
                .appendTo(slots);
        }
        $('.dayTime').append(header).append(slots);
    }
}