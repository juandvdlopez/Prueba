import userRepository from '../repository/UserRepository.js';


class UserService {
    
  async getAllUsers() {
    return userRepository.findAll(); // del genérico
  }

  async getUserById(id) {
    return userRepository.findById(id); // del genérico
  }

  async createUser(data) {

    // const existing = await userRepository.findByEmail(data.email);
    // if (existing) throw new Error('Email ya registrado');

    return userRepository.create(data); // implementado en concreto
  }

  async loginUser(data) {
    return await userRepository.loginUser(data);
   
  }
}

export default new UserService();