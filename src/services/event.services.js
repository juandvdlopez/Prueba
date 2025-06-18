import eventRepository from '../repository/EventRepository.js';

class EventService {

    async findbyId(id){
        return eventRepository.findById(id);
    }

    async createEvent(data){
        return eventRepository.create(data);
    }


} 


export default new EventService();