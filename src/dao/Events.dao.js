import eventModel from './models/Event.js';	


export default class Events {
    
    get = (params) =>{
        return eventModel.find(params);
    }

    getBy = (params) =>{
        return eventModel.findOne(params);
    }

    save = (doc) =>{
        return eventModel.create(doc);
    }

    update = (id,doc) =>{
        return eventModel.findByIdAndUpdate(id,{$set:doc})
    }

} 