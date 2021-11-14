import React from 'react'

const PetMap = () => {
    return (
            <div class = "Location">
                <div class = "Address">
                    <h3>
                        

                    </h3>
            </div>
        </div>
    )
}

export default PetMap;


class PetMap extends React.PetMap {
    constructor(PetAddress) {
      super(PetAddress);
      this.state = {
        
        isFetchingData: false,
        data: null
      };
    }
  
    componentDidMount () {
      this.setState({ isFetchingData: true });
      apiCall().then((data) => {
        this.setState({
          isFetchingData: true,
          data
        });
      });
    }
  
    render () {
      if (!this.state.data) {
        return <p>No data</p>;
      }
  
      if (!this.state.isLoading) {
        return <p>Loading data</p>;
      }
  
      // Render your component with data
    }
  }