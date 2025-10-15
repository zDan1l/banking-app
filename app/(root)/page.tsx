import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBpx";

const Home = () => {
    const loggedIn = {firstName : 'Danil'};
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || 'Guest'} subtext="Access and manage your account and transaction efficiently" />
                    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}/>
                </header>
            </div>
        </section>
    )
}

export default Home ;