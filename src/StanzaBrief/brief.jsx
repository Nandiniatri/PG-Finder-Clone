import { Layout } from "antd"
import './brief.css'

const {Content} = Layout

const Brief = () => {

    const firstPara ={
        background:"rgb(255, 255, 255)",
        boxShadow: "rgba(0, 0, 0, 0.09) 0px 0.2em 3em",
        borderRadius: "1em",
        padding:" 2.18182em",
        marginBottom: "48px",
        fontSize: "15px",
        margin:"15px"
    }

    return(
        <>
        <Layout>
            <Content style={firstPara}>
                <p>
                Most people consider Stanza Living to be a pretty decent PG in Delhi for Students & Working Professionals. But every single Stanza Living resident would tell you that it's much, much more than a  or . Because they know that no hostel in Delhi, be it in , , or , has professional room cleaning and laundry, customizable meals, and a common area that's absolutely lit. But then the question is - what do they call it if not a male and female  or  or ? Simple, they call it their second home
                </p>
                <h3 className="headingthird">Things to Remember while Renting a PG in Delhi</h3>
                <p>
                When talking of things you should remember while renting a male and female PG in Delhi, first and foremost is the rent. Especially if you want to live close to  or . Then you check what the rent for that PG Hostel gets you in return. How spacious is that 'spacious bedroom' you are promised? Is there food included? And what about room cleaning, laundry, Wi-Fi, and electricity? Seems like a lot, lot, lot, doesn't it? We're aware of that coz we've gone through this entire list while designing our residences and living experience. So once you decide to stay with us, the only thing or list to remember will be your packing list. And this list of the best Stanza Living residences: , , , , and .
                </p>
                <h3 className="headingthird">Gents and Ladies PG in Delhi - Stanza Living</h3>
                <p>Stanza Living is a better option than every single Hostel in Delhi. Why do we say that? Now, we usually like to be humble. But 80,000 young folks like you have chosen us. So safe to say, we're doing things better than your everyday PG accommodation in Delhi. For example, you won't get bland, white-walled rooms with us. They're vibrant and colorful, just like you. And our services list is exhaustive, unlike others. And you can access those services through the Stanza Living - Resident App. Next up, we have residence culture. Simply put, there actually is one at Stanza Living. Unlike most everyday hostels in Delhi, we organize regular movie screenings, game nights, and more such events. So that life here is always, well, full of life. These are some of the reasons why you should definitely choose Stanza Living. 80,000 of your peers have.</p>
            </Content>
        </Layout>    
        </>
    )
}

export default Brief