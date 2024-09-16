const user = {
  id: 24,
  email: "aras@dicoding.com",
  name: "Arsy",
  nickname: "Aras",
  username: "aras123",
  password: "secret",
};

const { id, email } = user;
console.log(id);
console.log(email);

delete user.name;
console.log(user);
console.log(user["password"]);
