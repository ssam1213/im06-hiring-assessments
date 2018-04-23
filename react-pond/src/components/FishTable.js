

const FishTable = ({fishes}) => {
  console.log(fishes);
  
  return (
    <table>
      <tbody>
        {fishes.map((fish, i)=>{ 
          return <FishTableRow fish={fish} key={i} />
        })}
        </tbody>
    </table>
  )
}


FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

window.FishTable = FishTable;
