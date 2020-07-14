/**
 * Author: Andy
 * Date: 10/06/2020
 */
import React from 'react';

import StatusCard from '../components/ovComponents/StatusCard';
import PreviewCard from '../components/ovComponents/PreviewCard';
import SettingsCard from '../components/ovComponents/SettingsCard';
import LanguageCard from '../components/ovComponents/LanguageCard';
import OverviewCard from '../components/ovComponents/reusable/OverviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

const OverView = () => {
  const statusCardTextAddition = (
    <span
      style={{
        display: 'inline-block',
        textIndent: '0rem',
        width: '5rem',
        borderRadius: '0.5rem',
        height: '1.5rem',
        lineHeight: '1.5rem',
        background: 'orange',
        color: 'white',
        marginLeft: '0.5rem',
        fontSize: '0.8rem',
      }}
    >
      DESIGN
    </span>
  );
  const settingsButtonAddition = (
    <FontAwesomeIcon
      style={{ fontSize: '1.5rem', color: 'gray', marginRight: '0.5rem' }}
      icon={faWrench}
    />
  );

  const statusCard = (
    <OverviewCard
      titleTextAddition={statusCardTextAddition}
      width="98%"
      title="Status"
      contentHeight={'18rem'}
      content={<StatusCard />}
    />
  );
  const previewCard = (
    <OverviewCard
      width="98%"
      title="Survey testing and preview"
      contentHeight={'9rem'}
      content={<PreviewCard />}
    />
  );
  const settingsCard = (
    <OverviewCard
      titleButtonAddition={settingsButtonAddition}
      width="98%"
      title="Settings"
      contentHeight={'18rem'}
      content={<SettingsCard />}
    />
  );
  const languageCard = <LanguageCard width="98%" />;
  const cards = [statusCard, previewCard, settingsCard, languageCard];
  return (
    <div style={{ marginTop: '2rem' }}>
      {cards.map((item, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          {item}
        </div>
      ))}
    </div>
  );
};
export default OverView;
