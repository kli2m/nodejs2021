/** @module BoardMemoryRepository */

import { BoardsDB } from '../../common/myDB';
import Board from './board.model';
import { boardGetFuncType, boardCreateFuncType, boardPutFuncType, boardDelFuncType } from './board.types'

/**
 * Returns all boards from the database
 *
 * @returns {Board[]} Array Objects Board
 */
const getAll = async (): Promise<Board[]> => BoardsDB;

/**
 * Returns board for id
 *
 * @param {string} id Board id
 * @returns {Board|undefined} Object Board 
 */
const get: boardGetFuncType = async id => BoardsDB.find(board => board.id === id);

/**
 * Add new Board to DB
 * Returns new Board
 *
 * @param {Board} board new Board 
 * @returns {Board} Object Board 
 */
const create: boardCreateFuncType = async board => {
    const newBoard = new Board(board)
    BoardsDB.push(newBoard);
    return newBoard
};

/**
 * Changes Board properties by id
 * Returns the modified Board
 *
 * @param {string} id Board id 
 * @param {Board} board Object Board with modified parameters
 * @returns {Board} Object Board 
 */
const put: boardPutFuncType = async (id, board) => {
    const index = BoardsDB.findIndex(currentBoard => currentBoard.id === id);
    BoardsDB.splice(index, 1, new Board(board))
    return BoardsDB[index]
}

/**
 * Delete Board by id
 *
 * @param {string} id Board id 
 */
const del: boardDelFuncType = async id => {
    const index = BoardsDB.findIndex(currentBoard => currentBoard.id === id);
    BoardsDB.splice(index, 1)
};

export default { getAll, get, create, put, del };
