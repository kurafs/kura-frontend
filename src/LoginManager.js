export const login = (username, password, callback) => {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", `http://localhost:3000/login?username=${username}&password=${password}`);
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      callback(JSON.parse(xhr.response));
    }
  };
  xhr.send();
};
export default login