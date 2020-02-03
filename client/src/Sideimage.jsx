import React from 'react';

class SideImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let selected = '';
    if (this.props.active === this.props.name) {
      selected += 'selected';
    }
    let imageUrl = this.props.imageUrl;
    return (
      <figure id={this.props.name} className={selected} onClick={() => this.props.sideBarClick(imageUrl, this.props.name)}>
        <img src={imageUrl} alt="Gallery image 3" className="image"></img>
      </figure>
    );
  }
}

export default SideImage;