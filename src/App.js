import React from 'react';
import Menu from './components/Menu';
import Body from './components/Body';
import logo from './logo.svg';
import { getRenderedParagraphs, scrollTo } from './utils/ElementHelper';
import story from './content/story.json';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleSection: undefined
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.renderedParagraphs = getRenderedParagraphs(story.paragraphs);
    this.handleScroll();
  }

  updateMenuPosition() {
    if (!this.state.visibleSection) { return; }
    scrollTo(`button-${this.state.visibleSection}`, 'center');
  }

  handleScroll() {
    const { visibleSection } = this.state;
    const element = document.getElementsByClassName('body-content')[0];
    if (!element) {
      return;
    }
    const curPos = element.scrollTop;
    const selected = this.renderedParagraphs.find(paragraph => curPos < paragraph.position);

    if (selected && selected.id !== visibleSection) {
      this.setState({ visibleSection: selected.id }, () => {
        this.updateMenuPosition();
      });
    } else if (!selected && visibleSection) {
      this.setState({ visibleSection: undefined });
    }
  }

  render() {
    const { visibleSection } = this.state;
    return (
      <div className="App">
        <header id="app-header" className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{story.title}</p>
        </header>
        <div className="App-body">
          <Menu visibleSection={visibleSection} />
          <Body onScroll={() => this.handleScroll()} />
        </div>
      </div>
    );
  }
}

export default App;
