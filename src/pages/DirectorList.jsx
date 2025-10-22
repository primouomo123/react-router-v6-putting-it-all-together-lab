import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
    // Replace me
    const {directors} = useOutletContext();

    const displayDirectors = directors.map(d => (
        <li key={d.id} ><Link to={d.id} >{d.name}</Link></li>
    ))

    return (
        <div>
            <ul>
                {displayDirectors}
                <br />
                <Link to={`new`}>Add New Director</Link>
            </ul>
        </div>      
    );
}

export default DirectorList;
