import { connect } from 'react-redux';

import NaviMenu from '../components/NaviMenu';

const stab = [
  { methodGroup: 'channels',
    methodItems: [
      'channels.archive',
      'channels.create',
      'channels.history',
      'channels.info',
      'channels.invite',
      'channels.join',
      'channels.kick',
      'channels.leave',
    ],
  },
  { methodGroup: 'chat',
    methodItems: [
      'chat.delete',
      'chat.meMessage',
      'chat.postMessage',
      'chat.update',
    ],
  },
  { methodGroup: 'users',
    methodItems: [
      'users.getPresence',
      'users.identity',
      'users.info',
      'users.list',
      'users.setActive',
      'users.setPresence',
    ],
  },
];

const mapStateToProps = () => ({
  methodInfoList: stab,
});

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NaviMenu);
