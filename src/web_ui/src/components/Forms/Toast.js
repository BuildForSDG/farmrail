import {toast} from 'react-toastify';

export const positions = {
    TOP_LEFT: toast.POSITION.TOP_LEFT,
    TOP_RIGHT: toast.POSITION.TOP_RIGHT,
    TOP_CENTER: toast.POSITION.TOP_CENTER,
    BOTTOM_LEFT: toast.POSITION.BOTTOM_LEFT,
    BOTTOM_RIGHT: toast.POSITION.BOTTOM_RIGHT,
    BOTTOM_CENTER: toast.POSITION.BOTTOM_CENTER
}

const defPosition = positions.TOP_CENTER

export default class Toast {
    success(message, position = defPosition) {
        toast.success(message, {
            position
        });
    }

    error(message, position = defPosition) {
        toast.error(message, {
            position
        });
    }

    warn(message, position = defPosition) {
        toast.warn(message, {
            position
        });
    }

    info(message, position = defPosition) {
        toast.info(message, {
            position
        });
    }
}
