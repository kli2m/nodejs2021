/** @module UserService */

const usersRepo = require('./user.memory.repository');
const taskService = require('../tasks/task.service');
const User = require('./user.model');

/**
 * Returns all users from the database
 *
 * @returns {Promise<User[]>} Array Users
 */
const getAll = async () => usersRepo.getAll();

/**
 * Returns user for id
 *
 * @param {string} id User id
 * @returns {Promise<User>|undefined} Object User 
 */
const get = async id => usersRepo.get(id);

/**
 * Add new User to DB
 * Returns new User
 *
 * @param {User} user new User 
 * @returns {Promise<User>} Object User 
 */
const create = async user => usersRepo.create(user)

/**
 * Changes user properties by id
 * Returns the modified user
 *
 * @param {string} id User id 
 * @param {User} user Object User with modified parameters
 * @returns {Promise<User>} Object User 
 */

const put = async (id, user) => usersRepo.put(id, user);

/**
 * Delete user by id
 * Delete all tasks user by id
 *
 * @param {string} id User id 
 */
const del = async id => {
  taskService.setUserNullByUserId(id);
  usersRepo.del(id);
}

module.exports = { getAll, get, create, put, del };
