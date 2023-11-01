import { useNavigate } from 'react-router-dom';
function ListElement({item}) {

    
    const navigate = useNavigate();
    
    const navigateToDetails = () => {

        navigate(`/pokemonDetails/${item.id}`);

    }

    return (
        <li key={item.id} className="listElement">
                <h3 className="listName">{item.name}</h3>
                <img src={item.url} className="thumbnail" onClick={navigateToDetails}></img>
        </li>
    )
}


export default function ListContainer ({resultsList,startValue}) {
    let newStartValue = startValue + 1;
    return (
        <ol start={newStartValue} className="orderedList">
            {
                resultsList.map(item => {
                    return (
                        <ListElement item={item}></ListElement>
                    )
                })
            }
        </ol>

    );

}