import styles from '/styles/common/Pagination.module.css';
import {Button} from 'react-bootstrap';

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  paging: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = (props) => {

  const paging = (direction: number) => {
    let page = props.currentPage + direction;
    page = page < 0 ? 0 : page;
    props.paging(page);
  }

  const isPrevDisabled = props.currentPage == 0;
  const isNextDisabled = props.maxPage == props.currentPage

  const isPaginationDisabled = isPrevDisabled && isNextDisabled

  return (

    <>{isPaginationDisabled ||
      <div className={styles.buttonDiv}>
        <Button variant="success" className={styles.paginationButton}　onClick={() => paging(1)} disabled={isNextDisabled} >次のページへ→</Button>
        <Button variant="success" className={styles.paginationButton}　onClick={() => paging(-1)} disabled={isPrevDisabled} >←前のページへ</Button>
      </div>
    }</>
  )
}

export default Pagination;
