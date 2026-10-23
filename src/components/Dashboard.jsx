
import BookingSummary from './BookingSummary'
import RevenueStats from './RevenueStats'

function Dashboard() {
    return (
        <section>
            <h2>
                <BookingSummary />
                <RevenueStats />
            </h2>
        </section>
    )
}


export default Dashboard
