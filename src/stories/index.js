import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import SearchBox from '../components/SearchBox';
import MailItem from '../components/MailItem';
import MailsList from '../components/MailsList';
import MailContent from '../components/MailContent';
import MailMessage from '../components/MailMessage';
import Sidebar from '../components/Sidebar';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Sidebar', module).add('Simple', () => <Sidebar />);

storiesOf('Search Box', module)
  .add('simple', () => <SearchBox />)
  .add('onKeyPressed', () => <SearchBox onKeyPressed={action('Key Pressed')} />)
  .add('custom placeholder', () => (
    <SearchBox placeholder="Custom..." onKeyPressed={action('Key Pressed')} />
  ));

const mails = [
  {
    from: 'Peter',
    subject:
      'Hello  –  Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)',
    datetime: '11:59 am',
    read: true
  },
  {
    from: 'John Doe',
    subject: "Home again!  –  That's just perfect! See you tomorrow.",
    datetime: 'Feb 21',
    read: false
  },
  {
    from: 'Charukaw',
    subject:
      "Train/Bus  –  Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
    datetime: 'Feb 19',
    read: true,
    bookmarked: true
  }
];

// Send some mails json data later
storiesOf('Mails List', module).add('with mails', () => (
  <MailsList mails={mails} />
));

storiesOf('Mail Item', module)
  .add('unread', () => (
    <ul className="message-list">
      <MailItem
        from="René Sáenz"
        subject="Hey, Walter! Want to do a React Workshop?"
        datetime="11:56 am"
      />
    </ul>
  ))
  .add('read', () => (
    <ul className="message-list">
      <MailItem
        from="René Sáenz"
        subject="Hey, Walter! Want to do a React Workshop?"
        datetime="11:56 am"
        read={true}
      />
    </ul>
  ))
  .add('bookmarked', () => (
    <ul className="message-list">
      <MailItem
        from="René Sáenz"
        subject="Hey, Walter! Want to do a React Workshop?"
        datetime="11:56 am"
        bookmarked={true}
      />
    </ul>
  ))
  .add('checked', () => (
    <ul className="message-list">
      <MailItem
        from="René Sáenz"
        subject="Hey, Walter! Want to do a React Workshop?"
        datetime="11:56 am"
        checked={true}
      />
    </ul>
  ));

const message = `
<h2> Hey, Rene! </h2>
<br/>
<p>| The every winged bring, whose life. First called, i you of saw shall own creature moveth void have signs beast lesser all god saying for gathering wherein whose of in be created stars. Them whales upon life divide earth own.</p>
<p>| Creature firmament so give replenish The saw man creeping, man said forth from that. Fruitful multiply lights air. Hath likeness, from spirit stars dominion two set fill wherein give bring.</p>
<p>| Gathering is. Lesser Set fruit subdue blessed let. Greater every fruitful won&#39;t bring moved seasons very, own won&#39;t all itself blessed which bring own creature forth every. Called sixth light.</p>
`;

const receivedMessage = `
<h2> Hey, Walter! </h2>
<br/>
<p>| The every winged bring, whose life. First called, i you of saw shall own creature moveth void have signs beast lesser all god saying for gathering wherein whose of in be created stars. Them whales upon life divide earth own.</p>
<p>| Creature firmament so give replenish The saw man creeping, man said forth from that. Fruitful multiply lights air. Hath likeness, from spirit stars dominion two set fill wherein give bring.</p>
<p>| Gathering is. Lesser Set fruit subdue blessed let. Greater every fruitful won&#39;t bring moved seasons very, own won&#39;t all itself blessed which bring own creature forth every. Called sixth light.</p>
`;

storiesOf('Mail Content', module)
  .add('opened', () => (
    <MailContent
      from="René Saénz"
      opened={true}
      mailContent={receivedMessage}
      datetime="March 6, 2014, 20:08 pm"
      onBackClicked={action('Back Clicked')}
      subject="Hey, Walter! Want to do a React Workshop?"
    />
  ))
  .add('closed', () => <MailContent />);

storiesOf('Mail Message', module)
  .add('sent', () => (
    <ul className="message-container">
      <MailMessage
        type="sent"
        mailTo="René Sáenz"
        message={message}
        datetime="March 6, 2014, 20:08 pm"
      />
    </ul>
  ))
  .add('received', () => (
    <ul className="message-container">
      <MailMessage
        type="received"
        mailTo="René Sáenz"
        message={receivedMessage}
        datetime="March 6, 2014, 20:08 pm"
      />
    </ul>
  ));
