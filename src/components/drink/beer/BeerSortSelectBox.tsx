
interface BeerSortSelectBoxProps {
  order: string
  handleChangeOrder: () => (e: any) => void
}

const BeerSortSelectBox: React.FC<BeerSortSelectBoxProps> = (props) => {

    return (
      <>
        並び替え：
        <select value={props.order} onChange={props.handleChangeOrder()} className="orderSelect">
          <option value=""></option>
          <option value="STAR_DESC">星多い順</option>
          <option value="STAR_ASC">星少ない順</option>
          <option value="ALCOHOL_DESC">アルコール強い順</option>
          <option value="ALCOHOL_ASC">アルコール弱い順</option>
          <option value="BITTER_DESC">苦味強い順</option>
          <option value="BITTER_ASC">苦味弱い順</option>
          <option value="FLAVOR_DESC">香り強い順</option>
          <option value="FLAVOR_ASC">香り弱い順</option>
          <option value="HOP_DESC">ホップ感ある順</option>
          <option value="HOP_ASC">ホップ感ない順</option>
          <option value="SHARP_DESC">キレある順</option>
          <option value="SHARP_ASC">キレない順</option>
          <option value="BODY_DESC">ボディ強い順</option>
          <option value="BODY_ASC">ボディ弱い順</option>
        </select>
      </>
    )
}

export default BeerSortSelectBox;
