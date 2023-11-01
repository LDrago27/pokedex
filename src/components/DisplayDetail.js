import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import axios from "axios";
export default function DisplayDetails() {

    const params = useParams();
    console.log(params);
    let imgUrl = `${process.env.REACT_APP_BASE_IMAGE_URL}/${params.id}.png?raw=true`;

    const [data, setData] = useState();

    useEffect( () => {

        const fetchData = async () => {

            axios.get(`${process.env.REACT_APP_BASE_URL}/pokemon/${params.id}/`)
            .then(result => {
                console.log(result.data);
                setData(result.data);
            });

        }
        fetchData();

    },[params.id]);



    return (
        <div className="container">
            <h3 className="heading">Pokemon Details</h3>
            {data!= undefined && <div className="flex_container">
                <img src={imgUrl} className="thumbnail-large"></img>
                <div>
                <h2 className="subheading">General Information</h2>
                <div className="details">
                    <tr>
                        <td className="rowheading">Name</td>
                        <td className="rowValues">{data.name}</td>
                    </tr>
                    <tr>
                        <td className="rowheading"> Type</td>
                        {data.types.map(item => (<span className="label label-info label-types">{item.type.name}</span>))}
                    </tr>
                    <tr>
                        <td className="rowheading">Weight</td>
                        <td className="rowValues">{data.weight}</td>
                    </tr>
                    <tr>
                        <td className="rowheading">Height</td>
                        <td className="rowValues">{data.height}</td>
                    </tr>
                    <tr>
                        <td className="rowheading">Base Exp</td>
                        <td className="rowValues">{data.base_experience}</td>
                    </tr>
                </div>
                </div>
            </div>}
            <div>

            </div>
        </div>
    )

}