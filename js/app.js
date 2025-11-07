// Adapted from original bundle.js - uses React from CDN
// Header Landing Page React Component
class HeaderLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false, mobileMenuOpen: false };
  }
  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  toggleMobileMenu = () => {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };
  render() {
    return React.createElement('header', { className: 'header' },
      React.createElement('div', { className: 'logo' }, 'WEBSITE LOGO'),
      React.createElement('nav', { className: 'nav' },
        React.createElement('a', { href: '#' }, 'about'),
        React.createElement('a', { href: '#' }, 'blog'),
        React.createElement('div', { className: 'dropdown' },
          React.createElement('button', { onClick: this.toggleDropdown }, 'products ▼'),
          this.state.dropdownOpen &&
            React.createElement('ul', { className: 'dropdown-menu' },
              React.createElement('li', null, 'category 1'),
              React.createElement('li', null, 'category 2'),
              React.createElement('li', null, 'category 3')
            )
        ),
        React.createElement('a', { href: '#' }, 'contact'),
        React.createElement('button', { className: 'hamburger', onClick: this.toggleMobileMenu }, '☰')
      ),
      React.createElement('div', { className: 'hero' },
        React.createElement('h1', null, 'start your adventure'),
        React.createElement('button', { className: 'cta' }, 'sign up now')
      )
    );
  }
}

// React Carousel Component
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
  }
  next = () => {
    this.setState({ current: (this.state.current + 1) % this.props.items.length });
  };
  prev = () => {
    this.setState({ current: (this.state.current - 1 + this.props.items.length) % this.props.items.length });
  };
  render() {
    return (
      React.createElement('div', { className: 'carousel-inner' },
        React.createElement('button', { onClick: this.prev }, '<'),
        React.createElement('div', null, this.props.items[this.state.current]),
        React.createElement('button', { onClick: this.next }, '>'),
        React.createElement('div', { className: 'carousel-dots' },
          this.props.items.map((_, i) =>
            React.createElement('span', {
              key: i,
              style: { margin: '0 4px', color: i === this.state.current ? '#007bff' : '#ccc' }
            }, '●')
          )
        )
      )
    );
  }
}

// React Cards Component
function Cards(props) {
  return React.createElement('div', { className: 'cards' },
    props.items.map((item, i) =>
      React.createElement('div', { className: 'card', key: i }, item)
    )
  );
}

// Footer React Component
function Footer() {
  return React.createElement('footer', { className: 'footer' },
    React.createElement('div', { className: 'footer-contact' },
      React.createElement('strong', null, 'Contact'),
      React.createElement('div', null, '1400 John F Kennedy Blvd'),
      React.createElement('div', null, 'Philadelphia, PA 19107')
    ),
    React.createElement('div', { className: 'footer-connect' },
      React.createElement('strong', null, 'Connect'),
      React.createElement('div', { className: 'footer-icons' },
        React.createElement('a', { href: '#', className: 'icon' }, '📘'),
        React.createElement('a', { href: '#', className: 'icon' }, '📸'),
        React.createElement('a', { href: '#', className: 'icon' }, '🐦')
      )
    ),
    React.createElement('div', { className: 'footer-copyright' },
      'Copyright © 2021'
    )
  );
}

// Mount React components
window.onload = function() {

  ReactDOM.render(
    React.createElement(HeaderLanding, null),
    document.getElementById('header-root')
  );

  ReactDOM.render(
    React.createElement(Carousel, { items: [
      React.createElement('img', { src: 'images/img1.jpg', alt: 'Welcome', style: { width: '100%', height: 'auto' } }),
      React.createElement('img', { src: 'images/img2.jpg', alt: 'Features', style: { width: '100%', height: 'auto' } }),
      React.createElement('img', { src: 'images/img3.jpg', alt: 'Contact', style: { width: '100%', height: 'auto' } })
    ] }),
    document.getElementById('carousel-root')
  );

  ReactDOM.render(
    React.createElement(Cards, { items: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nib.',
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
      'Euisom tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad.'
    ] }),
    document.getElementById('cards-root')
  );

  ReactDOM.render(
    React.createElement(Footer, null),
    document.getElementById('footer-root')
  );
  
};
