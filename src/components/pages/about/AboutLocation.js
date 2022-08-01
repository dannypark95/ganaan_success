import React from 'react';
import GoogleMapReact from 'google-map-react';

import Header from '../../layout/Header';
import About from '../../layout/dropdown/About';

import pin from '../../../media/google_pin.png';
import map_icon from '../../../media/gmap_icon.png';

// import { api } from '../../../credential';

const AboutLocation = () => {
  const defaultProps = {
    center: {
      lat: 10.342472885047503,
      lng: 123.9123898963602,
    },
    zoom: 17,
  };

  const SuccessPin = () => (
    <div>
      <div className='successPin'>
        <a
          href='https://goo.gl/maps/2ViTLhgyuHPnSKGT6'
          target='_blank'
          rel='noreferrer'
        >
          <img src={pin} alt='google_pin'></img>
        </a>
      </div>
      <div className='successTitle'>
        <div className='mapTitle'>Success Academy</div>
      </div>
    </div>
  );

  return (
    <div>
      <Header text={'학원소개'} sub={'위치'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1 sideLocation'>
            <div className='sideTitle'>학원소개</div>
            <About current={'location'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>위치</span>
            </div>
            <div className='googleMap'>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: 'AIzaSyB2pd-7LEnR9-po4o0PctYFp4734RAKfys',
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <SuccessPin
                  lat={defaultProps.center.lat}
                  lng={defaultProps.center.lng}
                />
              </GoogleMapReact>
            </div>
            <div className='address'>
              <div className='addressTitle'>
                <span className='subTitleNav'>주소</span>
              </div>
              <div className='addressDetail'>
                3rd Floor GCA Bldg, Gov. M. Cuenco Ave, Cebu City
              </div>
              <div className='gmap_icon'>
                <a
                  href='https://goo.gl/maps/2ViTLhgyuHPnSKGT6'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={map_icon} alt='google_map'></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLocation;
