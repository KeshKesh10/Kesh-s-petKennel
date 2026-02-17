import React from 'react';

// TODO: Destructure the props you need here (header, image, etc.)
class ChildComponent extends React.Component {

  constructor(props) {
    // todo add bindings etc to inititalize component and funcs
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    // calls parent method when button is clicked
    this.props.onAction(this.props.id);
  }
  
  render() {
    const { name, sadImage, happyImage, angryImage, status, mood } = this.props;
    
    // this part picks which image to show
    let currentImage = sadImage; // default to sad
    if (mood === 'happy') {
      currentImage = happyImage;
    }
    
    return (
      <div className="child-card">
        {/* TODO: 
          1. Add an <h2> for the header text 
          2. Add an <img> tag for the image
          3. Add a <p> tag for the content
          4. Add a <button> that fires the click event
        */}
        <h2>{name}</h2>
        
        <div className="pet-image-container">
          <img 
            src={currentImage} 
            alt={name}
            className="pet-image"
          />
        </div>
        
        <p className="pet-status">
          Status: <span className={mood === 'happy' ? "status-happy" : "status-sad"}>
            {status}
          </span>
        </p>
        
        <button 
          onClick={this.handleClick}
          className="interact-button"
        >
          {mood === 'happy' ? "Play More!" : "Feed & Play"}
        </button>
      </div>
    );
  }
}

export default ChildComponent;
