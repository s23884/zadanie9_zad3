import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Services = () => <h2>Services</h2>;
const Contact = () => <h2>Contact</h2>;
const ContactUs = () => <h2>Contact Us</h2>;
const ContactPl = () => <h2>Contact Pl</h2>;
const ContactDe = () => <h2>Contact De</h2>;

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        Nie znaleziono elementu: <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/contact/us">Contact Us</Link>
            </li>
            <li>
              <Link to="/contact/pl">Contact Pl</Link>
            </li>
            <li>
              <Link to="/contact/de">Contact De</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/us" element={<ContactUs />} />
          <Route path="/contact/pl" element={<ContactPl />} />
          <Route path="/contact/de" element={<ContactDe />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
};

Home.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.number,
  prop3: PropTypes.bool,
  prop4: PropTypes.func,
  prop5: PropTypes.array,
  prop6: PropTypes.object,
  prop7: PropTypes.element,
  prop8: PropTypes.node,
  prop9: PropTypes.instanceOf(Object),
  prop10: PropTypes.oneOf(['option1', 'option2', 'option3']),
  prop11: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  prop12: PropTypes.arrayOf(PropTypes.number),
  prop13: PropTypes.objectOf(PropTypes.string),
  prop14: PropTypes.shape({
    nestedProp: PropTypes.string,
  }),
  prop15: PropTypes.any,
};

export default App;
