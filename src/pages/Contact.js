import Side_nav from "../components/Side_nav";
import Header from "../components/Header";
import ContactList from "../components/ContactList";

const Contact = () => {
    return (
        <div className="ContactPage">
            <Side_nav
                show={true}
                outActive="profile"
                inActive="projects"
            />

            <div className="inner">
                <Header
                    title={'Contact'}
                    Color={'#1C3D6C'}
                />
                <ContactList />
            </div>
        </div>

    );
}

export default Contact;