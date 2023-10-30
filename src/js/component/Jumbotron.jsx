import React from "react";

export const Jumbotron = () =>{
    return(
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5 bg-secondary rounded-3">
                <h1 className="display-5 fw-bold">A warm welcome!</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum tristique arcu, eu suscipit libero finibus sed. Proin nec nulla id tortor efficitur luctus eget eget augue. Nam tristique dapibus lacus, sit amet tristique dui posuere ac. </p>
                <button className="btn btn-light btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    )
}