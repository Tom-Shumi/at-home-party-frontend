import {Table} from 'react-bootstrap';
import styles from '/styles/home/DrinkRankingTable.module.css';

interface DrinkRankingTableProps {

}

const DrinkRankingTable: React.FC<DrinkRankingTableProps> = (props) => {


  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default DrinkRankingTable
