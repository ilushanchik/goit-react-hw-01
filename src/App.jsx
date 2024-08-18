import React from "react";
import userData from "./components/Profile/userData.json"
import Profile from "./components/Profile/Profile"
import friends from "./components/FriendList/friends.json"
import FriendList from "./components/FriendList/FriendList"
import transactions from "./components/TransactionHistory/transactions.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"
import Section from "./components/Section/Section";


const App = () => {
  return (
    <>
    <Section>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />  
      </Section>

     <Section>
       <FriendList friends={friends} />
      </Section>
<TransactionHistory items={transactions} />

  </>
  );
};

export default App;
