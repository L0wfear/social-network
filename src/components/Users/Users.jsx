import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let images = ['https://pp.userapi.com/eexeiSowSIdc7K5OWxUc-qVzbU-4q2I0wF-lxA/lQBl6AZVRfo.jpg?ava=1', 'https://avatarfiles.alphacoders.com/808/thumb-80867.jpg', 'https://avatarfiles.alphacoders.com/154/154232.png', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e0c5a26-a646-44ed-b57f-2a254820730e/d58caox-224bc632-4e9c-446d-b148-a5b1021e278d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlMGM1YTI2LWE2NDYtNDRlZC1iNTdmLTJhMjU0ODIwNzMwZVwvZDU4Y2FveC0yMjRiYzYzMi00ZTljLTQ0NmQtYjE0OC1hNWIxMDIxZTI3OGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3slbzxV2RgD_-eTO2sSBiCgWhgCIdAKVfVdnfBKs2CU'];
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let arr = [];

    for (let i = (props.currentPage <= 5 ? 1 : props.currentPage + 5 > pagesCount ? pagesCount - 9 : props.currentPage - 5);
        i <= (props.currentPage <= 5 ? 10 : props.currentPage + 5 > pagesCount ? pagesCount : props.currentPage + 4); i++) {
        arr.push(i);
    }
    return (
        <div className={classes.messages}>
            <div className={classes.pagination}>
                <div>
                    {arr.map(e => <span className=
                        {e === props.currentPage && classes.active}
                        onClick={() => { props.onPageChanged(e) }} >{e}</span>)}
                </div>
            </div>
            <div className={classes.allDialogs}>
                {props.users.map(d => <div id={d.id} key={d.id} className={classes.message} img={d.photos.small}>
                    <NavLink to={'profile/' + d.id}>
                        <img className={classes.photo} src={d.photos.small ? d.photos.small : images[3]} alt={d.imgAlt} />
                    </NavLink>
                    <div>
                        <div className={classes.name}>{d.name}</div>
                        <div className={classes.text}>text</div>
                        {d.followed ? <button disabled = {props.isFollowingInProgress.some(id => id === d.id)} onClick={() => {
                            props.unfollow(d.id);
                        }}> unfollow
                        </button> :
                        <button disabled = {props.isFollowingInProgress.some(id => id === d.id)} onClick={() => {
                            props.follow(d.id);
                        }}> follow
                        </button>}
                    </div>
                </div>
                )}
            </div>

        </div>
    );
}

export default Users;

// [
//     {
//         id: 1, name: 'Doctor Evil', followed: true, text: ['One million dollars'], imgAlt: 'evil',
//         imgSrc: images[0]
//     },
//     {
//         id: 2, name: 'Freddy', followed: true, text: ['I am your nightmare', 'ooo'], imgAlt: 'fire',
//         imgSrc: images[1]
//     },
//     {
//         id: 3, name: 'Jason', followed: true, text: ['You are so ugly'], imgAlt: 'friday',
//         imgSrc: images[2]
//     },
//     {
//         id: 4, name: 'Chigurh', followed: true, text: ['Cross or pile?'], imgAlt: 'pure evil',
//         imgSrc: images[3]
//     }]