import {generateId} from './helper.js'

export class Event {
    constructor(data) {
        this.id = data.id || generateId();
        this.title = data.title;
        this.start = data.start;
        this.end = data.end;
        this.data = data.data;
        this.description = data.description;
        this.color = data.color;
    }

    isValidIn(calendar) {
        //todo
        console.log('test valid', this);
    }

    updateIn(calendar) {
        this.title = $('#eventTitle').val();
        this.start = $('#eventStart').val();
        this.end = $('#eventEnd').val();
        this.date = $('#eventDate').val();
        this.description = $('#eventDescription').val();
        this.showIn(calendar);
    }

    showIn() {
        //todo
        console.log('show event', this);
    }
}