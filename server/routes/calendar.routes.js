const Calendar = require ("../controllers/calendar.controllers")

module.exports = function(app) {
    app.get("/api/calendar", Calendar.allCalendarContent)
    app.post("/api/calendar/create", Calendar.createCalendarContent)
    app.get("/api/calendar/entry/:id", Calendar.getOneEntry)
    app.put("/api/calendar/entry/:id", Calendar.updateEntry)
    app.delete('/api/calendar/:id/', Calendar.deleteEntry);
}