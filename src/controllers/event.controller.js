import validateEvent from '../utils/validate.utils.js';
import eventSchema from '../dao/models/Event.js';
import eventService from '../services/event.services.js';

const createEvent = async(req,res,next)=>{
    console.log('entró al createEvent');
    try{
        //await validateEvent(eventSchema, req.body);
        await eventService.createEvent(req.body);
        res.send('Evento creado con éxito')
    }catch(error){
        next(error)

    }

} 

export default {createEvent} ;
