export const getUsersSelector = (state) => {
    return state.usersData.users;
}

export const getPageSizeSelector = (state) => {
    return state.usersData.pageSize;
}

export const getTotalCountSelector = (state) => {
    return state.usersData.totalCount;
}

export const getCurrentPageSelector = (state) => {
    return state.usersData.currentPage;
}

export const getIsFollowingInProgressSelector = (state) => {
    return state.usersData.isFollowingInProgress;
}
