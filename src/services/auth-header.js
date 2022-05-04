export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("the user data ---",user);
    if (user && user.token) {
      // for Node.js Express back-end
      return { 'x-access-token': user.token };
      //  return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }