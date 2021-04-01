import React, { Component } from 'react';
import Map from './headers/Map'
import Search from './headers/Search'
import MasterHeader from './headers/MasterHeader'


class Footer extends Component {
  render() {
    return (
	    <div>
			<MasterHeader />
			<Search />
			<Map />
		</div>
)
}
}
export default Footer;