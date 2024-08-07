import {generateId} from './helper.js'

export class Event {
    constructor(data) {
        this.id = data.id || generateId();
        this.title = data.title;
        this.start = data.start;
        this.end = data.end;
        this.prevDate = data.date;
        this.data = data.data;
        this.description = data.description;
        this.color = data.color;
    }

    isValidIn(calendar) {
        const newStart = $('#eventStart').val();
        const newEnd = $('#eventEnd').val();
        const newDate = $('#eventDate').val();
        if (calendar.events[newDate]) {
            const event = Object.values(calendar.events[newDate]).find(event => {
                event.id !== this.id && event.end > newStart && event.start < newEnd;
            });
            if (event) {
                $('#errors').text(`This collides with the event ${event.title} (${event.start} - ${event.end}).`
                );
                    return false;
            }
        }

        const duration=
            (new Date(`${newDate}T${newEnd}`).getTime() - new Date(`${newDate}T${newStart}`).getTime())/(1000*60);
            if (duration < 0) {
                $('#errors').text('The start cannot be after the end');
                return false;
            } else if (duration < 30) {
                $('#errors').text('Events cannot be under 30 minutes.');
                return false;
            }
            return true;

    }

    updateIn(calendar) {
        this.title = $('#eventTitle').val();
        this.start = $('#eventStart').val();
        this.end = $('#eventEnd').val();
        this.prevDate = this.date;
        this.date = $('#eventDate').val();
        this.description = $('#eventDescription').val();
        this.color = $('.color.active').attr('data-color');
        this.showIn(calendar);
        this.saveIn(calendar)
    }

    showIn() {
        //todo
        console.log('show event', this);
    }

    saveIn(calendar){
        if (this.prevDate && this.date != this.prevDate) {
            delete calendar.events[this.prevDate][this.id];
            if (Object.values(calendar.events[this.prevDate]).length === 0) {
                delete calendar.events[this.prevDate];
            }
        }
        if (!calendar.events[this.date]) {
            calendar.events[this.date] = {};
        }
        calendar.events[this.date][this.id] = this;
        console.log(calendar.events);
    }
}