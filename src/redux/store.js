import profileReducer from "./profielReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        dialogsData: [
            [{id: 1, name: 'Doctor Evil', text: ['One million dollars'], imgAlt: 'evil', 
            imgSrc: 'https://pp.userapi.com/eexeiSowSIdc7K5OWxUc-qVzbU-4q2I0wF-lxA/lQBl6AZVRfo.jpg?ava=1'},
            {id: 2, name: 'Freddy', text: ['I am your nightmare', 'ooo'], imgAlt: 'fire', 
            imgSrc: 'https://avatarfiles.alphacoders.com/808/thumb-80867.jpg'},
            {id: 3, name: 'Jason', text: ['You are so ugly'], imgAlt: 'friday', 
            imgSrc: 'https://avatarfiles.alphacoders.com/154/154232.png'},
            {id: 4, name: 'Chigurh', text: ['Cross or pile?'], imgAlt: 'pure evil', 
            imgSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e0c5a26-a646-44ed-b57f-2a254820730e/d58caox-224bc632-4e9c-446d-b148-a5b1021e278d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlMGM1YTI2LWE2NDYtNDRlZC1iNTdmLTJhMjU0ODIwNzMwZVwvZDU4Y2FveC0yMjRiYzYzMi00ZTljLTQ0NmQtYjE0OC1hNWIxMDIxZTI3OGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3slbzxV2RgD_-eTO2sSBiCgWhgCIdAKVfVdnfBKs2CU'}],
            {currentText : ''}
        ],
        postsData: [
            {id: 1, text: 'This is first message', likesCount: 0},
            {id: 2, text: 'This is second message', likesCount: 23},
        ]},
        
        getState () {
            return this._state;
        },
        subscribe (observer) {
            this.rerenderEntireTree = observer;
        },
        dispatch (action) {
            this._state.postsData = profileReducer(this._state.postsData, action);
            this._state.dialogsData[1].currentText = dialogsReducer(
                                  this._state.dialogsData[1].currentText, action);
            this.rerenderEntireTree();
        }
    }

export default store;