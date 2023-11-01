import { useNavigate } from "react-router-dom";
export default function ShowResult({pageLen, totalResult, onClickhandler, onClickhandlerPrev}) {

    let newPageLen = pageLen + 20
    const navigate = useNavigate();

    function navigateToSearch() {
        navigate('/pokemonSearch');
    }

    return (
        <div className="showing-tab">
            <h3 className="showResult_text">
                Showing {newPageLen} results out of {totalResult} results. 
            </h3>
            <div>
                <button onClick={onClickhandler} className="showResult_next">Next</button>
                <button onClick={onClickhandlerPrev} className="showResult_next">Prev</button>
                <button onClick={navigateToSearch} className="showResult_next">Search</button>
            </div>


        </div>

    );

}