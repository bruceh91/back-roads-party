export default function (state=2, action) {
    switch(action.type) {
        case "CURRENT_USER_ID":
            console.log('CURRENT_USER_ID set')
            return action.payload;
        break;
    }
    return state;
}