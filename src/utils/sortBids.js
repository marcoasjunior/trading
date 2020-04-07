export default function compare(a, b) {

    const bid1 = parseFloat(a.bid.$numberDecimal)
    const bid2 = parseFloat(b.bid.$numberDecimal)

    let comparison = 0;
    if (bid1 > bid2) {
      comparison = 1;
    } else if (bid1 < bid2) {
      comparison = -1;
    }
    return comparison;
  }