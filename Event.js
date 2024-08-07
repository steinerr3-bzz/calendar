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
    }

    updateIn(calendar) {
        //todo
    }
}