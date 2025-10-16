import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBpx";

const Home = () => {
    const loggedIn = {firstName : 'Danil', lastName : 'Ziyaa', email: 'ziyadanil2108@gmail.com'};
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || 'Guest'} subtext="Access and manage your account and transaction efficiently" />
                    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}/>
                </header>
                Recent Transaction

            </div>
            <RightSidebar user={loggedIn} trasaction={[]}  banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]} />
        </section>
    )
}

export default Home ;