import styles from '/styles/common/Pagination.module.css';
import {Button} from 'react-bootstrap';

interface PaginationProps {
  currentPage: number;
  paging: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = (props) => {

  const paging = (direction: number) => {
    const page = props.currentPage + direction;
    props.paging(page);
  }

  return (
    <>
      <div className={styles.buttonDiv}>
        <Button variant="success" className={styles.paginationButton}　onClick={() => paging(1)} >次のページへ→</Button>
        <Button variant="success" className={styles.paginationButton}　onClick={() => paging(-1)} >←前のページへ</Button>
      </div>
    </>
  )
}

export default Pagination;
