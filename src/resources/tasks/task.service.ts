/** @module TaskService */

import tasksRepo from './task.memory.repository';
import { taskGetFuncType, taskCreateFuncType, taskPutFuncType, taskDelFuncType, taskGetAllFuncType, taskUserNullByUserId, taskdelByBoardId } from './task.types'

/**
 * Returns all tasks from the database
 *
 * @returns {Promise<Task[]>} Array Tasks
 */
const getAll: taskGetAllFuncType = async boardId => tasksRepo.getAll(boardId);

/**
 * Returns task for id
 *
 * @param {string} id Task id
 * @returns {Promise<Task>|undefined} Object Task 
 */
const get: taskGetFuncType = async id => tasksRepo.get(id);

/**
 * Add new Task to DB
 * Returns new Task
 *
 * @param {Task} task new Task 
 * @returns {Promise<Task>} Object Task 
 */
const create: taskCreateFuncType = async task => tasksRepo.create(task);

/**
 * Changes Task properties by id
 * Returns the modified Task
 *
 * @param {string} id Task id 
 * @param {Task} task Object Task with modified parameters
 * @returns {Promise<Task>} Object Task 
 */
const put: taskPutFuncType = async (id, task) => tasksRepo.put(id, task);

/**
 * Delete Task by id
 *
 * @param {string} id Task id 
 */
const del: taskDelFuncType = async id => { tasksRepo.del(id) };

/**
 * Zeroes the UserId parameter for the user by the identifier in the task
 *
 * @param {string} userId User id 
 */
const setUserNullByUserId: taskUserNullByUserId = async userId => { tasksRepo.setNullByUserId(userId) };

/**
 * deletes the task containing the BoardId parameter equal to the incoming id
 *
 * @param {string} boardId Board id 
 */
const delByBoardId: taskdelByBoardId = async boardId => { tasksRepo.delByBoardId(boardId) };

export default {
  getAll,
  get,
  create,
  put,
  del,
  setUserNullByUserId,
  delByBoardId
};
