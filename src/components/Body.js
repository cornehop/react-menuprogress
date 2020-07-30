import React from 'react';
import story from '../content/story.json';
import '../styles/Body.scss';

class Body extends React.Component {
  render() {
    const { onScroll } = this.props;
    const { paragraphs } = story;
    return (
      <div className="body-content" onScroll={onScroll}>
        { paragraphs.map(p => 
            <div id={`story-${p.id}`} key={`story-${p.id}`} className="story">
              <h1>{p.title}</h1>
              <p>{p.body}</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default Body;
