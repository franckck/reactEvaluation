export const MESSAGE_UPDATE_CONTENT = 'MESSAGE_UPDATE_CONTENT';

export default function updateMessage(message) {
    return (dispath) => {
        dispath({
            type: MESSAGE_UPDATE_CONTENT,
            data: message,
        });
    }
}