# ScheduleKeeper

This is a organization application for users to access events/schedules all on one place! Feel free to suggest modifications to the app or even add new features!

## Features

<img src="https://media.giphy.com/media/Njyb2eoAa1WBOMEjFG/giphy.gif" alt="schedule gif">

View your dashboard, add events, and edit those events if they change. 

## Example Code

```
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
```

### Technologies Used

- ReactJS
- JavaScript
- NodeJS
- CSS/HTML
- Bootstrap
