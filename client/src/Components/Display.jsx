import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import moment from 'moment';

const Display = props => {
    
    const [activities, setActivities] = useState([]);
    const [all, setAll] = useState([]);
    const [showPast, setShowPast] = useState(false);

    const fetchActivities = () => {
        axios.get("http://localhost:8000/api/schedule")
            .then(res => {
                console.log(res);
                setAll(res.data);
                // setActivities(res.data);
                // this will filter out past activities
                setActivities(res.data.filter(a => new Date(a.start) > new Date()));
            })
            .catch(err => console.log(err));
    }

    useEffect( () => {
        fetchActivities();
    }, []);

    const remove = _id => {
        // console.log(_id);
        axios.delete(`http://localhost:8000/api/schedule/${_id}`)
        .then(res => {
            console.log(res);
            fetchActivities();
        })
        .catch(err => console.log(err));
    }

    const toggle = e => {
        if(showPast) {
            setActivities(all.filter(a => new Date(a.start) > new Date()));
        } else {
            setActivities(all);
        }
        setShowPast(!showPast);
    }

    return (
        <div>
            <div className="all_activities">
                {/* {activities.map( (act, i) =>
                    <div className="an_activity card mb-3" key={act._id}>
                        <div className="activity_title card-header">{act.activity}</div>
                        <div className="card-body">
                            <p>{act.description}</p>
                            <p>{moment(act.start).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p>Duration: {act.duration} {act.units}</p>
                            <Link className="btn btn-outline-info" to={`/edit/${act._id}`} >Edit</Link>
                            <button className="btn btn-outline-danger float-right" onClick={e => remove(act._id)}>Remove</button>
                        </div>
                    </div>
                )} */}
                {activities.map( (act, i) =>
                    <div className="an_activity" key={act._id}>
                        <div className="activity_title">{act.activity}</div>
                        <div className="body">
                            <p className="pt-3 pb-5">{act.description}</p>
                            <p>{moment(act.start).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p>Duration: {act.duration} {act.units}</p>
                            <Link className="btn btn-outline-info btn-sm" to={`/edit/${act._id}`} >Edit</Link>
                            <button className="btn btn-outline-danger btn-sm float-right" onClick={e => remove(act._id)}>Remove</button>
                        </div>
                    </div>
                )}
            </div>
                { showPast ? <button className="btn btn-outline-info btn-sm mb-3" onClick={toggle} >Hide Past Activities</button> :
                <button className="btn btn-outline-info btn-sm mb-3" onClick={toggle} >Show Past Activities</button> }
        </div>
    )
}

export default Display;