function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        // setStatus(`Field ${label} is not formatted correctly`);
        confirm(`Field ${label} is not formatted correctly`);
        return false;
      }
      return true;
  }

  function handleLogin(){
    console.log(email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    let itemExists = ctx.users.filter(item => item.email === email);
    console.log("valid", itemExists)
    if (itemExists.length > 0) 
      return true;
    else {
      setStatus("Account does not exist.  Create a new account");
      return false
    }
  }    

  return (
      <div
        className={`container py-5 h-100`}
      </div>
        <div className="row">
                Email<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                {/* <button type="submit" className="btn btn-light" onClick={createAccount}>Login</button> */}
        </div>
      </div>
  )
}