import '../KartaPrac.css'
import 'bootstrap/dist/css/bootstrap.css';
function KartaPrac(props) {
    return (
        <table class="table table-sm">
            <thead class="text-center">
            <tr class="row">
                <th class="col-3" scope="col">Opis zadania</th>
                <th class="col-3" scope="col">Nazwa</th>
                <th class="col-3" scope="col">Data</th>
                <th class="col-3" scope="col">Priorytet</th>
            </tr>
            </thead>
            <tbody>
            {props.dziennik.map((v, k) => {
                console.log(v[3])
                return (<tr class="row" key={k}>
                    <td class="col-3">{v[0]}</td>
                    <td class="col-3">{v[1]}</td>
                    <td class="col-3">{v[2]}</td>
                    <td class="col-3">{v[3] ? 'Tak' : 'Nie'}</td>
                </tr>)
            })}
            </tbody>
        </table>
    )
}
export default KartaPrac