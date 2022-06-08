import {Link} from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="notfound">
            <h2>Sorry</h2>
            <p>This page cannot be found </p>
            <Link to = '/'>Back to the homepage...</Link>
        </div>
    );
}

export default Notfound;
