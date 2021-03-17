import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import UpcomingReleasesPanel from './UpcomingReleasesPanel';
import {
  NODE_12_RELEASES,
  NODE_13_RELEASES,
  NODE_14_RELEASES,
  NODE_15_RELEASES,
} from './upcomingReleases';
import './UpcomingReleases.scss';

export default function UpcomingReleases(): JSX.Element {
  return (
    <div className="upcoming-releases">
      <Tabs>
        <TabList>
          <Tab>Node.js 12</Tab>
          <Tab>Node.js 13</Tab>
          <Tab>Node.js 14</Tab>
          <Tab>Node.js 15</Tab>
        </TabList>
        <TabPanel>
          <UpcomingReleasesPanel releases={NODE_12_RELEASES} />
        </TabPanel>
        <TabPanel>
          <UpcomingReleasesPanel releases={NODE_13_RELEASES} />
        </TabPanel>
        <TabPanel>
          <UpcomingReleasesPanel releases={NODE_14_RELEASES} />
        </TabPanel>
        <TabPanel>
          <UpcomingReleasesPanel releases={NODE_15_RELEASES} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
