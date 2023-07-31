import React, { Component } from 'react';


export default class LichChieuItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3">
        <div className="card">
          <img className="card-img-top" src={movie.hinhAnh} alt />
          <div className="card-body">
            <h5 className="card-title">{movie.moTa.length > 30 ? movie.moTa.substr(0,30) + '...' : movie.moTa}</h5>
          </div>
        </div>
      </div>
    )
  }
}
