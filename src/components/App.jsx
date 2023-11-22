import user from './profiles/user.json';
import data from './statistics/data.json';
import friends from './friendsList/friends.json';
import transactions from './transactions/transactions.json';

import { Profile } from './profiles/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendsList/FriendsList';
import { TransactionHistory } from './transactions/Transactions';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
