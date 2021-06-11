const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
        );
    return Promise.resolve(updatedUsers);
    
};

const loggerUser = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(loggerUser);
toggleUserState(users, 'Lux').then(loggerUser);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */