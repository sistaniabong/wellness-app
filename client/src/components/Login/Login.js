import { setLogVerbosity } from "@apollo/client";



const Login = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    // opens modal
  const showModal = () => {
    setIsOpen(true);
  };

  // closes modal
  const hideModal = () => {
    setIsOpen(false);
  };

  // handles login submit btn
  const handleloginbtn = () => {
    event.preventDefault();
  }
  
return (
    <div className="login">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" class="m-2 waves-effect waves-light btn-large login" style="border-radius: 10px;" onclick={showModal}>Login</button>
                    {/* <!-- login modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hideModal}></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Username</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                              </div>
                              <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Login</button>
                          </div>
                        </div>
                      </div>
                    </div>
    </div>
);
};

export default Login;

