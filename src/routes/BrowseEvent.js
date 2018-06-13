import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { withRouter } from 'react-router-dom';

import EventsSearcher from '../containers/EventsSearcher';
import EventsList from '../containers/EventsList';

const BrowseEvent = (props) => {
  console.log(props);
  return (
      <Grid>
        <Row>
          <EventsSearcher xs={12} md={3}/>
          <EventsList xs={12} md={9}/>
        </Row>
      </Grid>
  )
}

export default withRouter(BrowseEvent)

