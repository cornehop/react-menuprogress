import React from 'react';
import story from '../content/story.json';
import { scrollTo } from '../utils/ElementHelper';
import '../styles/Menu.scss';

class Menu extends React.Component {
  render() {
    const { paragraphs } = story;
    const { visibleSection } = this.props;
    return (
      <div className="body-menu">
        { paragraphs.map(p => 
            <button
              id={`button-${p.id}`}
              key={`button-${p.id}`}
              type="button"
              className={`menu-button${visibleSection === p.id ? ' selected' : ''}`}
              onClick={() => scrollTo(`story-${p.id}`, 'start')}>
                {p.title}
            </button>
          ) }
      </div>
    );
  }
}

export default Menu;
