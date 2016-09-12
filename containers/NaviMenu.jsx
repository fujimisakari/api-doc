import { connect } from 'react-redux';

import NaviMenu from '../components/NaviMenu';

const stab = [
  { methodGroup: 'channels',
    methodItems: [
      'archive',
      'create',
      'history',
      'info',
      'invite',
      'join',
      'kick',
      'leave',
    ],
  },
  { methodGroup: 'chat',
    methodItems: [
      'delete',
      'meMessage',
      'postMessage',
      'update',
    ],
  },
  { methodGroup: 'users',
    methodItems: [
      'getPresence',
      'identity',
      'info',
      'list',
      'setActive',
      'setPresence',
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
