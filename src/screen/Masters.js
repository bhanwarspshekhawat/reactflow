import React, { Component } from 'react'

class Masters extends Component {
    render() {
        return (
            <div className="Masters">
                <br />
                <p></p>
                <br />
                <div class="sidenav">
                    <p>Category</p>
                    <p> <select class="form2" aria-label="Default select example">
                        <option selected> General informaction </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select></p>

                    <p>  <select class="form2" aria-label="Default select example">
                        <option selected> KEM Details </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select></p>

                    <p><select class="form2" aria-label="Default select example">
                        <option selected> Change Details </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select></p>

                    <p> <select class="form2" aria-label="Default select example">
                        <option selected> Other Details </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select></p>
                </div>

                <div class="main">
                    <div className="ge">
                        <p>General informaction</p>
                    </div>
                    <br />
                    <div className="magr">
                        <p>CR Type   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">with CR</label>

                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">without CR</label>

                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">NO CR/NO KEM</label>

                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">NC</label></p>
                    </div>
                    <div className="magr5">
                        <p>KEM Number<input type="text" class="form" name="fname" placeholder="KEM Number" aria-label="Your name" /></p>
                    </div>

                    <div className="magr5">
                        <p>CR Number<input type="text" class="form" name="fname" placeholder="CR Number" aria-label="Your name" /></p>
                    </div>
                    <div className="magr5">
                        <p>NC Number<input type="text" class="form" name="fname" placeholder="NC Number" aria-label="Your name" /></p>
                    </div>
                    <div className="magr5">
                        <p>Descrition<input type="text" class="form" name="fname" placeholder="Descrition" aria-label="Your name" /></p>
                    </div>
                    <br />
                    <div className="ge">
                        <p>KEM Details</p>
                    </div>











                </div>





















            </div>
        )
    }
}
export default Masters