// YOUR CODE HERE

class FishTableRow extends React.Component {
  constructor(props){
    super()
    this.state = {
      isTrue: false
    }
  }
  
  // handleTrue = function(){
  //   this.setState({isTrue: true})
  // }

  render(){
    console.log('props', this.props);
    
    return(
      <tr>
        <td className="fish-name">
          {this.props.fish.name}
          </td>
          <td> 
            <img src={this.props.fish.image} />
          </td>
            <td className="fish-description">
            {this.props.fish.description}
            </td> 

      </tr>
    )
  }
}



// FishTable.propTypes = {
//   fishes: React.PropTypes.array.isRequired
// };

FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

window.FishTableRow = FishTableRow;
