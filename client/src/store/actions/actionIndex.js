export const selectUser = (user) => {
    console.log('clicked', user.name );
    return {
        type: "USER_SELECTED",
        payload: user
    }
};

export const hello = (id) => {
    console.log('HELLO', id);
    return {
        type: "CURRENT_USER_ID",
        payload: id
    }
}