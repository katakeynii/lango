"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor(aggregateType, aggregateId, eventType, eventId, eventData, dispatcherType, dispatcherId) {
        this.aggregateType = aggregateType;
        this.aggregateId = aggregateId;
        this.eventType = eventType;
        this.eventId = eventId;
        this.eventData = eventData;
        this.dispatcherType = dispatcherType;
        this.dispatcherId = dispatcherId;
    }
}
exports.Event = Event;
//# sourceMappingURL=Event.js.map