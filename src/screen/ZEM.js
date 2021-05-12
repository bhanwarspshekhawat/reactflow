import React, { Component } from 'react'

class ZEM extends Component {
    render() {
        return (
            <div className="zem">
                <div className="ge">
                    <p>General informaction</p>
                </div>
                <br />
                <div className="magr">
                    <p>ZEM Type <select class="form" aria-label="Default select example">
                        <option selected> select </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select></p>
                </div>
                <div className="ge">
                    <p>ZEM Details</p>
                </div>
                <br />
                <div className="col1">
                    <div className="magr1">
                        <p>ZEM no.<input type="text" class="form" name="fname" aria-label="Your name" /></p>
                    </div>
                    <div className="magr1">
                        <p>Part-no.<input type="text" class="form" name="fname" placeholder="Enter valu" aria-label="Your name" /></p>
                    </div>
                    <div className="magr1">
                        <p>Co.ZEM <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>Market <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>Models<select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>

                    <div className="magr1">
                        <p>Supplier<input type="text" class="form" name="fname" aria-label="Your name" /></p>
                    </div>
                    <div className="col1">
                        <label for="exampleFormControlTextarea1" class="label">Remark</label>
                        <textarea class="control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="magr1">
                        <p>Rele Date<input type="text" class="form" name="fname" placeholder="dd/mm/yyyy" aria-label="Your name" /></p>
                    </div>
                    <div className="magr1">
                        <p>Segment  <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                    <div className="magr1">
                        <p>Source  <select class="form" aria-label="Default select example">
                            <option selected> select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></p></div>
                </div>
                <div className="ge">
                    <p>Other Details</p>
                </div>
                <br />
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
export default ZEM