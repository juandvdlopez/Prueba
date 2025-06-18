import joi from 'joi';

const eventSchema = joi.object({
  tipo: joi.string().max(10).optional(),
  banda: joi.string().required(),
  evento: joi.string().valid('asignado', 'liberado').required()
}); 

export default eventSchema;