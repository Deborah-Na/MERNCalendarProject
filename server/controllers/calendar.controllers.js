const {Calendar}  = require('../models/calendar.models')

module.exports.allCalendarContent =(request, response)=>{
    Calendar.find().collation({locale:'en',strength: 2}).sort({name:1})

    .then(calendar => response.json(calendar))
    .catch(err=> response.json(err))
}

module.exports.createCalendarContent = (request, response) => {
    Calendar.create(request.body)
        .then(calendar => response.json(calendar))
        .catch(err => response.status(400).json(err))
}

module.exports.getOneEntry = (request, response)=>{
    Calendar.findById(request.params.id)
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err))
}

module.exports.updateEntry = (request, response)=> {
    Calendar.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators: true})
    // Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
    .then(updatedCalendar => response.json(updatedCalendar))
    .catch(err => response.status(400).json(err))
}

module.exports.deleteEntry = (request, response)=>{
    Calendar.findByIdAndDelete(request.params.id)
    .then(deleteResult => response.json(deleteResult))
    .catch(err => response.status(400).json(err))
}

