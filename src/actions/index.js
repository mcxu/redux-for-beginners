// export const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// export const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

export const adjustCounter = (actionType = 'INCREMENT', number = 1) => {
    if(actionType !== 'INCREMENT') { actionType = 'DECREMENT'; }

    return {
        type: actionType,
        payload: number
    }
}
