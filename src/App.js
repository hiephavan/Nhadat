import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MobileWrapper from './components/mobileWrapper'
import MobileWrapperUser from './components/MobileWrapperUser'
import WebsiteWrapper from './components/WebsiteWrapper'
import ModalLogin from './components/ModalLogin'
import PropCompare from './components/PropCompare'
import BuyNowFooter from './components/BuyNowFooter'
class App extends Component {
  render() {
    return (
<div style ={{maxWidth: "100%"}} >
  <MobileWrapper />
  <MobileWrapperUser />
  <WebsiteWrapper />
  <PropCompare />

  <input type="hidden" id="wpestate_ajax_filtering" defaultValue="bee7b18220" />
  <input type="hidden" id="wpestate_payments_nonce" defaultValue="13d873a2ff" />

  <ModalLogin />
  <BuyNowFooter />

  <span id="elementor-device-mode" className="elementor-screen-only">
  </span>
  <p id="a11y-speak-intro-text" className="a11y-speak-intro-text" style={{position: 'absolute', margin: '-1px', padding: 0, height: '1px', width: '1px', overflow: 'hidden', clip: 'rect(1px, 1px, 1px, 1px)', WebkitClipPath: 'inset(50%)', clipPath: 'inset(50%)', border: 0, wordWrap: 'normal !important'}} hidden="hidden">Notifications</p>
  <div id="a11y-speak-assertive" className="a11y-speak-region" style={{position: 'absolute', margin: '-1px', padding: 0, height: '1px', width: '1px', overflow: 'hidden', clip: 'rect(1px, 1px, 1px, 1px)', WebkitClipPath: 'inset(50%)', clipPath: 'inset(50%)', border: 0, wordWrap: 'normal !important'}} aria-live="assertive" aria-relevant="additions text" aria-atomic="true">
  </div>
  <div id="a11y-speak-polite" className="a11y-speak-region" style={{position: 'absolute', margin: '-1px', padding: 0, height: '1px', width: '1px', overflow: 'hidden', clip: 'rect(1px, 1px, 1px, 1px)', WebkitClipPath: 'inset(50%)', clipPath: 'inset(50%)', border: 0, wordWrap: 'normal !important'}} aria-live="polite" aria-relevant="additions text" aria-atomic="true">
  </div>
</div>
      );
  }
}

export default App;
