import { Link } from "react-router-dom";
import SurveyList from "./Surveys/SurveyList";

export default function Dashboard() {
    return (
        <div>
            <SurveyList />
            <div className="fixed-action-btn">
                <Link className="btn-floating btn-large amber darken-3" to="/surveys/new">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
}
