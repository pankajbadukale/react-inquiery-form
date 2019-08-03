import { ADD, LIST } from './constants';

export function add(payload) {
    return {type: ADD, payload};
}

export function list() {
    return {type: LIST};
}
