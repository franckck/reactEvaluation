export const DESIGN_UPDATE_HIGHLIGHTED = 'DESIGN_UPDATE_HIGHLIGHTED';

export function updateHighlighted(highlighted) {
    return (dispatch) => {
        dispatch({
            type: DESIGN_UPDATE_HIGHLIGHTED,
            data: highlighted
        });
    }
}
