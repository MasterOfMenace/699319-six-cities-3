import React from 'react';
import PropTypes from 'prop-types';
import SortList from '../sort-list/sort-list.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import withOpen from '../../hocs/with-open/with-open.jsx';
import withSort from '../../hocs/with-sort/with-sort.jsx';

const SortListWithOpen = withOpen(SortList);
const OffersListWithSort = withSort(OffersList);
import {getCurrentOffers} from '../../utils.js';
import {OfferRenderType} from '../../const.js';

const Places = (props) => {
  const {offers, city} = props;
  const currentOffers = getCurrentOffers(offers, city);
  const offersCount = currentOffers.length;
  const locations = currentOffers.map((offer) => offer.location);
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCount} places to stay in {city.name}</b>
        <SortListWithOpen />
        <OffersListWithSort
          offers={currentOffers}
          type={OfferRenderType.MAIN}/>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers={currentOffers}
            offersLocations={locations}
            city={city}/>
        </section>
      </div>
    </div>
  );
};

Places.propTypes = {
  offers: PropTypes.array,
  city: PropTypes.object.isRequired
};

export default Places;
