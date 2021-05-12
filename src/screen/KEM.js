import React, { Component } from 'react'

class KEM extends Component {
    render() {
        return (
            <div className="kem">
                <div className="ge">
                    <p>General informaction</p>
                </div>
                <br />
                <div className="magr">
                    <p>CR Type <select class="form" aria-label="Default select example">
                        <option selected> select </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select></p>
                    <p>Descrition<input type="text" class="form" name="fname" placeholder="Your name" aria-label="Your name" /></p>
                </div>
                <br />
                <div className="ge">
                    <p>KEM Details</p>
                </div>
                <br />
                <div className="col1">
                    <div className="magr1">
                        <p>KEM no.<input type="text" class="form" name="fname" aria-label="Your name" /></p>
                    </div>
                    <div className="magr1">
                        <p>Market <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>Project  <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>child part<select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>KEM Type <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>Co KEM  <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>Segment <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>Affected<input type="text" class="form" name="fname" placeholder="Please enter first 3 digits" aria-label="Your name" /></p>
                    </div>
                </div>


                <div className="magr2">
                    <p> Affected<br /> Baumaster
<input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Refer Add/ Del List</label>
                    </p>
                </div>
                <br />
                <div className="ge">
                    <p>Change Details</p>
                </div>
                <div className="col1">
                    <div className="magr1">
                        <p>part change <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>ISRL <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>VIN Req<select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>Release Date<input type="text" class="form" name="fname" placeholder="dd/mm/yyyy" aria-label="Your name" /></p>
                    </div>
                    <br />
                    <div className="magr1">
                        <p>SAP Bom<select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>PG Bom <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>VIN  no.<input type="text" class="form" name="fname" aria-label="Your name" /></p>
                    </div>
                    <div className="magr1">
                        <p>Im month<input type="text" class="form" name="fname" placeholder="dd/mm/yyyy" aria-label="Your name" /></p>
                    </div>

                </div>
                <div className="ge">
                    <p>Other Details</p>
                </div>
                <div className="col1">
                    <label for="exampleFormControlTextarea1" class="label">Remark</label>
                    <textarea class="control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <p>Add Attechment<i class="fa fa-plus-square red-color " ></i></p>


                </div>

                <div class="bullon">
                    <button type="submit" class="btn btn-primary">Submit</button></div>


            </div>
        )
    }
}
export default KEM;