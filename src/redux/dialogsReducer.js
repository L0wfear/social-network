const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let images = ['https://pp.userapi.com/eexeiSowSIdc7K5OWxUc-qVzbU-4q2I0wF-lxA/lQBl6AZVRfo.jpg?ava=1', 'https://avatarfiles.alphacoders.com/808/thumb-80867.jpg', 'https://avatarfiles.alphacoders.com/154/154232.png', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e0c5a26-a646-44ed-b57f-2a254820730e/d58caox-224bc632-4e9c-446d-b148-a5b1021e278d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlMGM1YTI2LWE2NDYtNDRlZC1iNTdmLTJhMjU0ODIwNzMwZVwvZDU4Y2FveC0yMjRiYzYzMi00ZTljLTQ0NmQtYjE0OC1hNWIxMDIxZTI3OGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3slbzxV2RgD_-eTO2sSBiCgWhgCIdAKVfVdnfBKs2CU'];

let initialState = [
    {
        id: 1, name: 'Doctor Evil', text: ['One million dollars'], imgAlt: 'evil',
        imgSrc: images[0]
    },
    {
        id: 2, name: 'Freddy', text: ['I am your nightmare', 'ooo'], imgAlt: 'fire',
        imgSrc: images[1]
    },
    {
        id: 3, name: 'Jason', text: ['You are so ugly'], imgAlt: 'friday',
        imgSrc: images[2]
    },
    {
        id: 4, name: 'Chigurh', text: ['Cross or pile?'], imgAlt: 'pure evil',
        imgSrc: images[3]
    }
];

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            {
               return state.map((u) => 
                {   
                    if (u.id === +action.userID) {
                        return {...u, text: [...u.text, [action.body.message]]}
                    }
                    return u
                });
            }
        default: {
            let stateCopy = [...state];
            return stateCopy;
        }
    }
}

export default dialogsReducer;