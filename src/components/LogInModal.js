function LogInModal() {
  return (
    <div>
      <div className="log-in">
        <form>
          <label for="name">User Name : </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name ... "
          ></input>

          <label for="password">Password : </label>

          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          ></input>

          <label for="rememberMe"> remember me </label>

          <input type="checkbox" name="rememberMe" id="rememberMe"></input>

          <button type="submmit">LogIn</button>

          <p>
            click here if you forget your <a href="#">Password</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogInModal;
